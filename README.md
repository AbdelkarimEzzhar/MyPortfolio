# Abdelkarim Ezzhar's Personal Portfolio

A modern, fully responsive personal portfolio website built with **React 18**, **Tailwind CSS**, **Framer Motion**, and **Vite**. Showcasing DevOps & Cloud Engineering projects with professional design and smooth animations.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10+-black?logo=framer)

---

## 🎯 Project Overview

This portfolio website is a **Single Page Application (SPA)** built with modern web technologies. It features:

- **Professional Design**: Clean, modern, and visually appealing interface
- **Full Responsiveness**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: Theme toggle for user comfort
- **Smooth Animations**: Framer Motion entrance and interaction effects
- **Performance**: Lightning-fast with Vite
- **Accessibility**: WCAG compliant with semantic HTML
- **SEO Optimized**: Meta tags and structured content

---

## 📋 Website Sections

| Section | Description |
|---------|-------------|
| **Header** | Navigation bar with dark mode toggle |
| **Hero** | Engaging introduction with profile picture and call-to-action buttons |
| **About** | Personal background, education, and contact information |
| **Skills** | Categorized technical skills with proficiency levels |
| **Projects** | Featured DevOps & Cloud Engineering projects |
| **Contact** | Contact form for inquiries |
| **Footer** | Quick links and social connections |

---

## 🛠️ Tech Stack

### Core Framework
- **React 18** - UI library with hooks and modern patterns
- **Vite** - Next-generation build tool with hot module replacement
- **JSX** - React component syntax

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS preprocessing with Tailwind and autoprefixer
- **CSS Animations** - Smooth transitions and effects

### Animation & UX
- **Framer Motion** - Advanced animation library for React
- **Lucide React** - Beautiful, consistent icon library

### Development Tools
- **npm** - Package manager
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatter

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation & theme toggle
│   │   └── Footer.jsx              # Footer with social links
│   │
│   ├── sections/
│   │   ├── Hero.jsx                # Hero section with profile picture
│   │   ├── About.jsx               # About & education
│   │   ├── Skills.jsx              # Skills with proficiency levels
│   │   ├── Projects.jsx            # Featured projects showcase
│   │   └── Contact.jsx             # Contact form
│   │
│   ├── assets/
│   │   └── profile.jpg             # Profile picture
│   │
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # React DOM entry point
│   └── index.css                   # Global styles & animations
│
├── public/                         # Static assets (future)
│
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies & scripts
├── .prettierrc                     # Prettier formatting rules
├── .gitignore                      # Git ignore rules
└── README.md                       # This documentation

```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ (LTS version recommended)
- **npm** 7+ or **yarn** 4+
- **Git** (optional, for version control)

### Installation

1. **Navigate to project directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or with yarn:
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Your portfolio will open automatically at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Creates optimized build in `dist/` folder

5. **Preview production build locally**
   ```bash
   npm run preview
   ```

---

## 🎨 Customization Guide

### Update Personal Information

Navigate to each section and update content:

- **Header** (`src/components/Header.jsx`): Social links, navigation
- **Hero** (`src/sections/Hero.jsx`): Welcome message, CTA buttons, profile picture
- **About** (`src/sections/About.jsx`): Bio, education, contact details
- **Skills** (`src/sections/Skills.jsx`): Add/remove skills and categories
- **Projects** (`src/sections/Projects.jsx`): Project descriptions and links
- **Contact** (`src/sections/Contact.jsx`): Contact information

### Profile Picture

Your profile picture is located at: `src/assets/profile.jpg`

**To update:**
1. Replace the existing `profile.jpg` with your new image
2. Keep the same filename or update in `Hero.jsx`
3. Recommended: 400x400px square image, optimized <500KB

### Customize Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#YOUR_COLOR',
        secondary: '#YOUR_COLOR',
      }
    }
  }
}
```

### Update Fonts

In `tailwind.config.js`, modify the fontFamily:

```javascript
fontFamily: {
  sans: ['Your Font Name', 'system-ui', 'sans-serif']
}
```

Or import from Google Fonts in `index.html`

---

## 📱 Features & Functionality

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Works on all screen sizes from 320px to 4K

### Dark Mode
- Toggle in header
- Persisted using CSS classes
- Smooth transitions between themes

### Animations
- Page load animations
- Scroll-triggered animations
- Hover effects on interactive elements
- Smooth page transitions

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

### Performance
- Code splitting with Vite
- Lazy loading of components
- Optimized asset delivery
- Gzip compression in production

---

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)
Fastest and easiest deployment:

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project" → Select your repository
4. Vercel auto-detects React + Vite
5. Click "Deploy"

**Build command**: `npm run build`
**Install command**: `npm install`

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [Netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. **Build command**: `npm run build`
6. **Publish directory**: `dist`
7. Click "Deploy"

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## ✉️ Contact Form Setup

### Make It Functional with EmailJS

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service (Gmail recommended)
3. Create an email template for contact submissions
4. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
5. Update `src/sections/Contact.jsx`:
   ```javascript
   import emailjs from '@emailjs/browser';
   
   emailjs.init('YOUR_PUBLIC_KEY');
   ```

### Alternative: Backend API

Create a backend endpoint that handles form submissions:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response
}
```

### Alternative: Netlify Forms

Add `netlify` attribute to the form in `Contact.jsx`

---

## 🔒 Security Best Practices

- No sensitive data in repository
- Use environment variables for API keys
- HTTPS enforced in production
- Form submissions handled securely
- No credentials in version control

---

## 🚀 Performance & Optimization

- **Minification**: CSS & JS minified in production
- **Tree-shaking**: Unused code removed during build
- **Code splitting**: Components loaded on demand
- **Asset optimization**: Images and fonts optimized
- **Gzip compression**: Enabled by deployment platforms

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🐛 Troubleshooting

### Port 3000/5173 already in use
```bash
npm run dev -- --port 3001
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
npm run build -- --debug
```

### Styling issues
Clear cache and rebuild:
```bash
rm -rf dist node_modules/.vite
npm run build
```

### Dark mode not working
Check if Tailwind dark mode is enabled in `tailwind.config.js`:
```javascript
module.exports = {
  darkMode: 'class',
  // ...
}
```

---

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 📦 Available npm Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 📊 Browser Support

| Browser | Version |
|---------|---------|
| Chrome/Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| iOS Safari | 14+ |
| Android Chrome | 90+ |

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

## 📧 Contact Information

- **Email**: abdelkarimezzhar47@gmail.com
- **Phone**: +212 672 972 744
- **GitHub**: [@AbdelkarimEzzhar](https://github.com/AbdelkarimEzzhar)
- **Location**: Rabat, Morocco

---

## 🏆 Portfolio Built With

- ❤️ React & Modern Web Technologies
- ✨ Attention to detail and professional design
- 🚀 Performance-first approach
- ♿ Accessibility in mind

---

**Last Updated**: April 2, 2026

Made with ❤️ using React, Tailwind CSS, Framer Motion, and Vite
