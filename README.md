# av-components

A React and TailwindCSS component library with a light green theme. This library is designed to be extended with custom themes and provides a clean, modern set of UI components.

## Features

- 🎨 **Light Green Theme** - Beautiful default theme with green color palette
- 🎯 **TypeScript** - Full TypeScript support with type definitions
- 🎭 **TailwindCSS** - Built with Tailwind for easy customization
- 🔧 **Extensible** - Create custom themes easily
- 📦 **Tree-shakeable** - Import only what you need
- 🌟 **Modern Components** - Button, Card, and Dialog components included

## Installation

```bash
npm install av-components
```

**Peer Dependencies:** This library requires React 18 or 19:
```bash
npm install react react-dom
```

## Usage

### Basic Setup

Import the styles in your main file:

```tsx
import 'av-components/styles'
```

### Components

#### Button

```tsx
import { Button } from 'av-components'

function App() {
  return (
    <>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      
      <Button fullWidth>Full Width Button</Button>
      <Button disabled>Disabled Button</Button>
    </>
  )
}
```

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter, Button } from 'av-components'

function App() {
  return (
    <Card hoverable>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        This is the card content area.
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}
```

#### Dialog

```tsx
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter, Button } from 'av-components'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <DialogContent>
          Dialog content goes here.
        </DialogContent>
        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
```

## Theming

The library uses a light green theme by default. You can create custom themes:

```tsx
import { createTheme } from 'av-components'

const myTheme = createTheme({
  name: 'my-theme',
  colors: {
    primary: 'bg-blue-500 text-white',
    primaryHover: 'hover:bg-blue-600',
    primaryActive: 'active:bg-blue-700',
    secondary: 'bg-blue-100 text-blue-900',
    secondaryHover: 'hover:bg-blue-200',
    background: 'bg-white',
    text: 'text-gray-900',
    border: 'border-gray-300',
  },
})
```

## Customization

All components accept standard HTML attributes and can be customized with the `className` prop using TailwindCSS classes. The library uses `clsx` and `tailwind-merge` to properly merge class names.

```tsx
import { Button } from 'av-components'

<Button className="shadow-lg ring-2 ring-blue-500">Custom Button</Button>
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build library
npm run build
```

## Components API

### Button Props

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `fullWidth`: boolean (default: false)
- `disabled`: boolean
- All standard button HTML attributes

### Card Props

- `bordered`: boolean (default: true)
- `hoverable`: boolean (default: false)
- `padding`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- All standard div HTML attributes

### Dialog Props

- `open`: boolean (required)
- `onClose`: () => void (required)
- `closeOnBackdrop`: boolean (default: true)
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full' (default: 'md')

## License

ISC
 
