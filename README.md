# 🐶 Ready Set Walk - Hugo Theme User Guide

Welcome to **Ready Set Walk**! This is a vibrant, easy-to-use website theme designed specifically for teen dog walkers (and pet sitters!). It helps you look professional, show off your furry clients, and get new bookings.

---

## 🚀 Quick Start

If you already have [Hugo](https://gohugo.io/installation/) installed:

1.  **Create a new site**:
    ```bash
    hugo new site my-dog-walking-biz
    cd my-dog-walking-biz
    ```
2.  **Install the theme**:
    ```bash
    git init
    git submodule add https://github.com/StaticDesigns/ready-set-walk.git themes/ready-set-walk
    ```
3.  **Install dependencies**:
    Copy `themes/ready-set-walk/package.json` to your root folder and run:
    ```bash
    cp themes/ready-set-walk/package.json .
    npm install
    ```
    *Note: The theme handles Tailwind CSS configuration automatically via `assets/css/main.css`.*

4.  **Copy the example config**:
    Copy `themes/ready-set-walk/hugo.toml` to your root folder (replace the default one).

    ```bash
    cp themes/ready-set-walk/hugo.toml .
    ```

5.  **Copy the example content**:
    Run the following commands to copy the example content to your root folder:

    ```bash
    cp -r themes/ready-set-walk/exampleSite/content .
    cp -r themes/ready-set-walk/exampleSite/data .
    ```

6.  **Run it!**

    ```bash
    hugo serve
    ```

    Open `http://localhost:1313` to see your new site!

---

## ⚙️ Configuration

Almost everything can be changed in the `hugo.toml` file. Think of this file as your site's control panel.

### 1. 👤 Personalization
Set your name and bio in the `[params.about]` section.
```toml
[params.about]
  name = "Maya"  # Your Name
  title = "Meet {{name}}" # Required title
  # You can write multiple paragraphs for your bio!
  content = """Hi, I'm Maya! I love dogs...
  
  Reliability is my #1 priority..."""
  image = "/images/about-me2.png" # Place your photo in static/images/
```

### 2. 🖼️ Hero Section (The Top Banner)
You have two styles to choose from!
*   **Hero 1 (Default)**: Image on the right, text on the left.
*   **Hero 2**: Full-width background image with text overlay.

To switch, change the `layout` setting:
```toml
[params.hero]
  layout = "hero2" # Options: "hero" or "hero2"
  title = "Ready, Set, WALK!"
  subtitle = "Energetic dog walking for [Your City]..."
```

See the screenshots below in the [Theme Layout](#theme-layout) section.

### 3. 📱 Social Media Links
Add your links, and the icons will automatically appear in the footer.
```toml
[params.social]
  instagram = "https://instagram.com/yourhandle"
  tiktok = "https://tiktok.com/@yourhandle"
  facebook = "" # Leave empty to hide
```

### 4. 💌 Contact Form
This theme supports 3 ways to handle form submissions.

#### Option A: FormSubmit (Easiest - Recommended)
1.  Set `provider = "formsubmit"` in `hugo.toml`.
2.  Set your `email` address in `[params.contact]`.
3.  **CRITICAL STEP**:
    *   Start your site and send a test message using the contact form.
    *   **Check your email inbox**. You will receive an activation email from FormSubmit.
    *   **Click "Activate"**.
    *   *Until you do this, the form will not redirect to the "Thank You" page.*
4. Copy the example Thank You page from `themes/ready-set-walk/exampleSite/content/thank-you.md` to your site's `content/` folder. This is the page that will be shown after the form is submitted.

#### Option B: Formspree
1.  Register at [formspree.io](https://formspree.io) and create a new form.
2.  Get your **Form ID** (e.g., `xmqbonzq`).
3.  Update `hugo.toml`:
    ```toml
    [params.contact.form]
      provider = "formspree"
      action = "YOUR_FORM_ID"
    ```

#### Option C: Netlify
If you host your site on Netlify, just set:
```toml
[params.contact.form]
  provider = "netlify"
```

### 5. 📈 Google Analytics (GA4)
Want to see how many people visit your site?
1.  Get your **Measurement ID** (starts with `G-`) from Google Analytics.
2.  Add it to `hugo.toml`:
    ```toml
    [params]
      googleAnalyticsID = "G-1234567890"
    ```

### 6. 🧭 Navigation Bar
You can choose whether the navigation bar stays at the top of the screen while scrolling (`sticky`) or scrolls away (`static`).
```toml
[params.navbar]
  sticky = true # Set to false for a static navbar
```

---

## 📝 Managing Content

### 🏷️ Services & Rates

Manage up to three services and rates.

Edit `data/services.yaml`:
```yaml
- title: "Quick Potty Break"
  price: "$15"
  duration: "15 mins"
  description: "Perfect for older dogs or puppies."
  icon: "fa-clock" # Use any FontAwesome icon name
  popular: false
```

### 📸 Happy Paws Gallery

Manage up to 12 photos of the pets you walk.

1.  Put your dog photos in `static/images/gallery/`.  
2.  Edit `data/gallery.yaml`:
    ```yaml
    - image: "/images/gallery/dog1.jpg"
      alt: "Buddy the Golden Retriever"
      name: "Buddy"
    ```

### ⭐ Testimonials
Manage up to 6 testimonials.

Edit `data/testimonials.yaml`:
```yaml
- text: "Maya is the best! My dog goes crazy when she arrives."
  author: "Sarah J."
  dog: "Cooper"
```

---

## 🛠️ Advanced Customization

### Changing the Favicon

Ready-Set-Walk uses an icon set for different devices. Default icons are available in `themes/ready-set-walk/static/`.
- `site.webmanifest` (for PWA)
- `apple-touch-icon.png` (for iOS)
- `android-chrome-192x192.png` (for Android)
- `android-chrome-512x512.png` (for Android)
- `favicon-32x32.png` (for desktop)
- `favicon-16x16.png` (for desktop)

To change the icons, replace the files in `themes/ready-set-walk/static/` with your own.

### Fonts
The theme uses **Nunito** (headings) and **Outfit** (body text) from Google Fonts. To change the fonts, edit `themes/ready-set-walk/static/css/main.css`.

---

## 🚀 Deployment

### Option 1: Netlify (Easiest)
1.  Push your code to GitHub.
2.  Log in to [Netlify](https://www.netlify.com/) and click "Add new site" -> "Import an existing project".
3.  Select your repository.
4.  Netlify will detect it's a Hugo site. Click "Deploy".

### Option 2: GitHub Pages
1.  Go to your repository **Settings** > **Pages**.
2.  Under **Build and deployment**, change **Source** to **GitHub Actions**.
3.  Click **Configure** on the suggested "Hugo" workflow (or create `.github/workflows/hugo.yaml`).
4.  **Important**: Update `baseURL` in `hugo.toml` to your GitHub Pages URL (e.g., `https://yourname.github.io/my-dog-walking-biz/`).

---

## Theme Layout

The theme uses a simple layout system with two hero section options. Your site will look like this when you use this theme:

### Hero
![Hero 1](https://raw.githubusercontent.com/StaticDesigns/ready-set-walk/refs/heads/main/static/screenshot-full-hero.png)

### Hero2
 ![Hero 2](https://raw.githubusercontent.com/StaticDesigns/ready-set-walk/refs/heads/main/static/screenshot-full-hero2.png)
