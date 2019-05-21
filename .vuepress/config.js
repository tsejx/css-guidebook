const generateSidebar = require('./generateSidebar');
const name = 'CSS-Guidebook';

const setPrefix = (base, route) => `${base}/${route}`;

module.exports = {
  base: `/${name}/`,
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  title: 'CSS-Guidebook',
  // ga: 'UA-138047269-1',
  // serviceWorker: true,
  port: 3000,

  themeConfig: {
    repo: 'tsejx/CSS-Guidebook',
    logo: '/favicon.png',
    search: true,
    searchMaxSuggestions: 15,
    // serviceWorker: {
    //   updatePopup: {
    //     message: '新内容已准备就绪',
    //     buttonText: '刷新',
    //   },
    // },
    sidebar: [
      {
        title: '基本概念',
        collapsable: false,
        children: ['selector', 'specificity', 'values-and-units'].map(r =>
          setPrefix('basement', r)
        ),
      },
      {
        title: '属性',
        collapsable: false,
        children: ['location', 'size', 'decoration', 'content'].map(r => setPrefix('properties', r)),
      },
      {
        title: '页面布局',
        collapsable: false,
        children: [
          ...[
            'box-model',
            'bfc',
            'center-horizontally',
            'center-vertically',
            'center-both-vertically-and-horizontally',
            'flex-box',
            'double-columns-layout',
            'three-columns-layout',
            'multi-columns-layout',
          ].map(r => setPrefix('layout', r)),
          {
            title: '网格布局',
            collapsable: false,
            children: generateSidebar('layout/grid'),
          },
        ],
      },
      {
        title: '预编译语言',
        collapsable: false,
        children: generateSidebar('precompilation'),
      },
    ],
    sidebarDepth: 2,
    lastUpdated: '最近更新时间',
  },

  vueThemes: {
    links: {
      github: 'https://github.com/tsejx/CSS-Guidebook',
    },
  },
};
