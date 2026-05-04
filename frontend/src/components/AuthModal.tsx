"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useAuth } from "@/lib/contexts/AuthContext";

type ModalView = "auth" | "forgotPassword";

export default function AuthModal({ onClose }: any) {
  const router = useRouter();
  const { login } = useAuth();

  const [role, setRole] = useState<"student" | "institute">("student");
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Forgot password state
  const [view, setView] = useState<ModalView>("auth");
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  async function handleUserRedirect(user: any) {
    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email || null,
        role,
        createdAt: serverTimestamp(),
      });
    }

    const finalSnap = await getDoc(userRef);
    const userRole = finalSnap.data()?.role as "student" | "institute";

    login(userRole);
    router.push(userRole === "student" ? "/student" : "/institute");
    onClose();
  }

  async function loginWithGoogle() {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await handleUserRedirect(result.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleEmailAuth() {
    try {
      setLoading(true);
      setError("");
      let result;
      if (isLogin) {
        result = await signInWithEmailAndPassword(auth, email, password);
      } else {
        result = await createUserWithEmailAndPassword(auth, email, password);
      }
      await handleUserRedirect(result.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    if (!resetEmail.trim()) {
      setResetError("Please enter your email address.");
      return;
    }
    try {
      setResetLoading(true);
      setResetError("");
      await sendPasswordResetEmail(auth, resetEmail.trim());
      setResetSuccess(true);
    } catch (err: any) {
      // Map Firebase errors to friendly messages
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/invalid-email"
      ) {
        setResetError("No account found with this email address.");
      } else {
        setResetError("Something went wrong. Please try again.");
      }
    } finally {
      setResetLoading(false);
    }
  }

  function openForgotPassword() {
    setResetEmail(email); // pre-fill with whatever they typed
    setResetError("");
    setResetSuccess(false);
    setView("forgotPassword");
  }

  function backToAuth() {
    setView("auth");
    setResetEmail("");
    setResetError("");
    setResetSuccess(false);
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div
        className="
          relative
          w-[480px] max-w-[95vw]
          max-h-[85vh]
          overflow-y-auto
          bg-gradient-to-br from-gray-900 via-black to-gray-800
          rounded-3xl
          border border-white/10
          shadow-[0_25px_60px_rgba(0,0,0,0.5)]
          px-10 py-10
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        {/* ── FORGOT PASSWORD VIEW ── */}
        {view === "forgotPassword" && (
          <>
            {/* Back arrow */}
            <button
              onClick={backToAuth}
              className="flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition"
            >
              ← Back to Sign In
            </button>

            <h2 className="text-2xl font-semibold text-center text-white mb-2">
              Reset Password
            </h2>
            <p className="text-center text-gray-400 text-sm mb-6">
              Enter your email and we'll send a reset link.
            </p>

            {resetSuccess ? (
              /* Success state */
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <p className="text-green-400 font-medium mb-2">
                  Reset link sent!
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Check your inbox at{" "}
                  <span className="text-white">{resetEmail}</span> and follow
                  the link to reset your password.
                </p>
                <button
                  onClick={backToAuth}
                  className="
                    w-full py-3
                    bg-gradient-to-r from-blue-500 to-purple-600
                    text-white font-semibold rounded-lg
                    hover:from-purple-600 hover:to-pink-500
                    transition-all
                  "
                >
                  Back to Sign In
                </button>
              </div>
            ) : (
              /* Email input + send button */
              <>
                <input
                  type="email"
                  placeholder="Your account email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleForgotPassword()}
                  className="
                    w-full
                    bg-white/5
                    border border-white/10
                    px-4 py-3
                    rounded-lg
                    text-white
                    placeholder-gray-500
                    focus:outline-none
                    focus:border-blue-500
                    transition
                    mb-4
                  "
                />

                {resetError && (
                  <p className="text-red-400 text-sm text-center mb-4">
                    {resetError}
                  </p>
                )}

                <button
                  onClick={handleForgotPassword}
                  disabled={resetLoading}
                  className="
                    w-full py-3
                    bg-gradient-to-r from-blue-500 to-purple-600
                    text-white font-semibold rounded-lg shadow-lg
                    hover:from-purple-600 hover:to-pink-500
                    transition-all
                    disabled:opacity-60 disabled:cursor-not-allowed
                  "
                >
                  {resetLoading ? "Sending..." : "Send Reset Link"}
                </button>
              </>
            )}
          </>
        )}

        {/* ── MAIN AUTH VIEW ── */}
        {view === "auth" && (
          <>
            <h2 className="text-2xl font-semibold text-center text-white mb-2">
              Welcome to E-Certify
            </h2>
            <p className="text-center text-gray-400 text-sm mb-6">
              Secure certificate authentication platform
            </p>

            {/* Role Toggle */}
            <div className="flex bg-white/5 rounded-lg p-1 mb-6">
              <button
                onClick={() => setRole("student")}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition ${role === "student"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "text-gray-400"
                  }`}
              >
                Student
              </button>
              <button
                onClick={() => setRole("institute")}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition ${role === "institute"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "text-gray-400"
                  }`}
              >
                Institute
              </button>
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full
                bg-white/5
                border border-white/10
                px-4 py-3
                rounded-lg
                text-white
                placeholder-gray-500
                focus:outline-none
                focus:border-blue-500
                transition
                mb-4
              "
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                bg-white/5
                border border-white/10
                px-4 py-3
                rounded-lg
                text-white
                placeholder-gray-500
                focus:outline-none
                focus:border-blue-500
                transition
                mb-3
              "
            />

            {/* Forgot Password link — only shown on login mode */}
            {isLogin && (
              <div className="flex justify-end mb-4">
                <button
                  onClick={openForgotPassword}
                  className="text-sm text-blue-400 hover:underline transition"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {!isLogin && <div className="mb-6" />}

            {/* Primary Button */}
            <button
              onClick={handleEmailAuth}
              disabled={loading}
              className="
                w-full py-3
                bg-gradient-to-r from-blue-500 to-purple-600
                text-white
                font-semibold
                rounded-lg
                shadow-lg
                hover:from-purple-600 hover:to-pink-500
                transition-all
                mb-6
                disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {loading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Google Button */}
            <button
              onClick={loginWithGoogle}
              className="
                w-full py-3
                bg-white/5
                border border-white/10
                rounded-lg
                text-gray-300
                font-medium
                hover:bg-white/10
                transition
              "
            >
              Continue with Google
            </button>

            {/* Switch Mode */}
            <p
              onClick={() => { setIsLogin(!isLogin); setError(""); }}
              className="text-center text-sm text-blue-400 cursor-pointer hover:underline mt-6"
            >
              {isLogin
                ? "Don't have an account? Create one"
                : "Already have an account? Sign in"}
            </p>

            {error && (
              <p className="text-red-400 text-sm text-center mt-4">{error}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}