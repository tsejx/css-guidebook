const config = {
  mode: 'site',
  title: 'CSS Guidebook',
  description: 'CSS 完全知识体系',
  base: '/css-guidebook/',
  publicPath: '/css-guidebook/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/css-guidebook-favicon.png',
  exportStatic: {},
  dynamicImport: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/tsejx/css-guidebook',
    },
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
