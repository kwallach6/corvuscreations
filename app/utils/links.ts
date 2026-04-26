import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Engineering',
  icon: 'i-lucide-cog',
  to: '/engineering'
}, {
  label: 'Arts',
  icon: 'i-lucide-palette',
  to: '/arts'
}]
