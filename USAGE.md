# Usage Examples

## Installation

```bash
npm install av-components
```

## Quick Start

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Dialog } from 'av-components'
import 'av-components/styles'

function MyApp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

## Button Examples

### Variants
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### States
```tsx
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>
```

### With Icons (using any icon library)
```tsx
import { PlusIcon } from 'some-icon-library'

<Button>
  <PlusIcon className="w-4 h-4 mr-2" />
  Add Item
</Button>
```

## Card Examples

### Basic Card
```tsx
<Card>
  <CardContent>
    Simple card content
  </CardContent>
</Card>
```

### Full Featured Card
```tsx
<Card hoverable>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here with any React components.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

### Custom Styled Card
```tsx
<Card 
  bordered={false} 
  padding="lg"
  className="bg-primary-50"
>
  <CardContent>
    Custom background and padding
  </CardContent>
</Card>
```

## Dialog Examples

### Basic Dialog
```tsx
import { useState } from 'react'

function MyComponent() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <DialogContent>
          Your content here
        </DialogContent>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
```

### Confirmation Dialog
```tsx
function ConfirmDialog({ open, onConfirm, onCancel }) {
  return (
    <Dialog open={open} onClose={onCancel} size="sm">
      <DialogHeader>
        <DialogTitle>Confirm Action</DialogTitle>
      </DialogHeader>
      <DialogContent>
        Are you sure you want to proceed?
      </DialogContent>
      <DialogFooter>
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>
          Confirm
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
```

### Form Dialog
```tsx
function FormDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} size="lg">
      <DialogHeader>
        <DialogTitle>Create New Item</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <textarea 
            placeholder="Description"
            className="w-full p-2 border rounded"
          />
        </form>
      </DialogContent>
      <DialogFooter>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onClose}>
          Create
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
```

## Theming

### Using Default Theme
The library uses a light green theme by default. No configuration needed!

### Creating Custom Theme
```tsx
import { createTheme } from 'av-components'

const blueTheme = createTheme({
  name: 'blue-theme',
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

### Extending Tailwind Config
Add to your `tailwind.config.js`:

```js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/av-components/dist/**/*.js', // Include library components
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors or override primary
        primary: {
          // Your custom color palette
        },
      },
    },
  },
  plugins: [],
}
```

## Utility Functions

### Class Name Merging
```tsx
import { cn } from 'av-components'

function MyComponent({ className }) {
  return (
    <div className={cn('base-class', 'p-4', className)}>
      Content
    </div>
  )
}
```

## Best Practices

1. **Always import styles**: Make sure to import 'av-components/styles' in your app entry point
2. **Use TypeScript**: The library has full TypeScript support for better DX
3. **Customize with className**: All components accept className prop for customization
4. **Combine components**: Mix and match components to create complex UIs
5. **Accessibility**: Components have basic accessibility features built-in

## TypeScript Support

All components are fully typed:

```tsx
import type { ButtonProps, CardProps, DialogProps } from 'av-components'

const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'md',
  children: 'Click me',
}
```
