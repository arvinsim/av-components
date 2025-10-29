import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './Card'
import { Button } from './Button'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component for containing content with optional borders, hover effects, and customizable padding.'
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Basic card
export const Basic: Story = {
  args: {
    children: 'This is a basic card with some content.',
  },
}

// Card without border
export const WithoutBorder: Story = {
  args: {
    bordered: false,
    children: 'This card has no border.',
  },
}

// Hoverable card
export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: 'Hover over this card to see the effect.',
  },
}

// Different padding sizes
export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div className="p-4 bg-gray-100">
        This card has no default padding. The gray background shows the content area.
      </div>
    ),
  },
}

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: 'This card has small padding.',
  },
}

export const MediumPadding: Story = {
  args: {
    padding: 'md',
    children: 'This card has medium padding (default).',
  },
}

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: 'This card has large padding.',
  },
}

// Card with structured content
export const WithStructuredContent: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. It can contain any kind of content including text, images, or other components.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Confirm</Button>
      </CardFooter>
    </Card>
  ),
}

// Complex card example
export const ProductCard: Story = {
  render: () => (
    <Card hoverable className="w-80">
      <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-lg"></div>
      <CardHeader>
        <CardTitle>Product Name</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">
          A beautiful product with amazing features that will make your life better.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary-600">$99.99</span>
          <span className="text-sm text-gray-500">⭐ 4.8 (124 reviews)</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" fullWidth>Add to Wishlist</Button>
        <Button variant="primary" size="sm" fullWidth>Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
}

// Profile card example
export const ProfileCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardContent className="text-center">
        <div className="w-20 h-20 rounded-full bg-primary-200 mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-700">JD</span>
        </div>
        <h3 className="text-xl font-semibold mb-1">John Doe</h3>
        <p className="text-gray-600 mb-4">Software Engineer</p>
        <div className="flex justify-center gap-4 text-sm text-gray-500">
          <span>📍 San Francisco</span>
          <span>💼 5+ years</span>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="outline" size="sm">Message</Button>
        <Button variant="primary" size="sm">Connect</Button>
      </CardFooter>
    </Card>
  ),
}

// Playground
export const Playground: Story = {
  args: {
    bordered: true,
    hoverable: false,
    padding: 'md',
    children: 'Customize this card using the controls below.',
  },
}