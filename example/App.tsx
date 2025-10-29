import React, { useState } from 'react'
import { Button } from '../src/components/Button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../src/components/Card'
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter } from '../src/components/Dialog'

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AV Components</h1>
          <p className="text-lg text-gray-600">
            React + TailwindCSS Component Library with Light Green Theme
          </p>
        </div>

        {/* Button Examples */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Buttons</h2>
          <div className="space-y-6">
            {/* Variants */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">States</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Full Width */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Full Width</h3>
              <Button fullWidth>Full Width Button</Button>
            </div>
          </div>
        </section>

        {/* Card Examples */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
              </CardHeader>
              <CardContent>
                This is a basic card with header, content, and footer sections.
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card hoverable>
              <CardHeader>
                <CardTitle>Hoverable Card</CardTitle>
              </CardHeader>
              <CardContent>
                This card has a hover effect that adds a shadow when you hover over it.
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">Learn More</Button>
              </CardFooter>
            </Card>

            <Card bordered={false} className="bg-primary-50">
              <CardHeader>
                <CardTitle>Custom Styled</CardTitle>
              </CardHeader>
              <CardContent>
                Cards can be customized with different styles and backgrounds.
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">Details</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Dialog Example */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dialog</h2>
          <Card>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Click the button below to open a dialog/modal component.
              </p>
              <Button onClick={() => setDialogOpen(true)}>
                Open Dialog
              </Button>
            </CardContent>
          </Card>

          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogHeader>
              <DialogTitle>Example Dialog</DialogTitle>
            </DialogHeader>
            <DialogContent>
              <p className="mb-4">
                This is a modal dialog component with a backdrop. It supports:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Escape key to close</li>
                <li>Click backdrop to close</li>
                <li>Customizable sizes</li>
                <li>Focus trap</li>
                <li>Body scroll lock</li>
              </ul>
            </DialogContent>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setDialogOpen(false)}>
                Confirm
              </Button>
            </DialogFooter>
          </Dialog>
        </section>

        {/* Theme Info */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Theme</h2>
          <Card>
            <CardContent>
              <p className="mb-4 text-gray-600">
                This library uses a <strong>light green</strong> color palette as the default theme. 
                The primary color uses Tailwind's green-500 and related shades.
              </p>
              <div className="flex gap-2 flex-wrap">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="text-center">
                    <div 
                      className={`w-16 h-16 rounded-lg bg-primary-${shade} border border-gray-200`}
                    />
                    <span className="text-xs text-gray-500 mt-1 block">{shade}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Additional themes can be created by extending the theme configuration.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default App
