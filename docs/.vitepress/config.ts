import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Pitt VitePress Blog',
  description: 'A blog built with VitePress',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  head: [
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3c8772',
      },
    ],
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],

  markdown: {
    headers: {
      level: [0, 0],
    },
    theme: 'dracula',
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/images/logo.png',
    nav: nav(),
    sidebar: {
      '/Frontend/': sidebarFrontend(),
      '/LeetCode/': sidebarLeetCode(),
    },
  },
});

function nav() {
  return [
    { text: 'Frontend', link: '/Frontend/' },
    { text: 'LeetCode', link: '/LeetCode/' },
  ];
}

function sidebarFrontend() {
  return [
    {
      text: '⚡️ HTML & CSS',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Position', link: '/Frontend/HTML-CSS/position' },
        { text: 'Box Model', link: '/Frontend/HTML-CSS/box-model' },
      ],
    },
    {
      text: '⚡️ JavaScript',
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: 'Variables Scope',
          link: '/Frontend/JavaScript/variables-scope',
        },
        {
          text: 'Closure',
          link: '/Frontend/JavaScript/closure',
        },
        {
          text: 'IIFE',
          link: '/Frontend/JavaScript/IIFE',
        },
        {
          text: 'Hoisting',
          items: [
            { text: 'Syntax', link: '/Frontend/JavaScript/Hoisting/' },
            {
              text: 'Questions',
              link: '/Frontend/JavaScript/Hoisting/01-questions',
            },
          ],
        },
      ],
    },
    {
      text: '⚡️ ES6+',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Arrow Function', link: '/Frontend/ES6+/arrow-function' },
        { text: 'Destructuring', link: '/Frontend/ES6+/destructuring' },
      ],
    },
  ];
}

function sidebarLeetCode() {
  return [
    {
      text: '⚡️ Low',
      collapsible: true,
      collapsed: true,
      items: [{ text: '01-10', link: '/LeetCode/Low/01-10' }],
    },
  ];
}
