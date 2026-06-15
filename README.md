# Blockchain-Based Certificate Verification System

A decentralized certificate verification platform built using blockchain technology to ensure authenticity, immutability, and secure verification of academic certificates.

## Overview

Traditional certificate verification systems are vulnerable to forgery and require manual verification processes. This project leverages blockchain and smart contracts to create a tamper-proof and transparent certificate management system.

## Features

* Secure certificate issuance
* Blockchain-based immutable storage
* Instant certificate verification
* Smart contract integration
* Institute dashboard
* Wallet authentication
* Tamper-resistant records

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Blockchain

* Solidity
* Hardhat
* Ethereum / Sepolia Testnet

### Backend

* Node.js
* Express.js

### Wallet

* MetaMask

## System Workflow

1. Institute uploads certificate details.
2. Certificate hash is generated.
3. Hash is stored on blockchain.
4. Student shares certificate.
5. Verifier uploads certificate.
6. Hash is compared against blockchain records.
7. Verification result is displayed.

## Smart Contract Functionalities

* `issueCertificate()`
* `verifyCertificate()`
* `revokeCertificate()`

## Installation

```bash
git clone https://github.com/your-username/blockchain-based-certification.git
cd blockchain-based-certification
npm install
npm run dev
```

## Future Improvements

* IPFS integration
* QR-code verification
* Multi-chain support
* Zero-Knowledge Proofs

## License

MIT License
