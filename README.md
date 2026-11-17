# Go Together (يلا سوا) 🚗

A peer-to-peer ridesharing mobile application built with **React Native**, **Expo**, and **TypeScript**, designed to connect drivers and passengers seamlessly with real-time tracking and secure in-app transactions.

---

## 🛠 Tech Stack & Architecture

- **Framework:** React Native with Expo (File-based routing via Expo Router)
- **Language:** Strict TypeScript (Zero `any` enforcement, custom generic interfaces)
- **Backend & Real-Time:** Supabase (PostgreSQL, Real-time subscriptions, Auth)
- **Maps & Geolocation:** Google Maps API & custom coordinate state management
- **Styling:** Responsive mobile UI component architecture

---

## ⚡ Key Engineering Highlights

- **Strict Type Safety:** Core data models for ride matching, user profiles, and wallet transactions are strictly typed in `/types` to eliminate runtime state errors.
- **Modular Component Design:** Clean separation between UI presentation components, custom business-logic hooks, and API service layers.
- **State & Navigation:** Structured file-based routing designed for low-latency screen transitions and persistent session handling.

---

## 🚧 Project Roadmap & Status

- [x] Project scaffolding & strict TypeScript configuration
- [x] Core routing architecture & authentication flows
- [ ] Real-time ride matching & geolocation tracking integration
- [ ] In-app wallet escrow & payment verification
- [ ] Admin moderation dashboard

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/TheTallDeveloper/](https://github.com/TheTallDeveloper/)<your-repo-name>.git
   cd <your-repo-name>
