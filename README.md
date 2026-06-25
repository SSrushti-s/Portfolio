# 🚀 Modern Developer Portfolio

A high-performance, fully responsive developer portfolio built to showcase technical projects, core skills, and professional experience. Designed with a clean aesthetic and optimized for speed and accessibility.

Live demo: https://portfolio-hd36.vercel.app/

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## ✨ Key Features

- **Dynamic App Routing**: Utilizes Next.js App Router for optimal page loading and structure.
- **Strict Type Safety**: Fully typed with TypeScript to minimize runtime bugs and ensure maintainability.
- **Fluid Responsive Design**: Mobile-first layout crafted with utility-first Tailwind CSS classes.
- **Dark Mode Support**: Seamless toggle between light and dark visual themes.
- **Performance Optimized**: Zero layout shifts, lazy-loaded images, and optimized font delivery.

## 📁 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router pages & layouts
│   ├── components/     # Reusable UI parts (Navbar, ProjectCards)
|       ├── About.tsx           # About component 
|       ├── Achievements.tsx    # Your achievements
|       ├── Footer.tsx          # Footer component including contact info
|       └── Project.tsx         # Project details
│   └── styles/         # Global CSS and Tailwind configurations
```

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have Node.js installed (v18.x or higher recommended).

```bash
node -v
```

### Installation

1. Clone the repository down to your local directory:
   ```bash
   git clone https://github.com/SSrushti-s/Portfolio.git  
   ```
2. Navigate into the root folder of the project:
   ```bash
   cd my-portfolio
   ```
3. Install all the required dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the local development server to view the application in your browser:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live results.

## ⚡ Production Deployment

This project is configured for seamless deployment on the Vercel platform.

To build the project for production deployment manually:

```bash
npm run build
```

