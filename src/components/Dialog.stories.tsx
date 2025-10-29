import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter } from './Dialog'
import { Button } from './Button'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal dialog component with backdrop, customizable size, and accessibility features including focus trap and escape key handling.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

// Interactive dialog component for stories
const DialogExample = ({ 
  size = 'md', 
  closeOnBackdrop = true,
  children 
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnBackdrop?: boolean
  children: React.ReactNode
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        size={size}
        closeOnBackdrop={closeOnBackdrop}
      >
        {children}
      </Dialog>
    </>
  )
}

// Basic dialog
export const Basic: Story = {
  render: () => (
    <DialogExample>
      <DialogHeader>
        <DialogTitle>Basic Dialog</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <p>This is a basic dialog with some content. You can close it by clicking the backdrop, pressing Escape, or using the Close button.</p>
      </DialogContent>
      <DialogFooter>
        <Button variant="outline" onClick={() => {}}>Cancel</Button>
        <Button variant="primary" onClick={() => {}}>Confirm</Button>
      </DialogFooter>
    </DialogExample>
  ),
}

// Small dialog
export const Small: Story = {
  render: () => (
    <DialogExample size="sm">
      <DialogHeader>
        <DialogTitle>Small Dialog</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <p>This is a small dialog.</p>
      </DialogContent>
      <DialogFooter>
        <Button variant="primary" size="sm" onClick={() => {}}>OK</Button>
      </DialogFooter>
    </DialogExample>
  ),
}

// Large dialog
export const Large: Story = {
  render: () => (
    <DialogExample size="lg">
      <DialogHeader>
        <DialogTitle>Large Dialog</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <p>This is a large dialog with more space for content.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </DialogContent>
      <DialogFooter>
        <Button variant="outline" onClick={() => {}}>Cancel</Button>
        <Button variant="primary" onClick={() => {}}>Save</Button>
      </DialogFooter>
    </DialogExample>
  ),
}

// Full screen dialog
export const FullScreen: Story = {
  render: () => (
    <DialogExample size="full">
      <DialogHeader>
        <DialogTitle>Full Screen Dialog</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <p>This dialog takes up most of the screen space.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-gray-50 rounded">
            <h4 className="font-semibold mb-2">Section 1</h4>
            <p>Content for the first section.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h4 className="font-semibold mb-2">Section 2</h4>
            <p>Content for the second section.</p>
          </div>
        </div>
      </DialogContent>
      <DialogFooter>
        <Button variant="outline" onClick={() => {}}>Cancel</Button>
        <Button variant="primary" onClick={() => {}}>Save Changes</Button>
      </DialogFooter>
    </DialogExample>
  ),
}

// No backdrop close
export const NoBackdropClose: Story = {
  render: () => (
    <DialogExample closeOnBackdrop={false}>
      <DialogHeader>
        <DialogTitle>No Backdrop Close</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <p>This dialog cannot be closed by clicking the backdrop. You must use the buttons or press Escape.</p>
      </DialogContent>
      <DialogFooter>
        <Button variant="outline" onClick={() => {}}>Cancel</Button>
        <Button variant="primary" onClick={() => {}}>Confirm</Button>
      </DialogFooter>
    </DialogExample>
  ),
}

// Confirmation dialog
export const ConfirmationDialog: Story = {
  render: () => (
    <DialogExample size="sm">
      <DialogHeader>
        <DialogTitle>Confirm Action</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      </DialogContent>
      <DialogFooter>
        <Button variant="outline" onClick={() => {}}>Cancel</Button>
        <Button variant="primary" onClick={() => {}}>Delete</Button>
      </DialogFooter>
    </DialogExample>
  ),
}

// Form dialog
export const FormDialog: Story = {
  render: () => (
    <DialogExample>
      <DialogHeader>
        <DialogTitle>Create New User</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Admin</option>
              <option>User</option>
              <option>Viewer</option>
            </select>
          </div>
        </form>
      </DialogContent>
      <DialogFooter>
        <Button variant="outline" onClick={() => {}}>Cancel</Button>
        <Button variant="primary" onClick={() => {}}>Create User</Button>
      </DialogFooter>
    </DialogExample>
  ),
}

// Static dialog for controls testing
export const StaticDialog: Story = {
  args: {
    open: true,
    size: 'md',
    closeOnBackdrop: true,
    children: (
      <>
        <DialogHeader>
          <DialogTitle>Static Dialog</DialogTitle>
        </DialogHeader>
        <DialogContent>
          <p>This dialog is always open for testing the controls.</p>
        </DialogContent>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </DialogFooter>
      </>
    ),
  },
  parameters: {
    layout: 'fullscreen',
  },
}