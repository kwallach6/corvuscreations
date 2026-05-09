export default defineAppConfig({
  global: {
    picture: {
      dark: '/profile.jpg',
      light: '/profile.jpg',
      alt: 'My profile picture'
    }
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    },
    prose: {
      a: {
        base: [
          'text-primary border-b border-transparent hover:border-primary font-medium focus-visible:outline-primary focus-visible:has-[>code]:outline-0 [&>code]:border-dashed hover:[&>code]:border-primary hover:[&>code]:text-primary focus-visible:[&>code]:border-primary focus-visible:[&>code]:text-primary',
          'transition-colors [&>code]:transition-colors'
        ]
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://linkedin.com/in/awallach4',
      'target': '_blank',
      'aria-label': 'Alex on LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/awallach4',
      'target': '_blank',
      'aria-label': 'Alex on GitHub'
    }]
  }
})
