# 🎓 Blockchain-Based Certificate Verification System

<p align="center">
  <img src="./assets/logo.png" width="150" alt="Project Logo"/>
</p>

<p align="center">
  <b>A decentralized platform for secure, immutable, and tamper-proof academic certificate verification using Ethereum blockchain and smart contracts.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white"/>
  <img src="https://img.shields.io/badge/Hardhat-FFF100?style=for-the-badge&logo=ethereum&logoColor=black"/>
  <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white"/>
  <img src="https://img.shields.io/badge/MetaMask-F6851B?style=for-the-badge&logo=metamask&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge"/>
</p>

---

# 📌 Table of Contents

* [Overview](#-overview)
* [Problem Statement](#-problem-statement)
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Architecture](#-architecture)
* [Workflow](#-workflow)
* [Project Structure](#-project-structure)
* [Installation Guide](#-installation-guide)
* [MetaMask Setup](#-metamask-setup)
* [Hardhat Setup](#-hardhat-setup)
* [Smart Contract Deployment](#-smart-contract-deployment)
* [Environment Variables](#-environment-variables)
* [API Endpoints](#-api-endpoints)
* [Screenshots](#-screenshots)
* [Security Considerations](#-security-considerations)
* [Future Enhancements](#-future-enhancements)
* [Contributing](#-contributing)
* [License](#-license)

---

# 🚀 Overview

The Blockchain-Based Certificate Verification System is a decentralized application (DApp) designed to eliminate certificate fraud by storing cryptographic proofs of certificates on blockchain networks.

Institutions can issue certificates, and verifiers can instantly validate authenticity without relying on centralized authorities.

---

# ❓ Problem Statement

Traditional certificate verification systems suffer from:

* Certificate forgery
* Manual verification delays
* Centralized trust issues
* Lack of transparency
* Data tampering risks

This project solves these challenges using blockchain's immutability and transparency.

---

# ✨ Features

✅ Secure Certificate Issuance
✅ Blockchain-based Verification
✅ Smart Contract Integration
✅ Institute Dashboard
✅ Student Access
✅ MetaMask Authentication
✅ Immutable Records
✅ Decentralized Trust
✅ Tamper-proof Verification

---

# 🛠 Tech Stack

## Frontend

* Next.js
* React.js
* TypeScript
* Tailwind CSS

## Backend

* Node.js
* Express.js

## Blockchain

* Solidity
* Hardhat
* Ethereum
* Sepolia Testnet

## Database

* MongoDB *(if used)*

## Wallet

* MetaMask

---

# 🏗 Architecture

```text
Institution/Admin
        │
        ▼
Upload Certificate
        │
Generate SHA-256 Hash
        │
        ▼
Smart Contract
(Ethereum Blockchain)
        │
Store Hash On-chain
        │
        ▼
Verifier Uploads Certificate
        │
Generate Hash Again
        │
Compare On-chain Data
        │
        ▼
VALID / INVALID
```

---

# 🔄 Workflow

### Certificate Issuance

1. Institution uploads certificate.
2. Certificate data is hashed using SHA-256.
3. Hash is stored on Ethereum blockchain.
4. Smart contract records ownership and timestamp.

### Certificate Verification

1. User uploads certificate.
2. Hash is regenerated.
3. Smart contract checks existence.
4. Verification result is displayed instantly.

---

# 📁 Project Structure

```bash
blockchain-based-certification/
│
├── app/                  # Next.js app router
├── components/           # Reusable UI components
├── contracts/            # Solidity smart contracts
├── scripts/              # Hardhat deployment scripts
├── pages/                # API routes
├── public/
├── docs/
│   ├── architecture.md
│   ├── security.md
│   └── deployment.md
│
├── hardhat.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙ Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/your-username/blockchain-based-certification.git

cd blockchain-based-certification
```

## 2. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

# 🦊 MetaMask Setup

## Install MetaMask

* Open Chrome/Firefox
* Install MetaMask extension
* Create wallet
* Backup Secret Recovery Phrase securely

## Add Sepolia Testnet

Network Name:

```text
Sepolia Test Network
```

RPC URL:

```text
https://rpc.sepolia.org
```

Chain ID:

```text
11155111
```

Currency Symbol:

```text
ETH
```

---

# ⛏ Hardhat Setup

Install Hardhat:

```bash
npm install --save-dev hardhat
```

Initialize:

```bash
npx hardhat
```

Install dependencies:

```bash
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

Compile contracts:

```bash
npx hardhat compile
```

Run tests:

```bash
npx hardhat test
```

---

# 📜 Smart Contract Deployment

Deploy locally:

```bash
npx hardhat node
```

In another terminal:

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

Deploy to Sepolia:

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

---

# 🔐 Environment Variables

Create:

```bash
.env
```

Example:

```env
PRIVATE_KEY=your_wallet_private_key
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your_key
ETHERSCAN_API_KEY=your_api_key
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContractAddress
```

⚠️ Never commit `.env` files.

---

# 📡 API Endpoints

| Endpoint      | Method | Description        |
| ------------- | ------ | ------------------ |
| `/api/issue`  | POST   | Issue certificate  |
| `/api/verify` | POST   | Verify certificate |
| `/api/revoke` | POST   | Revoke certificate |

---

# 🧠 Smart Contract Functions

```solidity
issueCertificate()
verifyCertificate()
revokeCertificate()
```

---

# 📷 Screenshots

## Dashboard

```markdown
![Dashboard](docs/screenshots/dashboard.png)
```

## Verification Page

```markdown
![Verification](docs/screenshots/verify.png)
```

---

# 🔒 Security Considerations

* SHA-256 hashing for certificate integrity
* Immutable blockchain storage
* Access control modifiers
* Wallet authentication
* Replay attack prevention
* Private key security
* Smart contract validation

---

# 🚀 Future Enhancements

* IPFS integration
* QR-code verification
* NFT-based certificates
* Zero-Knowledge Proofs
* Multi-chain support
* Batch certificate issuance

---

# 🤝 Contributing

Contributions are welcome!

```bash
git checkout -b feature/my-feature
git commit -m "feat: add new feature"
git push origin feature/my-feature
```

Open a Pull Request 🚀

---

# 📄 License

Distributed under the MIT License.

---

<p align="center">
Made with ❤️ using Blockchain, Solidity, Next.js and Web3 technologies.
</p>
