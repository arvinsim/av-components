/**
 * Theme configuration for the component library
 * This allows for easy customization and extension of themes
 */

export interface Theme {
  name: string
  colors: {
    primary: string
    primaryHover: string
    primaryActive: string
    secondary: string
    secondaryHover: string
    background: string
    text: string
    border: string
  }
}

export const lightGreenTheme: Theme = {
  name: 'light-green',
  colors: {
    primary: 'bg-primary-500 text-white',
    primaryHover: 'hover:bg-primary-600',
    primaryActive: 'active:bg-primary-700',
    secondary: 'bg-primary-100 text-primary-900',
    secondaryHover: 'hover:bg-primary-200',
    background: 'bg-white',
    text: 'text-gray-900',
    border: 'border-gray-300',
  },
}

// Default theme
export const defaultTheme = lightGreenTheme

// Export a function to create custom themes
export function createTheme(theme: Theme): Theme {
  return theme
}
