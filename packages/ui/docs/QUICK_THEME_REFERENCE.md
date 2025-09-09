# 🎯 Quick Theme Variables Reference

> **Quick reference for updating Flowise theme colors - Infosec Ventures branding**

## 📍 Main Theme File
**File**: `src/assets/scss/_themes-vars.module.scss`

## 🎨 Essential Variables to Update

### Light Theme (Lines 4-16)
```scss
// Primary Colors (Black Theme)
$primaryLight: #f5f5f5     // Light backgrounds
$primaryMain: #000000      // 🎯 MAIN BRAND COLOR (black)
$primaryDark: #1a1a1a      // Dark variants
$primary200: #666666       // Medium greys  
$primary800: #333333       // Dark greys

// Secondary Colors (Red Theme)  
$secondaryLight: #ffebee   // Light red backgrounds
$secondaryMain: #d50000    // 🎯 MAIN ACCENT COLOR (red)
$secondaryDark: #b71c1c    // Dark red
$secondary200: #ef5350     // Medium red
$secondary800: #cc0000     // Strong red
```

### Dark Theme (Lines 75-80)
```scss
// Secondary Dark (Enhanced for visibility)
$darkSecondaryLight: #4d0000  // 🎯 SIDEBAR SELECTED BACKGROUND
$darkSecondaryMain: #ff1744   // 🎯 BRIGHT ACCENT (for visibility)
$darkSecondaryDark: #ffffff   // White text on dark
$darkSecondary200: #ff5722    // Vivid variants
$darkSecondary800: #d50000    // Strong red
```

### Accent Colors (Lines 34-37)
```scss
// Used for various UI elements
$tealLight: #ffcdd2        // Light accent
$tealMain: #ff1744         // 🎯 MAIN UI ACCENT  
$tealDark: #d50000         // Dark accent
```

## 🖼️ Key Image Files to Update

### Brand Logos
- `src/assets/images/flowise_dark.svg` - **White text** + red accent
- `src/assets/images/flowise_white.svg` - **Black text** + red accent

### App Icons  
- `public/favicon.ico`
- `public/logo192.png`
- `public/logo512.png`

### Empty State SVGs (Auto-updated with brand colors)
- All `*_empty.svg` files in `src/assets/images/`

## 🚀 For Next Brand Change

### Step 1: Update Core Colors
```scss
// Replace these 4 main variables:
$primaryMain: #YOUR_NEW_PRIMARY      // Main brand color
$secondaryMain: #YOUR_NEW_ACCENT     // Main accent color  
$tealMain: #YOUR_NEW_ACCENT          // UI accent color
$darkSecondaryMain: #BRIGHT_ACCENT   // Dark theme accent
```

### Step 2: Update Logos
1. Edit `flowise_dark.svg` - change text to white, accent to your brand color
2. Edit `flowise_white.svg` - change text to black, accent to your brand color

### Step 3: Bulk Update SVGs
```bash
# Replace purple/blue with your brand color
sed -i 's/#673ab7/#YOUR_BRAND_COLOR/g' src/assets/images/*_empty.svg
sed -i 's/#6c63ff/#YOUR_BRAND_COLOR/g' src/assets/images/*_empty.svg
```

## 🎨 Current Infosec Ventures Colors

| Purpose | Light Theme | Dark Theme | Usage |
|---------|-------------|------------|-------|
| **Primary Brand** | `#000000` (black) | `#000000` (black) | Main brand color |
| **Accent Color** | `#d50000` (strong red) | `#ff1744` (bright red) | Buttons, links, highlights |
| **Sidebar Selected** | `#ffebee` (light red) | `#4d0000` (dark red) | Active menu items |
| **UI Elements** | `#ff1744` (bright red) | `#ff1744` (bright red) | Icons, accents |

## 🔧 Component Theme Mapping

| UI Element | Variable | File Location |
|------------|----------|---------------|
| Sidebar selected item background | `$darkSecondaryLight` | `_themes-vars.module.scss:76` |
| Main accent color | `$secondaryMain` | `_themes-vars.module.scss:13` |
| Button colors | `$tealMain` | `_themes-vars.module.scss:36` |
| Dark theme accent | `$darkSecondaryMain` | `_themes-vars.module.scss:77` |

---

**💡 Tip**: Always test both light and dark themes after making changes!

**📁 Full Documentation**: See `THEME_CUSTOMIZATION_GUIDE.md` for complete details.
