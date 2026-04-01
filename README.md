# Abdelkarim Ezzhar's Personal Portfolio

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Showcasing DevOps & Cloud Engineering projects and technical expertise.

## 🚀 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Fully Responsive**: Perfect on mobile, tablet, and desktop devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion for entrance and interaction animations
- **Single Page Application**: Smooth scrolling navigation
- **Performance Optimized**: Fast load times with Vite
- **Accessible**: WCAG compliant with semantic HTML
- **SEO Friendly**: Meta tags and structured content

## 📋 Sections

- **Hero**: Engaging introduction with call-to-action buttons
- **About**: Personal background, education, and contact information
- **Skills**: Categorized technical skills with proficiency levels
- **Projects**: Featured projects with detailed descriptions and highlights
- **Contact**: Contact form and communication methods
- **Footer**: Quick links and social connections

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern UI library with hooks
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icon library

### Development Tools
- **npm**: Package manager
- **ESLint**: Code quality
- **PostCSS**: CSS processing

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Git (optional)

### Step 1: Clone/Navigate to Project
```bash
cd /path/to/portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

or with yarn:
```bash
yarn install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The website will automatically open in your browser at `http://localhost:3000`

### Step 4: Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Step 5: Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation and theme toggle
│   │   └── Footer.jsx          # Footer with links and socials
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About and education
│   │   ├── Skills.jsx          # Skills and proficiency
│   │   ├── Projects.jsx        # Featured projects
│   │   └── Contact.jsx         # Contact form
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Documentation
```

## 🎨 Customization

### Update Personal Information
Edit the relevant sections in each component:
- **Header**: Social links and navigation
- **Hero**: Welcome message and CTA buttons
- **About**: Bio, education, and contact details
- **Skills**: Add/remove skill categories
- **Projects**: Update project descriptions and links
- **Contact**: Form and contact methods

### Modify Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your brand colors
  },
  dark: {
    // Dark mode colors
  }
}
```

### Update Fonts
Modify the `fontFamily` in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font Name', 'system-ui', 'sans-serif']
}
```

## 🌐 Deployment

### Deploy to Vercel
1. Push your project to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your GitHub repository
4. Vercel will auto-detect React + Vite
5. Click "Deploy"

### Deploy to Netlify
1. Push your project to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click "Deploy"

### Deploy to GitHub Pages
1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## ✉️ Contact Form Setup

The contact form is currently a demo. To make it functional:

### Option 1: EmailJS (Recommended)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
4. Update `Contact.jsx` with your EmailJS credentials

### Option 2: Backend API
Create a backend endpoint that handles form submissions:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  // Handle response
}
```

### Option 3: Netlify Forms
Add `netlify` attribute to the form:
```jsx
<form netlify netlify-honeypot="bot-field" method="POST">
  {/* form fields */}
</form>
```

## 🚀 Performance Optimization

- Minified CSS and JavaScript in production
- Lazy loading of components
- Optimized images
- Efficient animations
- Gzip compression enabled in deployment

## 🔒 Security

- No sensitive data stored in the repository
- Form submission handled securely
- HTTPS required for deployment
- CSP headers configured

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

## 🐛 Troubleshooting

### Port 3000 already in use
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

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact & Support

- Email: abdelkarimezzhar47@gmail.com
- Phone: +212 672 972 744
- GitHub: [@AbdelkarimEzzhar](https://github.com/AbdelkarimEzzhar)
- Location: Rabat, Morocco

---

**Made with ❤️ using React, Tailwind CSS, and Framer Motion**
