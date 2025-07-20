# 🎨 How to Create OG Images Like the Example

> **⚡ UPDATE: Dynamic OG images are now automatically generated!**  
> Your website now creates beautiful OG images automatically using code.  
> This guide is kept for reference or custom image creation.  
> See `DYNAMIC-OG-IMAGES.md` for the automated system.

This guide will help you create professional OG images in the clean, minimal style you showed (similar to Vercel's design).

## 📐 **Design Specifications**

### **Dimensions & Format:**

- **Size:** 1200 x 630 pixels (Facebook/Twitter standard)
- **Format:** JPG (better compression) or PNG
- **Aspect Ratio:** 1.91:1

### **Design Elements (Based on Your Example):**

```
┌─────────────────────────────────────────────────────────┐
│ [R]                                    [Geometric    │
│                                         Pattern]     │
│                                                      │
│ Main Title Text                                      │
│ (Large, Bold)                                        │
│                                                      │
│                                                      │
│ Subtitle - Rafadlis | Crafter          From rafadlis.space │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ **Method 1: Canva (Easiest - Recommended)**

### **Step 1: Set Up Template**

1. Go to **[Canva.com](https://canva.com)**
2. Create account (free)
3. Click **"Create Design"** → **"Custom Size"**
4. Enter: **1200 x 630 pixels**

### **Step 2: Design Your Template**

1. **Background:** Set to white (#FFFFFF)
2. **Add your logo/letter:**

   - Upload your "R" logo or create text "R"
   - Position: Top-left corner
   - Size: Large, bold
   - Color: Black or your brand color

3. **Add geometric pattern (optional):**
   - Use Canva's shapes/elements
   - Position: Top-right corner
   - Style: Minimal lines or circles
   - Color: Light gray (#F0F0F0)

### **Step 3: Add Text Elements**

```
Main Title:
- Font: Bold sans-serif (like Helvetica, Arial)
- Size: 72-96px
- Color: Black (#000000)
- Position: Center-left

Subtitle:
- Font: Regular sans-serif
- Size: 32-40px
- Color: Dark gray (#333333)
- Position: Bottom-left

Domain:
- Font: Regular sans-serif
- Size: 24-32px
- Color: Gray (#666666)
- Position: Bottom-right
```

### **Step 4: Create Templates**

Create 3 templates:

1. **Main Site Template:**

   - Title: "Rafadlis | Crafter"
   - Subtitle: "Software Engineer & UX Designer"
   - Domain: "rafadlis.space"

2. **Blog Template:**

   - Title: "[BLOG TITLE]" (placeholder)
   - Subtitle: "Blog - Rafadlis"
   - Domain: "rafadlis.space"

3. **Project Template:**
   - Title: "[PROJECT NAME]" (placeholder)
   - Subtitle: "Project - Rafadlis"
   - Domain: "rafadlis.space"

### **Step 5: Download**

- Format: **JPG** (smaller file size)
- Quality: **High**
- Save as: `og-image.jpg`, `og-blog-default.jpg`, `og-project-default.jpg`

---

## 🎯 **Method 2: Figma (More Professional)**

### **Step 1: Set Up**

1. Go to **[Figma.com](https://figma.com)** (free account)
2. Create new file
3. Create frame: **1200 x 630**

### **Step 2: Design System**

```
Colors:
- Background: #FFFFFF (white)
- Primary text: #000000 (black)
- Secondary text: #333333 (dark gray)
- Accent: #666666 (medium gray)
- Brand: Your preferred color

Fonts:
- Primary: Inter (bold)
- Secondary: Inter (regular)

Layout:
- Padding: 80px all sides
- Logo: Top-left (120x120 area)
- Pattern: Top-right (200x200 area)
- Title: Center-left, max 2 lines
- Footer: Bottom, split left/right
```

### **Step 3: Create Components**

1. **Logo component:** Your "R" or brand mark
2. **Pattern component:** Simple geometric design
3. **Text styles:** Set up consistent typography

### **Step 4: Export**

- Right-click frame → **Export**
- Format: **JPG**
- Quality: **2x** (for sharp images)

---

## 🤖 **Method 3: AI-Generated (Quick)**

### **Using ChatGPT/Claude:**

```
Prompt: "Create an OG image design concept for a personal portfolio website.
Style: Clean, minimal like Vercel.
Dimensions: 1200x630
Elements: Large 'R' logo top-left, title '[YOUR TITLE]',
subtitle 'Rafadlis | Crafter', domain 'rafadlis.space' bottom-right.
Colors: White background, black text, minimal geometric accent."
```

### **Using DALL-E/Midjourney:**

```
Prompt: "OG social media image, 1200x630, minimal design, white background,
large letter R logo, title text '[YOUR TITLE]', clean typography,
Vercel-style, professional web design"
```

---

## 📝 **Method 4: Code-Generated (Advanced)**

I can help you create a Next.js API route that generates OG images dynamically using code!

### **Template for Your Specific Needs:**

Create these 3 images first:

1. **`og-image.jpg`** (Main site):

```
┌─────────────────────────────────────────────────────────┐
│ R                                      ○ ○              │
│                                       ○   ○             │
│                                                         │
│ Rafadlis | Crafter                                      │
│                                                         │
│ Software Engineer &                                     │
│ UX Designer                                             │
│                                                         │
│ Personal Portfolio                     rafadlis.space   │
└─────────────────────────────────────────────────────────┘
```

2. **`og-blog-default.jpg`** (Blog posts):

```
┌─────────────────────────────────────────────────────────┐
│ R                                      ○ ○              │
│                                       ○   ○             │
│                                                         │
│ [Blog Post Title]                                       │
│                                                         │
│                                                         │
│                                                         │
│                                                         │
│ Blog - Rafadlis                        rafadlis.space   │
└─────────────────────────────────────────────────────────┘
```

3. **`og-project-default.jpg`** (Projects):

```
┌─────────────────────────────────────────────────────────┐
│ R                                      ○ ○              │
│                                       ○   ○             │
│                                                         │
│ [Project Name]                                          │
│                                                         │
│                                                         │
│                                                         │
│                                                         │
│ Project - Rafadlis                     rafadlis.space   │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 **Quick Start Action Plan**

### **✅ Option 0: Automated Solution (RECOMMENDED)**

**Your OG images are already working automatically!**

1. ✅ No action needed - dynamic generation is active
2. ✅ See `DYNAMIC-OG-IMAGES.md` for details
3. ✅ Test at: `https://your-site.com/opengraph-image`

### **Option A: Manual 15-Minute Solution**

1. Open **[Canva.com](https://canva.com)**
2. Create 1200x630 design
3. White background + your "R" logo + title text
4. Download as JPG
5. Save to `/public/og-image.jpg`

### **Option B: Manual Professional Solution**

1. Use **[Figma.com](https://figma.com)**
2. Create reusable template system
3. Export all 3 variations
4. Set up consistent brand system

---

## 🎨 **Design Tips for Your Style**

### **Typography:**

- **Primary:** Large, bold, black
- **Secondary:** Medium, regular, dark gray
- **Accent:** Small, regular, medium gray

### **Layout:**

- **Lots of white space** (like the example)
- **Left-aligned text** (easier to read)
- **Consistent margins** (80px recommended)

### **Branding:**

- **Your "R" logo** prominent but not overwhelming
- **Consistent color scheme** across all images
- **Clean, professional look**

---

## 📂 **File Organization**

After creating, place in your `/public` folder:

```
public/
├── og-image.jpg              # Main site (home page)
├── og-blog-default.jpg       # Default for blog posts
├── og-project-default.jpg    # Default for project pages
└── og-custom/                # Folder for specific post images
    ├── welcome-post.jpg      # Custom for specific blog
    └── project-name.jpg      # Custom for specific project
```

---

## ✅ **Testing Your OG Images**

After creating and uploading:

1. **Facebook Debugger:** [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
2. **Twitter Card Validator:** [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
3. **LinkedIn Inspector:** [linkedin.com/post-inspector/](https://linkedin.com/post-inspector/)

---

**Would you like me to help you with any specific method, or do you want me to walk you through creating your first OG image using Canva step-by-step?** 🎨
