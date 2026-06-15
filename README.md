<div align="center">

<br/>

<img src="./assets/logo.png" width="140" alt="E-Certify Logo"/>

<br/>
<br/>

# ⛓️ E-Certify

### 🎓 Blockchain-Based Academic Certificate Verification

<p>
A production-ready decentralized application (DApp) that makes academic certificate fraud <strong>impossible</strong>.<br/>
Institutions issue tamper-proof certificates on Ethereum. Anyone verifies them — instantly, trustlessly, forever.
</p>

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Solidity](https://img.shields.io/badge/Solidity_^0.8-363636?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org/)
[![Hardhat](https://img.shields.io/badge/Hardhat-FFF100?style=for-the-badge&logo=ethereum&logoColor=black)](https://hardhat.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![IPFS](https://img.shields.io/badge/IPFS-65C2CB?style=for-the-badge&logo=ipfs&logoColor=white)](https://ipfs.tech/)
[![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white)](https://ethereum.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](./CONTRIBUTING.md)
[![Deployed on Sepolia](https://img.shields.io/badge/Deployed-Sepolia_Testnet-purple?style=flat-square)](https://sepolia.etherscan.io/)
![GitHub stars](https://img.shields.io/github/stars/Amar13singh/blockchain-based-certification?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/Amar13singh/blockchain-based-certification?style=flat-square)

<br/>

**[🌐 Live Demo](#) &nbsp;·&nbsp; [📜 Smart Contract on Etherscan](#) &nbsp;·&nbsp; [🎥 Demo Video](#) &nbsp;·&nbsp; [🐛 Report Bug](../../issues) &nbsp;·&nbsp; [✨ Request Feature](../../issues)**

<br/>

</div>

---

## 📸 Screenshots

<div align="center">

### 🏠 Landing Page
![Landing Page](./assets/screenshots/landing.png)

### 🏛️ Institution Dashboard
![Dashboard](./assets/screenshots/dashboard.png)

### ✅ Verification Result — Valid Certificate
![Valid](./assets/screenshots/verify-valid.png)

### ❌ Verification Result — Tampered / Not Found
![Invalid](./assets/screenshots/verify-invalid.png)

### 🎓 Student Certificate Portal
![Student Portal](./assets/screenshots/student-portal.png)

</div>

> 📁 All screenshots are in [`./assets/screenshots/`](./assets/screenshots/)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Why E-Certify?](#-why-e-certify)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [How It Works](#-how-it-works)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone & Install](#1-clone--install)
  - [Environment Setup](#2-environment-setup)
  - [Smart Contract Deployment](#3-compile--deploy-smart-contract)
  - [Run the App](#4-run-the-app)
- [MetaMask Setup](#-metamask--sepolia-testnet-setup)
- [Smart Contract Deep Dive](#-smart-contract-deep-dive)
- [API Reference](#-api-reference)
- [Environment Variables](#-environment-variables)
- [Security Design](#-security-design)
- [Gas Optimization](#-gas-optimization)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Overview

**E-Certify** is a full-stack decentralized application built to solve one of the most persistent problems in hiring and academia — **certificate fraud**.

Traditional certificate verification requires contacting the issuing institution, waiting days for a response, and trusting a centralized database that can be hacked, corrupted, or simply taken offline. E-Certify eliminates all of that.

When an institution issues a certificate through E-Certify:
1. The certificate file is hashed using **SHA-256**
2. The file is pinned permanently to **IPFS via Pinata**
3. The hash + IPFS CID is recorded on the **Ethereum blockchain** via a Solidity smart contract
4. The student receives an **automated email** with their certificate details

When anyone wants to verify a certificate, they upload the file — the app regenerates the hash and compares it against the immutable on-chain record. **No authority needed. No waiting. No trust required.**

> *"Don't trust, verify."* — The blockchain ethos, applied to academic credentials.

---

## ❓ Why E-Certify?

Certificate fraud costs employers and institutions billions annually. Existing solutions either rely on proprietary databases (centralized, hackable) or manual outreach (slow, unscalable).

| Problem | Traditional Approach | E-Certify |
|---|---|---|
| Certificate forgery | Hard to detect without manual checks | Cryptographically impossible |
| Verification time | Days to weeks | < 3 seconds |
| Single point of failure | Yes — institution's server | No — Ethereum is always up |
| Cost per verification | $5–$50 per check (manual) | ~$0.001 (gas only at issuance) |
| Audit trail | Partial, mutable | Complete, immutable, public |
| Revocation | No standard mechanism | On-chain revocation with reason |
| Privacy | Depends on institution | Verifier only sees hash match — no PII exposed |

---

## ✨ Key Features

### 🔐 Cryptographic Certificate Issuance
Every certificate is hashed using SHA-256 before anything touches the blockchain. Even a single character change in the PDF produces a completely different hash — making forgery cryptographically infeasible.

### ⛓️ Immutable On-Chain Storage
Certificate hashes, IPFS CIDs, issuer wallet addresses, and timestamps are stored permanently on the Ethereum blockchain. No administrator, no hacker, no government can alter or delete them.

### 🗂️ Decentralized File Storage (IPFS + Pinata)
Certificate files are pinned to the InterPlanetary File System (IPFS) via Pinata, ensuring they are permanently accessible via content-addressed URIs — independent of any server.

### 🦊 MetaMask Wallet Authentication
Institutions authenticate using their Ethereum wallet via MetaMask. This eliminates passwords, session tokens, and the risk of credential stuffing attacks.

### 📧 Automated Student Email Notifications
The moment a certificate is issued on-chain, the student receives a confirmation email (via Nodemailer + Firebase Admin SDK) containing their certificate details, IPFS link, and transaction hash.

### 🔄 Secure Forgot Password Flow
Institutional accounts support OTP-based password recovery through Firebase Authentication, with server-side validation to prevent abuse.

### 🧾 Institution Dashboard
A dedicated dashboard lets authorized institutions issue certificates, view their issuance history, monitor transaction statuses, and revoke certificates with an on-chain reason.

### 🎓 Student Certificate Portal
Students can log in to view all their issued certificates, download originals from IPFS, and share a public verification link with employers.

### ♻️ On-Chain Certificate Revocation
Institutions can revoke a certificate (e.g., in case of academic dishonesty) on-chain with a reason string. Revoked certificates show a clear warning on verification.

### 🔍 Public Verification — No Login Required
Anyone — an employer, university, or individual — can verify a certificate by uploading the file. No account needed. No API key. Just the file.

---

## 🏗 System Architecture

```
╔══════════════════════════════════════════════════════════════════╗
║                        CLIENT LAYER                             ║
║                                                                  ║
║   ┌─────────────────┐    ┌─────────────────┐    ┌────────────┐  ║
║   │  Institution UI │    │  Verifier UI    │    │ Student UI │  ║
║   │  (Dashboard)    │    │  (Public Page)  │    │  (Portal)  │  ║
║   └────────┬────────┘    └────────┬────────┘    └─────┬──────┘  ║
╚════════════╪════════════════════╪═══════════════════╪══════════╝
             │                   │                   │
             ▼                   ▼                   ▼
╔══════════════════════════════════════════════════════════════════╗
║                      NEXT.JS APP LAYER                          ║
║                                                                  ║
║   ┌────────────────────────────────────────────────────────┐    ║
║   │              Next.js 14 (App Router)                   │    ║
║   │     Server Components · API Routes · Middleware        │    ║
║   └───────────────────────┬────────────────────────────────┘    ║
╚═══════════════════════════╪══════════════════════════════════════╝
                            │
          ┌─────────────────┼──────────────────┐
          ▼                 ▼                  ▼
╔═════════════════╗ ╔══════════════╗ ╔══════════════════╗
║   BLOCKCHAIN    ║ ║   STORAGE    ║ ║   FIREBASE       ║
║                 ║ ║              ║ ║                  ║
║  Ethereum       ║ ║  IPFS via    ║ ║  Firestore DB    ║
║  Sepolia        ║ ║  Pinata      ║ ║  Auth            ║
║                 ║ ║              ║ ║  Admin SDK       ║
║  CertificateReg ║ ║  CID Storage ║ ║  Email Triggers  ║
║  .sol           ║ ║              ║ ║                  ║
╚═════════════════╝ ╚══════════════╝ ╚══════════════════╝
          │
          ▼
╔══════════════════════════════════════════════════════════════════╗
║                    SMART CONTRACT                                ║
║                                                                  ║
║  issueCertificate(bytes32 hash, string cid)                     ║
║  verifyCertificate(bytes32 hash) → CertificateData              ║
║  revokeCertificate(bytes32 hash, string reason)                 ║
║                                                                  ║
║  Events: CertificateIssued | CertificateRevoked                 ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | Next.js 14, React 18, TypeScript | App framework with SSR + App Router |
| **Styling** | Tailwind CSS | Utility-first responsive design |
| **Blockchain** | Solidity ^0.8, Hardhat | Smart contract development & testing |
| **Web3 Client** | Ethers.js v6 | Wallet connection & contract interaction |
| **Wallet** | MetaMask | Institutional authentication |
| **IPFS** | Pinata SDK | Decentralized certificate file storage |
| **Auth & DB** | Firebase Auth, Firestore | User accounts & metadata storage |
| **Email** | Nodemailer + Firebase Admin SDK | Automated student notifications |
| **Hashing** | Node.js `crypto` (SHA-256) | Certificate fingerprinting |
| **Testnet** | Ethereum Sepolia | Contract deployment & testing |
| **Testing** | Hardhat + Chai + Mocha | Smart contract unit tests |

---

## 🔄 How It Works

### 📤 Certificate Issuance Flow

```
Step 1: Institution authenticates via MetaMask (wallet signature)
         │
         ▼
Step 2: Institution fills issuance form
        (student name, email, certificate type, issue date)
         │
         ▼
Step 3: Upload certificate PDF/image
         │
         ▼
Step 4: Client-side SHA-256 hash generated from file buffer
        hash = crypto.createHash('sha256').update(fileBuffer).digest('hex')
         │
         ▼
Step 5: File uploaded to IPFS via Pinata SDK
        → Returns content identifier (CID)
        e.g. QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco
         │
         ▼
Step 6: Smart contract call: issueCertificate(hash, cid)
        → Tx signed by institution's MetaMask wallet
        → Hash + CID + msg.sender + block.timestamp stored on-chain
        → Event emitted: CertificateIssued(hash, issuer, timestamp)
         │
         ▼
Step 7: Firebase Firestore updated with metadata
        (student email, name, cert type, tx hash)
         │
         ▼
Step 8: Nodemailer sends student notification email
        Subject: "Your certificate has been issued on blockchain"
        Body: IPFS link + Etherscan transaction link + verification instructions
```

### 🔍 Certificate Verification Flow

```
Step 1: Verifier visits /verify (no login required)
         │
         ▼
Step 2: Upload the certificate file to verify
         │
         ▼
Step 3: Client regenerates SHA-256 hash from file
         │
         ▼
Step 4: Smart contract queried: verifyCertificate(hash)
         │
         ├── Hash FOUND on-chain
         │     → Display: ✅ VERIFIED
         │     → Show: Issuer address, timestamp, IPFS link, tx hash
         │     → Check revocation status
         │         ├── Not revoked → VALID
         │         └── Revoked → Show revocation reason + date
         │
         └── Hash NOT found on-chain
               → Display: ❌ NOT VERIFIED
               → Message: "This certificate was not issued through E-Certify
                           or has been tampered with."
```

---

## 📁 Project Structure

```
blockchain-based-certification/
│
├── 📁 app/                              # Next.js 14 App Router
│   ├── 📁 (auth)/
│   │   ├── login/page.tsx               # Institution login
│   │   └── forgot-password/page.tsx     # OTP-based password reset
│   ├── 📁 dashboard/
│   │   ├── page.tsx                     # Institution dashboard home
│   │   ├── issue/page.tsx               # Certificate issuance form
│   │   ├── history/page.tsx             # Issuance history
│   │   └── revoke/page.tsx              # Revoke certificate
│   ├── 📁 verify/
│   │   └── page.tsx                     # Public verification page
│   ├── 📁 student/
│   │   ├── page.tsx                     # Student portal home
│   │   └── [certId]/page.tsx            # Individual certificate view
│   ├── layout.tsx                       # Root layout
│   └── page.tsx                         # Landing page
│
├── 📁 components/                       # Reusable UI components
│   ├── FileDropzone.tsx                 # Drag-and-drop file upload
│   ├── CertificateCard.tsx              # Certificate display card
│   ├── WalletConnect.tsx                # MetaMask connect button
│   ├── VerifyResult.tsx                 # Valid/Invalid result UI
│   ├── TransactionStatus.tsx            # Blockchain tx status indicator
│   └── Navbar.tsx                       # Navigation bar
│
├── 📁 contracts/                        # Solidity smart contracts
│   └── CertificateRegistry.sol          # Main contract
│
├── 📁 scripts/                          # Hardhat scripts
│   └── deploy.ts                        # Deployment script
│
├── 📁 test/                             # Smart contract tests
│   └── CertificateRegistry.test.ts      # Hardhat + Chai tests
│
├── 📁 pages/api/                        # Next.js API Routes
│   ├── issue.ts                         # POST /api/issue
│   ├── verify.ts                        # POST /api/verify
│   └── revoke.ts                        # POST /api/revoke
│
├── 📁 lib/                              # Core utility modules
│   ├── hash.ts                          # SHA-256 file hashing
│   ├── pinata.ts                        # IPFS upload via Pinata
│   ├── mailer.ts                        # Nodemailer email sender
│   ├── firebase.ts                      # Firebase client init
│   ├── firebaseAdmin.ts                 # Firebase Admin SDK init
│   └── contract.ts                      # Ethers.js contract helpers
│
├── 📁 hooks/                            # Custom React hooks
│   ├── useWallet.ts                     # MetaMask connection hook
│   └── useContract.ts                   # Smart contract interaction hook
│
├── 📁 types/                            # TypeScript type definitions
│   └── certificate.ts                   # Certificate interfaces
│
├── 📁 assets/                           # Static assets
│   ├── logo.png
│   └── screenshots/                     # README screenshots
│
├── hardhat.config.ts                    # Hardhat configuration
├── .env.example                         # Environment variable template
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed and configured:

| Requirement | Version | Link |
|---|---|---|
| Node.js | v18+ | [nodejs.org](https://nodejs.org/) |
| npm or yarn | latest | — |
| MetaMask | latest | [metamask.io](https://metamask.io/) |
| Git | any | [git-scm.com](https://git-scm.com/) |

You'll also need accounts on:
- [**Firebase**](https://console.firebase.google.com/) — for auth and database
- [**Pinata**](https://pinata.cloud/) — for IPFS file pinning
- [**Infura**](https://infura.io/) or [**Alchemy**](https://alchemy.com/) — for Sepolia RPC
- [**Etherscan**](https://etherscan.io/) — for contract verification (optional)

---

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/Amar13singh/blockchain-based-certification.git

# Navigate into the project
cd blockchain-based-certification

# Install all dependencies
npm install
```

---

### 2. Environment Setup

```bash
# Copy the environment template
cp .env.example .env
```

Open `.env` and fill in all values. See the [Environment Variables](#-environment-variables) section for a complete reference.

---

### 3. Compile & Deploy Smart Contract

```bash
# Compile the Solidity contracts
npx hardhat compile

# ── LOCAL DEVELOPMENT ──────────────────────────────────
# Start a local Hardhat node (keep this terminal open)
npx hardhat node

# In a new terminal, deploy to the local network
npx hardhat run scripts/deploy.ts --network localhost

# ── SEPOLIA TESTNET ────────────────────────────────────
# Get Sepolia ETH from the faucet: https://sepoliafaucet.com/
# Then deploy to Sepolia
npx hardhat run scripts/deploy.ts --network sepolia

# Verify contract on Etherscan (optional but recommended)
npx hardhat verify --network sepolia <DEPLOYED_CONTRACT_ADDRESS>
```

After deployment, copy the printed contract address into your `.env`:

```env
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourDeployedContractAddress
```

---

### 4. Run the App

```bash
# Development mode with hot reload
npm run dev

# Production build
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🦊 MetaMask — Sepolia Testnet Setup

MetaMask needs to be connected to the Sepolia testnet to interact with the deployed contract.

**Step 1:** Open MetaMask → Click the network dropdown → "Add Network" → "Add a network manually"

**Step 2:** Enter the following details:

| Field | Value |
|---|---|
| Network Name | `Sepolia Test Network` |
| New RPC URL | `https://rpc.sepolia.org` |
| Chain ID | `11155111` |
| Currency Symbol | `ETH` |
| Block Explorer URL | `https://sepolia.etherscan.io` |

**Step 3:** Get free Sepolia ETH from the faucet:
- [sepoliafaucet.com](https://sepoliafaucet.com/)
- [faucets.chain.link](https://faucets.chain.link/sepolia)

---

## 📜 Smart Contract Deep Dive

### Contract: `CertificateRegistry.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CertificateRegistry {

    struct Certificate {
        bytes32  hash;        // SHA-256 hash of the certificate file
        string   ipfsCid;     // IPFS CID from Pinata
        address  issuer;      // Wallet address of the issuing institution
        uint256  timestamp;   // Block timestamp of issuance
        bool     isRevoked;   // Revocation flag
        string   revokeReason;
    }

    // hash → Certificate data
    mapping(bytes32 => Certificate) private certificates;

    // Only registered institutions can issue
    mapping(address => bool) public authorizedIssuers;

    address public owner;

    // ── Events ──────────────────────────────────────────────────
    event CertificateIssued(
        bytes32 indexed hash,
        address indexed issuer,
        string  ipfsCid,
        uint256 timestamp
    );

    event CertificateRevoked(
        bytes32 indexed hash,
        address indexed revokedBy,
        string  reason,
        uint256 timestamp
    );

    // ── Modifiers ───────────────────────────────────────────────
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier onlyIssuer() {
        require(authorizedIssuers[msg.sender], "Not an authorized issuer");
        _;
    }

    // ── Constructor ─────────────────────────────────────────────
    constructor() {
        owner = msg.sender;
        authorizedIssuers[msg.sender] = true;
    }

    // ── Core Functions ──────────────────────────────────────────
    function issueCertificate(bytes32 _hash, string memory _ipfsCid)
        external onlyIssuer
    {
        require(certificates[_hash].timestamp == 0, "Certificate already exists");
        certificates[_hash] = Certificate({
            hash:         _hash,
            ipfsCid:      _ipfsCid,
            issuer:       msg.sender,
            timestamp:    block.timestamp,
            isRevoked:    false,
            revokeReason: ""
        });
        emit CertificateIssued(_hash, msg.sender, _ipfsCid, block.timestamp);
    }

    function verifyCertificate(bytes32 _hash)
        external view
        returns (bool exists, bool revoked, address issuer, uint256 timestamp, string memory cid)
    {
        Certificate memory cert = certificates[_hash];
        if (cert.timestamp == 0) return (false, false, address(0), 0, "");
        return (true, cert.isRevoked, cert.issuer, cert.timestamp, cert.ipfsCid);
    }

    function revokeCertificate(bytes32 _hash, string memory _reason)
        external onlyIssuer
    {
        require(certificates[_hash].timestamp != 0, "Certificate does not exist");
        require(certificates[_hash].issuer == msg.sender, "Not the original issuer");
        require(!certificates[_hash].isRevoked, "Already revoked");
        certificates[_hash].isRevoked    = true;
        certificates[_hash].revokeReason = _reason;
        emit CertificateRevoked(_hash, msg.sender, _reason, block.timestamp);
    }

    function addIssuer(address _issuer) external onlyOwner {
        authorizedIssuers[_issuer] = true;
    }

    function removeIssuer(address _issuer) external onlyOwner {
        authorizedIssuers[_issuer] = false;
    }
}
```

### Smart Contract Design Decisions

| Decision | Reason |
|---|---|
| `bytes32` for hash storage | More gas-efficient than `string`; SHA-256 output fits exactly in 32 bytes |
| `mapping` over array | O(1) lookup for verification — critical for UX speed |
| `onlyIssuer` modifier | Access control prevents unauthorized certificate minting |
| Events on every mutation | Enables off-chain indexing and Etherscan transaction tracing |
| No hash deletion | Immutability is the core value proposition; revocation flags instead |
| `authorizedIssuers` mapping | Supports multi-institution deployment without redeployment |

---

## 📡 API Reference

### `POST /api/issue`

Issues a certificate — hashes the file, uploads to IPFS, calls the smart contract, sends email.

**Auth:** Required (Firebase JWT in `Authorization` header)

**Request Body (multipart/form-data):**
```
file          File     Certificate PDF or image
studentName   string   Full name of the student
studentEmail  string   Student's email address
certType      string   e.g. "Bachelor of Technology"
issueDate     string   ISO date string
```

**Response:**
```json
{
  "success": true,
  "hash": "0xabc123...",
  "ipfsCid": "QmXoy...",
  "txHash": "0xdef456...",
  "timestamp": 1718000000
}
```

---

### `POST /api/verify`

Verifies a certificate against the blockchain. No authentication required.

**Request Body (multipart/form-data):**
```
file    File    The certificate file to verify
```

**Response (valid):**
```json
{
  "verified": true,
  "revoked": false,
  "issuer": "0xInstitutionWalletAddress",
  "issuedAt": "2025-06-15T10:30:00Z",
  "ipfsCid": "QmXoy...",
  "txHash": "0xdef456..."
}
```

**Response (invalid):**
```json
{
  "verified": false,
  "message": "Certificate not found on blockchain. It may be forged or tampered."
}
```

**Response (revoked):**
```json
{
  "verified": true,
  "revoked": true,
  "revokeReason": "Academic misconduct - plagiarism confirmed",
  "revokedAt": "2025-08-01T09:00:00Z"
}
```

---

### `POST /api/revoke`

Revokes a previously issued certificate on-chain.

**Auth:** Required (Firebase JWT)

**Request Body (application/json):**
```json
{
  "hash": "0xabc123...",
  "reason": "Academic misconduct - plagiarism confirmed"
}
```

**Response:**
```json
{
  "success": true,
  "txHash": "0xghi789..."
}
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory. **Never commit this file.**

```env
# ── BLOCKCHAIN ────────────────────────────────────────────────
# Your MetaMask wallet private key (for Hardhat deployment only)
PRIVATE_KEY=your_wallet_private_key_here

# Sepolia RPC endpoint (get from Infura or Alchemy)
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID

# Etherscan API key for contract verification
ETHERSCAN_API_KEY=your_etherscan_api_key

# Deployed contract address (fill after deployment)
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourDeployedContractAddress

# ── FIREBASE ──────────────────────────────────────────────────
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin SDK (server-side only — never expose client-side)
FIREBASE_ADMIN_PROJECT_ID=your_project_id
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxx@your_project.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"

# ── IPFS / PINATA ─────────────────────────────────────────────
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_API_KEY=your_pinata_secret_key

# ── EMAIL (NODEMAILER) ────────────────────────────────────────
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
# Use a Gmail App Password (not your real password)
SMTP_PASS=your_gmail_app_password
EMAIL_FROM="E-Certify <your_email@gmail.com>"
```

> ⚠️ Add `.env` to `.gitignore` immediately. The `PRIVATE_KEY` and Firebase Admin credentials grant full access — treat them like passwords.

---

## 🔒 Security Design

### Cryptographic Integrity
SHA-256 is a one-way function. Any modification to the certificate — even flipping a single bit — produces a completely different 256-bit hash. This makes undetected tampering mathematically infeasible.

### Blockchain Immutability
Once written to the Ethereum blockchain, a certificate hash cannot be modified or deleted. Even the contract deployer cannot alter existing records. The `revokeCertificate` function only adds a revocation flag — the original issuance record remains permanently visible.

### Access Control Layers

| Layer | Mechanism | Protects Against |
|---|---|---|
| Smart Contract | `onlyIssuer` modifier | Unauthorized certificate minting |
| Smart Contract | `msg.sender == cert.issuer` check | One institution revoking another's certificate |
| API Routes | Firebase JWT verification | Unauthenticated API calls |
| Wallet Auth | MetaMask cryptographic signature | Password-based attacks |
| Admin SDK | Server-side only (never client-exposed) | Firebase rule bypass |

### No PII on Chain
Only the SHA-256 hash and IPFS CID are stored on-chain. Student names, emails, and personal information are stored in Firebase Firestore — not publicly visible on the blockchain.

### Private Key Safety
The `PRIVATE_KEY` in `.env` is used only for Hardhat deployment. At runtime, the institution's MetaMask wallet signs transactions client-side — the server never handles private keys.

---

## ⛽ Gas Optimization

| Optimization | Implementation |
|---|---|
| `bytes32` for hashes | Saves ~32 bytes per certificate vs. `string` storage |
| `mapping` over arrays | O(1) reads avoid expensive array traversal |
| Events for history | Off-chain indexing via events instead of on-chain arrays |
| `external` visibility | Cheaper than `public` for functions not called internally |
| Struct packing | Boolean + string fields ordered to minimize storage slots |

**Estimated Gas Costs (Sepolia):**

| Operation | Estimated Gas | Est. Cost (@ 10 gwei) |
|---|---|---|
| `issueCertificate()` | ~65,000 gas | ~0.00065 ETH |
| `verifyCertificate()` | 0 (view) | Free |
| `revokeCertificate()` | ~30,000 gas | ~0.0003 ETH |
| `addIssuer()` | ~45,000 gas | ~0.00045 ETH |

---

## 🧪 Testing

### Run Smart Contract Tests

```bash
# Run all tests
npx hardhat test

# Run with gas reporting
REPORT_GAS=true npx hardhat test

# Run with coverage
npx hardhat coverage
```

### Test Coverage

The test suite covers:

```
CertificateRegistry
  Deployment
    ✓ Sets the correct owner
    ✓ Owner is an authorized issuer by default
  issueCertificate
    ✓ Issues a certificate and emits the event
    ✓ Reverts if called by unauthorized address
    ✓ Reverts if certificate hash already exists
  verifyCertificate
    ✓ Returns correct data for a valid certificate
    ✓ Returns exists=false for unknown hash
  revokeCertificate
    ✓ Revokes certificate and emits event
    ✓ Reverts if not the original issuer
    ✓ Reverts if certificate already revoked
  addIssuer / removeIssuer
    ✓ Owner can add and remove authorized issuers
    ✓ Non-owner cannot add issuers
```

---

## 🌐 Deployment

### Deploy Frontend to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

Set all environment variables in the Vercel dashboard under **Project Settings → Environment Variables**.

### Deploy Smart Contract to Mainnet

> ⚠️ Mainnet deployment costs real ETH. Test thoroughly on Sepolia first.

```bash
# Add mainnet config to hardhat.config.ts first
npx hardhat run scripts/deploy.ts --network mainnet
```

---

## 🗺️ Roadmap

- [x] SHA-256 certificate hashing
- [x] IPFS storage via Pinata
- [x] Smart contract issuance & verification
- [x] MetaMask authentication
- [x] Firebase Auth + Firestore integration
- [x] Student email notifications
- [x] Certificate revocation with reason
- [x] Forgot password flow
- [ ] QR code generation for shareable verification links
- [ ] NFT-based certificates (ERC-721 token per certificate)
- [ ] Zero-Knowledge Proofs for selective attribute disclosure
- [ ] Multi-chain support (Polygon, Base, Arbitrum) for lower gas costs
- [ ] Batch certificate issuance (e.g., full graduation cohort in one transaction)
- [ ] Public REST API for third-party employer integrations
- [ ] Mobile app (React Native)
- [ ] Institution registry — on-chain whitelist of trusted universities

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how to get started:

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/blockchain-based-certification.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes and commit
git commit -m "feat: add QR code generation for verification links"

# 5. Push to your fork
git push origin feature/your-feature-name

# 6. Open a Pull Request on GitHub
```

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use for |
|---|---|
| `feat:` | New features |
| `fix:` | Bug fixes |
| `docs:` | Documentation only |
| `refactor:` | Code refactoring |
| `test:` | Adding or updating tests |
| `chore:` | Build process, dependencies |

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for full details.

---

<div align="center">

<br/>

Built with ❤️ using **Solidity · Next.js · Firebase · IPFS**

<br/>

⭐ **Star this repo if you found it useful — it helps others discover the project!** ⭐

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Amar13singh-181717?style=for-the-badge&logo=github)](https://github.com/Amar13singh)

</div>
