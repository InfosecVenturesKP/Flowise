# 🔄 Infosec Ventures Rebrand - Changelog

> **Complete changelog of all changes made to rebrand Flowise UI for Infosec Ventures**

## 📅 Rebrand Summary
- **From**: Flowise (Purple/Blue theme)
- **To**: Infosec Ventures (Black/Red theme)
- **Date**: Current
- **Brand Colors**: Black (`#000000`) + Red (`#cc0000` to `#ff1744`)

---

## 🎨 Theme Variable Changes

### File: `src/assets/scss/_themes-vars.module.scss`

#### Light Theme Updates
```scss
// PRIMARY COLORS (Black Theme)
$primaryLight: #e3f2fd → #f5f5f5      // Light grey
$primaryMain: #2196f3 → #000000       // Blue → Black
$primaryDark: #1e88e5 → #1a1a1a       // Dark grey
$primary200: #90caf9 → #666666        // Medium grey
$primary800: #1565c0 → #333333        // Darker grey

// SECONDARY COLORS (Red Theme)  
$secondaryLight: #ede7f6 → #ffebee    // Light red
$secondaryMain: #673ab7 → #d50000     // Purple → Strong Red
$secondaryDark: #5e35b1 → #b71c1c     // Dark red
$secondary200: #b39ddb → #ef5350     // Medium red
$secondary800: #4527a0 → #cc0000     // Strong red

// ACCENT COLORS (Red Variants)
$tealLight: #76c893 → #ffcdd2         // Light red
$tealMain: #52b69a → #ff1744          // Bright red (visibility)
$tealDark: #34a0a4 → #d50000          // Strong red
```

#### Dark Theme Updates (Enhanced for Visibility)
```scss
// DARK THEME COLORS (Stronger for dark backgrounds)
$darkSecondaryLight: #ffcdd2 → #4d0000   // Sidebar background
$darkSecondaryMain: #cc0000 → #ff1744    // Bright red (visibility)
$darkSecondaryDark: #ffffff → #ffffff    // White text (unchanged)
$darkSecondary200: #ef5350 → #ff5722     // Vivid red
$darkSecondary800: #8b0000 → #d50000     // Strong red
```

#### Additional Style Updates
**File**: `src/assets/scss/style.scss`
```scss
// TipTap Editor Variable Highlighting
.variable {
    background-color: #b3f0b8 → #ffcdd2   // Light red background
    color: #0d7115 → #8b0000              // Dark red text
}
```

---

## 🖼️ Image Asset Changes

### 1. Brand Logos

#### `src/assets/images/flowise_dark.svg`
- **"INFOSEC" text**: `fill="#000000"` → `fill="#ffffff"` (black → white)
- **"VENTURES" text**: Kept red (`#cc0000`)
- **Usage**: Dark theme header logo

#### `src/assets/images/flowise_white.svg`  
- **"INFOSEC" text**: Kept black (`#000000`)
- **"VENTURES" text**: Kept red (`#cc0000`)
- **Usage**: Light theme header logo

### 2. Empty State Illustrations

**Updated all empty state SVGs from purple to red:**
```
#673ab7 → #cc0000  (Purple → Red)
#6c63ff → #cc0000  (Blue → Red)
```

**Files updated (26 total):**
- `agents_empty.svg`
- `api_empty.svg`
- `assistant_empty.svg` 
- `chunks_empty.svg`
- `contact_support.svg`
- `credential_empty.svg`
- `doc_store_details_empty.svg`
- `doc_store_empty.svg`
- `empty_datasets.svg`
- `empty_evals.svg`
- `empty_evaluators.svg`
- `executions_empty.svg`
- `leads_empty.svg`
- `logs_empty.svg`
- `message_empty.svg`
- `prompt_empty.svg`
- `roles_empty.svg`
- `tools_empty.svg`
- `unauthorized.svg`
- `upsert_history_empty.svg`
- `users_empty.svg`
- `validate_empty.svg`
- `variables_empty.svg`
- `workflow_empty.svg`
- `workspaces_empty.svg`
- `embed.svg` (UI component)

### 3. Updated UI Component Icons

#### `src/assets/images/embed.svg`
- `#6aa9ff → #cc0000` (Light blue → Red)
- `#4987ea → #b71c1c` (Dark blue → Dark red)

### 4. Preserved Brand Assets

**Third-party logos kept unchanged (respect brand guidelines):**
- `python.svg` - Python official colors
- `microsoft-azure.svg` - Microsoft branding
- `anthropic.svg` - Anthropic branding
- `auth0.svg` - Auth0 branding
- `github.svg` - GitHub branding
- `google.svg` - Google branding
- `openai.svg` - OpenAI branding
- And other service provider logos

---

## 🗂️ Header & Navigation Changes

### 1. GitHub Star Button Removal
**File**: `src/layout/MainLayout/Header/index.jsx`
- **Removed**: Complete `GitHubStarButton` component and logic
- **Removed**: `starCount` state and `fetchStarCount` useEffect
- **Reason**: Clean header for Infosec Ventures branding

### 2. Version Menu Item Removal  
**File**: `src/layout/MainLayout/Header/ProfileSection/index.jsx`
- **Removed**: "Version" option from profile dropdown
- **Removed**: `AboutDialog` component and related state
- **Reason**: Simplified profile menu

### 3. Marketplace Route Removal
**File**: `src/menu-items/dashboard.js`
- **Commented out**: Marketplace navigation item (lines 105-113)
- **Reason**: Not needed for Infosec Ventures deployment

---

## 🎯 Component Styling Changes

### Sidebar Selected Items (Fixed for Dark Theme)
**Impact**: Dark theme sidebar selected items now use proper red background instead of light pink

**Theme mapping**:
- **Light theme**: Selected items use `$secondaryLight` (#ffebee)
- **Dark theme**: Selected items use `$darkSecondaryLight` (#4d0000)

**Files affected**:
- `src/layout/MainLayout/Sidebar/MenuList/NavItem/index.jsx`
- `src/themes/compStyleOverride.js` (Material-UI overrides)
- `src/themes/index.js` (Theme configuration)

---

## 🔧 Technical Implementation Details

### Theme System Architecture
1. **SCSS Variables** → Define base colors
2. **Theme Object** → Maps SCSS to JS theme
3. **Material-UI Overrides** → Apply to components
4. **Component Styling** → Use theme values

### Color Accessibility Improvements
- **Dark theme reds brightened** for better visibility
- **Contrast ratios maintained** for WCAG compliance
- **Sidebar selection enhanced** with proper dark red background

### File Structure Impact
```
src/
├── assets/
│   ├── images/ (26 SVGs updated)
│   └── scss/ (theme variables updated)
├── layout/
│   └── MainLayout/ (header/sidebar modifications)
├── menu-items/ (marketplace commented out)
└── themes/ (component overrides)
```

---

## ✅ Validation Checklist

### Visual Validation
- [x] Light theme displays correctly
- [x] Dark theme has proper contrast
- [x] Sidebar selected items visible in dark mode
- [x] Logo displays correctly in both themes
- [x] Empty states use brand colors
- [x] Third-party logos unchanged

### Technical Validation  
- [x] No linting errors introduced
- [x] Theme variables properly exported
- [x] Component overrides functional
- [x] Build process successful

### Accessibility Validation
- [x] Color contrast ratios maintained
- [x] Dark theme readability improved
- [x] UI remains keyboard navigable

---

## 🚀 Future Maintenance

### For Next Brand Update:
1. **Update 4 core variables** in `_themes-vars.module.scss`
2. **Update 2 logo SVG files** 
3. **Bulk update empty state SVGs** with new color
4. **Test both light and dark themes**

### Key Files to Monitor:
- `_themes-vars.module.scss` - Core theme definition
- `flowise_dark.svg` & `flowise_white.svg` - Brand logos
- `*_empty.svg` - Brand consistency across illustrations

---

## 📊 Impact Summary

| Category | Files Modified | Color Changes | Components Affected |
|----------|----------------|---------------|-------------------|
| **Theme Variables** | 2 files | 15 variables | All UI components |
| **Brand Logos** | 2 files | Text color changes | Header, auth pages |
| **Empty States** | 26 SVG files | Purple/blue → Red | All empty states |
| **UI Components** | 1 SVG file | Blue → Red | Embed/code icons |
| **Navigation** | 3 files | Menu items removed | Header, sidebar |

**Total Impact**: 34 files modified for complete Infosec Ventures rebrand

---

*Rebrand completed successfully - all systems functional with new Infosec Ventures branding* ✅
