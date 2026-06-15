<div align="center">

<img src="./assets/logo.png" width="120" alt="E-Certify Logo"/>

# E-Certify — Blockchain Certificate Verification

**A decentralized application (DApp) that eliminates academic certificate fraud using Ethereum smart contracts, SHA-256 cryptographic hashing, and IPFS-based document storage.**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Solidity](https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org/)
[![Hardhat](https://img.shields.io/badge/Hardhat-FFF100?style=for-the-badge&logo=ethereum&logoColor=black)](https://hardhat.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white)](https://ethereum.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

[Live Demo](#) · [Smart Contract on Sepolia](#) · [Project Report](#)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Problem & Solution](#-problem--solution)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Workflow](#-workflow)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Smart Contract Reference](#-smart-contract-reference)
- [API Reference](#-api-reference)
- [Environment Variables](#-environment-variables)
- [Security](#-security)
- [Team](#-team)

---

## 🚀 Overview

**E-Certify** is a final-year B.Tech project built at Bhagalpur College of Engineering (BCE), affiliated with Bihar Engineering University (BEU). It provides a trustless, decentralized platform where institutions can issue tamper-proof academic certificates on the Ethereum blockchain, and anyone — employer, institution, or individual — can verify them instantly without contacting the issuing authority.

> **No middlemen. No forgery. No delays.**

---

## ❓ Problem & Solution

### The Problem

Certificate fraud is a widespread issue in academic and professional ecosystems:

| Pain Point | Impact |
|---|---|
| Forged certificates | Fraudulent hiring, academic dishonesty |
| Manual verification | Days or weeks of back-and-forth |
| Centralized trust | Single point of failure or corruption |
| No audit trail | Zero accountability post-issuance |

### Our Solution

E-Certify stores a **SHA-256 cryptographic hash** of every issued certificate on the Ethereum blockchain via a Solidity smart contract. Since the hash is immutable and publicly accessible, any verifier can regenerate the hash from the original document and compare it against the on-chain record — **no central authority required**.

---

## ✨ Key Features

- 🔐 **On-Chain Certificate Issuance** — SHA-256 hash of certificates stored on Ethereum via smart contracts
- 🔍 **Instant Verification** — Anyone can verify authenticity in seconds, trustlessly
- 📦 **IPFS Storage** — Certificate files pinned on IPFS via Pinata for decentralized, permanent storage
- 🔑 **MetaMask Authentication** — Wallet-based identity for institutions; no passwords required
- 📧 **Automated Email Notifications** — Students receive issuance confirmation via Nodemailer + Firebase Admin SDK
- 🔒 **Forgot Password Flow** — Secure OTP-based recovery for institutional accounts
- 🧾 **Institute Dashboard** — Manage issuances, view transaction history, and revoke certificates
- 🎓 **Student Portal** — Students can access and share their verified certificates
- ♻️ **Certificate Revocation** — Institutions can revoke certificates on-chain with a reason

---

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Institution                          │
│   Uploads certificate → Firebase Auth (MetaMask login)  │
└───────────────────────────┬─────────────────────────────┘
                            │
                            ▼
                  ┌─────────────────┐
                  │  Next.js DApp   │  ← Frontend + API Routes
                  └────────┬────────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
      ┌──────────┐  ┌──────────┐  ┌──────────────┐
      │  Pinata  │  │ Firebase │  │   Hardhat /  │
      │  (IPFS)  │  │   (DB)   │  │   Ethereum   │
      └──────────┘  └──────────┘  └──────┬───────┘
                                         │
                                         ▼
                              ┌──────────────────────┐
                              │   Smart Contract     │
                              │  issueCertificate()  │
                              │  verifyCertificate() │
                              │  revokeCertificate() │
                              └──────────────────────┘
                                         │
                            ┌────────────┘
                            ▼
                  ┌─────────────────┐
                  │   Verifier UI   │  ← Upload doc → get result
                  └─────────────────┘
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 14, React, TypeScript, Tailwind CSS |
| **Blockchain** | Solidity, Hardhat, Ethers.js, Ethereum Sepolia Testnet |
| **Storage** | IPFS via Pinata |
| **Auth & DB** | Firebase Authentication, Firebase Admin SDK, Firestore |
| **Email** | Nodemailer |
| **Wallet** | MetaMask |
| **Hashing** | SHA-256 (Node.js crypto module) |

---

## 🔄 Workflow

### Certificate Issuance

```
Institution logs in (MetaMask)
        ↓
Upload certificate file
        ↓
Frontend generates SHA-256 hash of the file
        ↓
File is pinned to IPFS via Pinata → returns CID
        ↓
Smart contract stores: hash + CID + timestamp + institution address
        ↓
Student receives email notification (Nodemailer + Firebase Admin)
```

### Certificate Verification

```
Verifier uploads certificate
        ↓
Frontend regenerates SHA-256 hash
        ↓
Smart contract queried: does this hash exist on-chain?
        ↓
        ├── ✅ VALID — Shows issuer, timestamp, IPFS link
        └── ❌ INVALID — Certificate not found or tampered
```

---

## 📁 Project Structure

```
blockchain-based-certification/
│
├── app/                        # Next.js App Router pages
│   ├── dashboard/              # Institution dashboard
│   ├── verify/                 # Public verification page
│   └── student/                # Student certificate portal
│
├── components/                 # Reusable React components
│
├── contracts/                  # Solidity smart contracts
│   └── CertificateRegistry.sol
│
├── scripts/                    # Hardhat deployment scripts
│   └── deploy.ts
│
├── pages/api/                  # Next.js API routes
│   ├── issue.ts
│   ├── verify.ts
│   └── revoke.ts
│
├── lib/                        # Utility functions
│   ├── hash.ts                 # SHA-256 hashing
│   ├── pinata.ts               # IPFS upload helpers
│   └── mailer.ts               # Nodemailer setup
│
├── hardhat.config.ts
├── .env.example
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MetaMask browser extension
- A Pinata account (IPFS pinning)
- A Firebase project
- Sepolia testnet ETH ([faucet](https://sepoliafaucet.com/))

### 1. Clone & Install

```bash
git clone https://github.com/Amar13singh/blockchain-based-certification.git
cd blockchain-based-certification
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
# Fill in all values — see Environment Variables section below
```

### 3. Compile & Deploy Smart Contract

```bash
# Compile
npx hardhat compile

# Deploy locally
npx hardhat node
npx hardhat run scripts/deploy.ts --network localhost

# Deploy to Sepolia testnet
npx hardhat run scripts/deploy.ts --network sepolia
```

Copy the deployed contract address into your `.env` as `NEXT_PUBLIC_CONTRACT_ADDRESS`.

### 4. Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

### MetaMask — Sepolia Testnet Setup

| Field | Value |
|---|---|
| Network Name | Sepolia Test Network |
| RPC URL | `https://rpc.sepolia.org` |
| Chain ID | `11155111` |
| Currency Symbol | `ETH` |

---

## 📜 Smart Contract Reference

**Contract:** `CertificateRegistry.sol`

| Function | Access | Description |
|---|---|---|
| `issueCertificate(hash, cid)` | Institution only | Records certificate hash + IPFS CID on-chain |
| `verifyCertificate(hash)` | Public | Returns issuance details if hash exists |
| `revokeCertificate(hash, reason)` | Issuer only | Marks a certificate as revoked |

Key design decisions:
- `mapping(bytes32 => Certificate)` stores all records
- `onlyIssuer` modifier prevents unauthorized issuance
- Emits events on every state change for off-chain indexing

---

## 📡 API Reference

| Endpoint | Method | Auth | Description |
|---|---|---|---|
| `/api/issue` | POST | Institution JWT | Hash file, pin to IPFS, call smart contract, send email |
| `/api/verify` | POST | Public | Re-hash and query smart contract |
| `/api/revoke` | POST | Institution JWT | Revoke a previously issued certificate |

---

## 🔐 Environment Variables

```env
# Blockchain
PRIVATE_KEY=your_wallet_private_key
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_KEY
ETHERSCAN_API_KEY=your_etherscan_key
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourDeployedContractAddress

# Firebase
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."

# IPFS / Pinata
PINATA_API_KEY=your_pinata_key
PINATA_SECRET_API_KEY=your_pinata_secret

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

> ⚠️ Never commit `.env` to version control. Add it to `.gitignore`.

---

## 🔒 Security

- **SHA-256 hashing** ensures any byte-level tampering of a certificate changes its hash entirely
- **Immutable on-chain storage** — once recorded, certificate hashes cannot be altered or deleted (only revoked)
- **Wallet-based authentication** via MetaMask eliminates password-based attack surfaces
- **`onlyIssuer` smart contract modifier** prevents unauthorized actors from issuing certificates
- **Environment variable isolation** — no secrets are exposed client-side
- **Firebase Admin SDK** used server-side only for privileged operations

---

## 🔮 Future Enhancements

- [ ] QR code generation linking to the on-chain verification page
- [ ] NFT-based certificates (ERC-721) for wallet-native ownership
- [ ] Zero-Knowledge Proofs for privacy-preserving selective disclosure
- [ ] Multi-chain support (Polygon, Base) for lower gas costs
- [ ] Batch certificate issuance for large graduation cohorts
- [ ] Public verifier API for third-party integrations

---

## 👥 Team

**Bhagalpur College of Engineering (BCE), BEU — Final Year B.Tech Project, 2025**

| Name | Role |
|---|---|
| Amar Kumar Singh | Blockchain integration, Smart contracts, Frontend, Email flow |
| [Teammate 2] | [Role] |
| [Teammate 3] | [Role] |
| [Teammate 4] | [Role] |

**Supervisor:** Ms. Poonam Prabha

---

## 📄 License

Distributed under the MIT License. See [LICENSE](./LICENSE) for details.

---

<div align="center">

Built with ❤️ using Solidity, Next.js, Firebase, and IPFS.

**If this project helped you, please consider giving it a ⭐**

</div>
