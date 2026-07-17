# QurbaniHat – Livestock Booking Platform 

QurbaniHat is a modern livestock marketplace where users can explore animals available for Qurbani, such as cows and goats. Users can browse animal details and place a booking after logging in to the platform.

## 🔗 Links
- **GitHub Repository:** [https://github.com/PREMADAS/Qurbani-platform]
- **Live URL:** [https://qurbani-platform-troy.vercel.app/]

## Purpose
The purpose of this project is to provide a simple and user-friendly platform where people can:
- Browse a wide range of Qurbani animals (cows, goats, etc.)
- View detailed information about each animal
- Book an animal for Qurbani after logging in
- Manage their profile and update personal information

## Key Features
- 🏠 **Home Page** – Hero banner, featured animals, Qurbani tips, and top breeds section
- 🐮 **All Animals Page** – View all animals with sorting by price
- 📄 **Animal Details Page** – Full animal details with a booking form (name, email, phone, address)
- 🔐 **Authentication** – Email/Password login & registration, plus Google social login (via Better Auth)
- 👤 **My Profile Page** – View logged-in user's profile info (name, photo, email)
- ✏️ **Update Profile** – Update name and photo from a dedicated update page
- 🔔 **Toast Notifications** – Success/error messages for login, registration, and booking
- ⏳ **Loading States** – Loading indicators while fetching data
- 🚫 **404 / Not Found Page** – Custom not-found page for invalid routes
- 📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop devices
- 🔒 **Private Routes** – Animal details and profile pages are protected and require login
- 🎬 **Smooth Animations** – Powered by React Spring
- 🔑 **Environment Variables** – Sensitive keys (database URI, auth config, etc.) are secured using environment variables

##  Routes

**Public Routes:**
- `/` – Home
- `/animal` – All Animals
- `/auth/login` – Login
- `/auth/register` – Register

**Private Routes:**
- `/animal/[id]` – Animal Details & Booking
- `/profile` – User Profile
- `/profile/update` – Update Profile Information

## 📦 NPM Packages Used
- `next` – React framework (App Router)
- `better-auth` – Authentication (Email/Password & Google login)
- `react-hook-form` – Form handling and validation
- `react-toastify` – Toast notifications
- `react-spring` – Smooth animations
- `mongodb` – Database for storing users and app data
- `tailwindcss` – Utility-first CSS styling
- `daisyUI` – Tailwind CSS component library

## 🛠️ Tech Stack
- Next.js (App Router)
- Tailwind CSS + daisyUI
- MongoDB
- Better Auth

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/PREMADAS/Qurbani-platform.git
   ```
2. Navigate to the project folder
   ```bash
   cd Qurbani-platform
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Create a `.env.local` file and add your environment variables
   ```
   MONGODB_URI=your_mongodb_connection_string
   BETTER_AUTH_SECRET=your_secret_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
5. Run the development server
   ```bash
   npm run dev
   ```

## 📌 Note
- Booking form data is not saved to a database or local storage; it only resets and shows a success toast on submission.
- Email verification and forget password features are intentionally not implemented as per assignment guidelines.

