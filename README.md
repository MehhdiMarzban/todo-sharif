# Todo Sharif Documentation

**Live Application**: [https://todo-sharif.mehdi-marzban.ir](https://todo-sharif.mehdi-marzban.ir)  

---

## Table of Contents  
- [Todo Sharif Documentation](#todo-sharif-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Key Features](#key-features)
    - [Core Functionality](#core-functionality)
    - [UI/UX Highlights](#uiux-highlights)
  - [Installation](#installation)
    - [Requirements](#requirements)
    - [Setup Process](#setup-process)
  - [Project Structure](#project-structure)
  - [Usage Guide](#usage-guide)
    - [Initial Setup](#initial-setup)
    - [Key Interactions](#key-interactions)
  - [Technical Specifications](#technical-specifications)
    - [Core Stack](#core-stack)
    - [Key Dependencies](#key-dependencies)
  - [Troubleshooting](#troubleshooting)
  - [License](#license)

---

## Introduction  

A modern Persian-friendly task management system built with Next.js 15 featuring:  
✅ **Full responsiveness** across all devices  
🎨 **Dynamic theme system** with automatic dark/light mode  
🗓️ **Jalali date support** using date-fns-jalali  
🔐 **Instant access** with default credentials  

**Dashboard Access Requirement**:  

1. Register using:  
   - Username: `default`  
   - Password: `default`  
2. Navigate to Profile section to unlock Dashboard  

*Normal Users Can't Access To Dashboard*

---

## Key Features  

### Core Functionality

- ✅ Component documentation with hover-to-view JSDoc support
- ✨ Complete Persian calendar integration  
- 📱 Mobile-optimized responsive UI  
- 🗂️ Atomic design structure with feature-based components  
- 🎭 Smooth animations using Framer Motion  
- 📊 Interactive charts with Recharts  

### UI/UX Highlights

- Modern drawer system with Vaul  
- Toast notifications with Sonner  
- Accessible Shadcn/ui components  
- Theme-aware color scheme with next-themes  
- Type-safe form validation with Zod and Typescript
  
---

## Installation

### Requirements

- Node.js v20+  
- npm v9+  

### Setup Process

```bash
# 1. Clone repository
git clone https://github.com/your-repo/todo-sharif.git

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Access application at: `http://localhost:3000`

---

## Project Structure

```bash
todo-sharif/
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    
│   │   ├── features/  # Auth, Todos, Dashboard
│   │   ├── providers/ # Theme/State providers
│   │   ├── ui/        # Shadcn/ui components
│   ├── lib/           # Utility functions
│   ├── stores/        # Zustand state management
│   ├── validations/   # Zod validation schemas
│   ├── hooks/         # Custom React hooks  
│   ├── constants/     # App static Data  
│   ├── styles/        # Global CSS
│   ├── types/         # Type definitions
│   ├── config/        # Site Config (ex: site title, description, etc.)
└── package.json
```

---

## Usage Guide

### Initial Setup

1. Visit auth page and register or login
2. Use credentials:  
   - Username: `your username`  
   - Password: `your password`  

### Key Interactions

1. **Dashboard Access (Admin)**:  
   - Complete registration  
   - Navigate to Profile  
   - Click Dashboard button  

2. **Task Management (User)**:  
   - Add tasks with action button  
   - Mark tasks as done
   - Mark tasks as doing
   - Mark tasks as waiting
   - Delete tasks
---

## Technical Specifications

### Core Stack

| Technology | Purpose |  
|------------|---------|  
| Next.js 15 | App Router & SSR |  
| Typescript | Type-safe development |  
| Tailwind CSS | Utility-first styling |  
| Zustand | State management |  
| Shadcn/ui | Accessible components |  

### Key Dependencies

- Date Management: `date-fns-jalali`  
- Forms: `react-hook-form + Zod`  
- Animation: `Framer Motion`  
- UI: `Radix UI Primitives`  
- Notifications: `Sonner`  

---

## Troubleshooting

| Issue | Resolution |  
|-------|------------|  
| Registration Failure | Clear localStorage & refresh |  
| Missing Dashboard | Complete registration first |  

---

## License  

MIT License - See [LICENSE](LICENSE) for details  
