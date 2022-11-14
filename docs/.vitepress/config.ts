import {defineConfig} from 'vitepress';

export default defineConfig ({
  base: '/docs/',
  title: 'VitePress',
  lastUpdated: true,
  markdown: {
    theme: 'dracula',
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/images/logo.svg',
    nav: [
      // default link enter to index.md
      {text: 'Guide', link: '/guide/'},
      {text: 'Config Reference', link: '/config/'},
      {text: 'Default Theme Config', link: '/default-theme-config/'},
    ],
    sidebar: [
      {
        text: 'Frontend',
        items: [
          { text: 'HTML & CSS', link: '/Frontend/HTML-CSS/' },
          { text: 'JavaScript', link: '/Frontend/JavaScript/' },
        ],
        collapsible: true,
        collapsed: true,
      },
      {
        text: 'React',
        items: [
          { text: 'React', link: '/Frontend/React/' },
        ],
      }
    ],
    // sidebar: {
    //   '/guide/': [
    //     {
    //       text: 'Guide',
    //       children: [
    //         {text: 'Introduction', link: '/guide/'},
    //         {text: 'Getting Started', link: '/guide/getting-started'},
    //       ],
    //     },
    //   ],
    // },
  },
});
