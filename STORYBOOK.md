# Storybook Integration

Storybook has been successfully integrated into the `av-components` project. This allows you to develop, test, and document your React components in isolation.

## What's Included

### 🎯 Components with Stories

1. **Button Component** (`/src/components/Button.stories.tsx`)
   - All variants: Primary, Secondary, Outline, Ghost
   - All sizes: Small, Medium, Large
   - Special features: Full width, Disabled state
   - Combined showcase showing all variants together

2. **Card Component** (`/src/components/Card.stories.tsx`)
   - Basic card configurations
   - Different padding sizes (none, sm, md, lg)
   - Bordered and borderless variants
   - Hoverable cards
   - Complex examples: Product card, Profile card
   - Structured content with CardHeader, CardTitle, CardContent, CardFooter

3. **Dialog Component** (`/src/components/Dialog.stories.tsx`)
   - Interactive dialogs with open/close functionality
   - Multiple sizes: Small, Medium, Large, Extra Large, Full Screen
   - Different use cases: Basic, Confirmation, Form dialog
   - Accessibility features demo (backdrop close, escape key)

### 🎨 Styling Integration

- **Tailwind CSS**: Fully integrated with your existing Tailwind configuration
- **Theme Support**: Uses your light green theme (primary colors)
- **Responsive Design**: All components are responsive and mobile-friendly

### 📚 Documentation Features

- **Auto-generated docs**: Each component includes comprehensive documentation
- **Props table**: Automatically generated from TypeScript interfaces
- **Interactive examples**: Live examples you can interact with
- **Code snippets**: Copy-paste ready code examples

## Running Storybook

### Start the Development Server
```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006/`

### Build Storybook for Production
```bash
npm run build-storybook
```

## File Structure

```
.storybook/
├── main.ts          # Storybook configuration
└── preview.ts       # Global preview settings

src/components/
├── Button.stories.tsx    # Button component stories
├── Card.stories.tsx      # Card component stories
└── Dialog.stories.tsx    # Dialog component stories
```

## Features Demonstrated

### Button Component Stories
- ✅ All variant types (primary, secondary, outline, ghost)
- ✅ Size variations (sm, md, lg)
- ✅ Full width configuration
- ✅ Disabled states
- ✅ Interactive playground
- ✅ Combined showcase

### Card Component Stories
- ✅ Basic usage patterns
- ✅ Padding variations
- ✅ Border and hover states
- ✅ Structured content layout
- ✅ Real-world examples (Product card, Profile card)
- ✅ Compound components (CardHeader, CardTitle, etc.)

### Dialog Component Stories
- ✅ Size variations (sm, md, lg, xl, full)
- ✅ Interactive examples with state management
- ✅ Accessibility features
- ✅ Different use cases (confirmation, forms)
- ✅ Backdrop click behavior

## Next Steps

1. **Add More Stories**: Create stories for any additional components you build
2. **Enhance Documentation**: Add more detailed descriptions and usage guidelines
3. **Add Controls**: Consider upgrading Storybook to get interactive controls
4. **Testing Integration**: Add visual regression testing with Chromatic
5. **Deployment**: Deploy Storybook to share with your team

## Tips for Development

- Use Storybook to develop components in isolation
- Test different component states and edge cases
- Share Storybook URL with designers and stakeholders for review
- Use stories as a component library reference
- Leverage auto-generated documentation for better DX

Your component library is now fully documented and ready for collaborative development!