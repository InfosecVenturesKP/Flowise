# 📚 Flowise UI Documentation

> **Complete documentation for Flowise UI customization and branding**

## 📁 Documentation Files

### 🎨 Theme Customization
| File | Purpose | Use When |
|------|---------|----------|
| **[THEME_CUSTOMIZATION_GUIDE.md](./THEME_CUSTOMIZATION_GUIDE.md)** | Complete theme customization guide | Full rebrand or detailed reference |
| **[QUICK_THEME_REFERENCE.md](./QUICK_THEME_REFERENCE.md)** | Quick reference for key variables | Fast color updates |
| **[INFOSEC_VENTURES_REBRAND_CHANGELOG.md](./INFOSEC_VENTURES_REBRAND_CHANGELOG.md)** | Complete changelog of current rebrand | Understanding what was changed |

## 🚀 Quick Start

### For Minor Color Updates:
1. Read **[QUICK_THEME_REFERENCE.md](./QUICK_THEME_REFERENCE.md)**
2. Update 4 key variables in `_themes-vars.module.scss`
3. Test both light and dark themes

### For Complete Rebrand:
1. Follow **[THEME_CUSTOMIZATION_GUIDE.md](./THEME_CUSTOMIZATION_GUIDE.md)**
2. Update theme variables, logos, and assets
3. Use validation checklist

### To Understand Current Setup:
1. Read **[INFOSEC_VENTURES_REBRAND_CHANGELOG.md](./INFOSEC_VENTURES_REBRAND_CHANGELOG.md)**
2. See exactly what was changed from original Flowise

## 🎯 Key Theme Variables (Quick Reference)

```scss
// Main brand colors (src/assets/scss/_themes-vars.module.scss)
$primaryMain: #000000      // Black (main brand)
$secondaryMain: #d50000    // Red (accent color)
$tealMain: #ff1744         // Bright red (UI elements)
$darkSecondaryMain: #ff1744 // Dark theme accent
$darkSecondaryLight: #4d0000 // Dark theme selected background
```

## 🖼️ Key Assets

```
src/assets/images/
├── flowise_dark.svg      // Dark theme logo
├── flowise_white.svg     // Light theme logo
└── *_empty.svg          // Empty state illustrations (26 files)

public/
├── favicon.ico          // Website favicon
├── logo192.png          // App icon 192px
└── logo512.png          // App icon 512px
```

## 🔧 Essential Files

| File | Purpose |
|------|---------|
| `src/assets/scss/_themes-vars.module.scss` | **Main theme variables** |
| `src/themes/index.js` | Theme configuration |
| `src/themes/compStyleOverride.js` | Component styling |
| `src/layout/MainLayout/Header/` | Header components |
| `src/menu-items/dashboard.js` | Navigation menu |

## 📞 Need Help?

1. **Quick fixes**: Use [QUICK_THEME_REFERENCE.md](./QUICK_THEME_REFERENCE.md)
2. **Detailed guide**: Use [THEME_CUSTOMIZATION_GUIDE.md](./THEME_CUSTOMIZATION_GUIDE.md)  
3. **Understanding changes**: Use [INFOSEC_VENTURES_REBRAND_CHANGELOG.md](./INFOSEC_VENTURES_REBRAND_CHANGELOG.md)

---

*Documentation maintained for Infosec Ventures Flowise customization* 🎨
