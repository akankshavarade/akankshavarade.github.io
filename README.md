# 🚀 Akanksha Varade - Gen AI Portfolio

A modern, responsive portfolio website showcasing expertise in Generative AI, LLM Engineering, and Agentic AI Systems.

## ✨ Features

- 🎨 **Modern Dark Theme** with glassmorphism effects
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast & Lightweight** - Pure HTML, CSS, JavaScript (No frameworks)
- 🎭 **Smooth Animations** - Typing effects, hover animations, smooth scrolling
- 🤖 **12 Detailed AI Projects** - 2 real production projects + 10 conceptual projects
- 💼 **Professional Sections** - Hero, About, Skills, Projects, Contact
- 🎯 **Project Filtering** - Filter by category (Healthcare AI, Agentic AI, Automation, Code Generation)
- 📊 **Skills Visualization** - Animated progress bars for technical skills
- 🔗 **Social Links** - LinkedIn, GitHub, Email integration

## 📁 Project Structure

```
genai-portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive features and data
└── README.md          # Documentation
```

## 🎯 Sections

### 1. Hero Section
- Animated typing effect
- Professional stats (4+ years, 12+ projects)
- Call-to-action buttons
- Social media links

### 2. About Section
- Professional summary
- Key highlights (4 cards)
- Education details
- Certifications

### 3. Skills Section
- 8 skill categories with progress bars
- AI/ML & LLMs
- LLM Frameworks & Tools
- Vector Databases & Search
- Backend & APIs
- Cloud & DevOps
- Data & Databases
- Frontend & UI
- AI Models & Transformers

### 4. Projects Section
- 12 comprehensive projects
- Filterable by category
- Each project includes:
  - Problem Statement
  - Solution
  - Architecture
  - Tech Stack
  - Impact & Results

### 5. Contact Section
- Contact cards (Email, Phone, LinkedIn, GitHub)
- Call-to-action box
- Direct links to social profiles

## 🚀 How to Deploy on GitHub Pages

### Method 1: Direct Upload (Easiest)

1. **Create a GitHub Repository**
   ```bash
   # Go to GitHub.com and create a new repository
   # Name it: genai-portfolio (or any name you prefer)
   ```

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop: `index.html`, `styles.css`, `script.js`
   - Commit changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select "main" branch
   - Folder: Select "/ (root)"
   - Click Save

4. **Access Your Site**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/genai-portfolio/`
   - Wait 2-3 minutes for deployment

### Method 2: Using Git (Recommended)

1. **Initialize Git Repository**
   ```bash
   cd d:\AK
   git init
   git add .
   git commit -m "Initial commit: Gen AI Portfolio"
   ```

2. **Create GitHub Repository**
   - Go to GitHub.com
   - Click "New Repository"
   - Name: `genai-portfolio`
   - Don't initialize with README
   - Click "Create repository"

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/genai-portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: main branch
   - Folder: / (root)
   - Save

5. **Your Site is Live!**
   - URL: `https://YOUR-USERNAME.github.io/genai-portfolio/`

## 🔧 Customization

### Update Personal Information

**In `index.html`:**
- Line 5: Update page title
- Line 6: Update meta description
- Hero section: Update name, title, tagline
- About section: Update summary text
- Contact section: Update email, phone, LinkedIn, GitHub links

**In `script.js`:**
- Update `fullText` variable for typing animation
- Modify `skillsData` array to add/remove skills
- Edit `projectsData` array to add/remove projects

### Change Colors

**In `styles.css`:**
```css
:root {
    --primary: #0ea5e9;        /* Main blue color */
    --primary-dark: #0284c7;   /* Darker blue */
    --accent: #06b6d4;         /* Cyan accent */
    --dark-900: #0a0a0f;       /* Background */
    --dark-800: #13131a;       /* Secondary background */
}
```

### Add New Projects

**In `script.js`:**
```javascript
projectsData.push({
    id: 13,
    title: 'Your Project Name',
    category: 'Agentic AI', // or Healthcare AI, Automation, Code Generation
    duration: 'Jan 2025 – Present',
    problem: 'Problem description...',
    solution: 'Solution description...',
    architecture: 'Architecture flow...',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    impact: [
        'Impact point 1',
        'Impact point 2'
    ],
    isReal: true // or false
});
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 768px
- **Small Mobile**: 360px - 480px
- **Extra Small**: Below 360px

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effect on cards
- **Gradient Text**: Animated gradient on headings
- **Smooth Animations**: Fade-in, slide-up, hover effects
- **Typing Effect**: Animated typing in hero section
- **Progress Bars**: Animated skill level indicators
- **Hover Effects**: Card lift and glow on hover
- **Smooth Scroll**: Smooth navigation between sections

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **Load Time**: < 1 second
- **File Size**: 
  - HTML: ~25KB
  - CSS: ~20KB
  - JS: ~15KB
- **Total**: ~60KB (extremely lightweight!)

## 🔗 Live Demo

Once deployed, your portfolio will be accessible at:
```
https://YOUR-USERNAME.github.io/genai-portfolio/
```

## 📝 License

This portfolio is free to use and modify for personal purposes.

## 🤝 Support

For issues or questions:
- Email: akankshavarade07@gmail.com
- LinkedIn: [Akanksha Varade](https://www.linkedin.com/in/akanksha-varade)

## 🎯 Next Steps

1. ✅ Open `index.html` in browser to preview
2. ✅ Customize content with your information
3. ✅ Deploy to GitHub Pages
4. ✅ Share your portfolio link!

---

**Built with ❤️ using HTML, CSS & JavaScript**

© 2025 Akanksha Varade. All rights reserved.
