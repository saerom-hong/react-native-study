# React Native Todo App
As a web developer, I initially expected learning a new language for mobile development to be a challenge. However, I discovered that React Native is remarkably similar to React, making the transition much smoother than expected. This project was built following the excellent React Native tutorial series by [Net Ninja](https://www.youtube.com/watch?v=J2j1yk-34OY&list=PL4cUxeGkcC9hNTz3sxqGTfxAwU-DIHJd2), with some personal modifications and enhancements.

This is a simple Todo application built with React Native and Expo. This app allows users to manage their tasks with a clean and intuitive interface, featuring real-time updates and persistent storage. 

## 🧰 Technologies Used

- **React Native** - A framework for building native apps using React
- **Expo** - A framework and platform for universal React applications
- **Expo Router** - File-based routing for React Native
- **Appwrite** - Backend as a Service (BaaS) for data storage and authentication
- **React Native Vector Icons** - Icon library for React Native
- **React Native Safe Area Context** - Safe area utilities for React Native

## Getting Started

First, make sure you have Node.js and npm installed on your system. Then, follow these steps:

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your preferred platform:
- For iOS: `npx expo run:ios`
- For Android: `npx expo run:android`
- For web: `npx expo start --web`

## 📽 Project Overview

## ✅ What I Learned

### React Native Fundamentals
- Understanding the core concepts of React Native and its differences from web development
- Learning how React Native bridges JavaScript and native platform code
- Mastering the component lifecycle and state management in React Native

### Expo Development
- Setting up and configuring Expo projects
- Using Expo's development tools and debugging features
- Understanding Expo's managed workflow benefits

### Component Architecture
- **Full Components**: Building complete, self-contained components
- **Custom Components**: Creating reusable UI elements
- **Native Components**: Working with React Native's built-in components:
  - View: Container component (similar to div)
  - Text: Text rendering component
  - Image: Image handling component
  - Understanding that these components render to native platform elements instead of HTML

### File-Based Navigation
- Implementing route groups for better organization
- Understanding the navigation structure
- Managing navigation state and transitions

### Appwrite Integration
- Setting up Appwrite backend services
- Implementing data persistence
- Managing authentication and user data
- Real-time data synchronization

## Project Structure

```
myapp-01/
├── app/              # Main application screens and navigation
├── components/       # Reusable UI components
├── contexts/         # React context providers
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
├── constants/       # Application constants
└── assets/          # Static assets (images, fonts, etc.)
```