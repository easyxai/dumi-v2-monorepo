import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},

  themeConfig: {
    name: 'dumi-v2-monorepo',
    nav: [
      {
        title: '组件',
        link: '/components/componentdemo01',
      },
      {
        title: 'foo',
        link: '/foos',
      },
      {
        title: 'hook',
        link: '/hooks/hooksdemo',
      },
    ],
  },
  resolve: {
    entryFile: './.dumi/resolveEntry.ts',
    atomDirs: [
      {
        type: 'component',
        dir: 'packages/components/src',
      },
      {
        type: 'hook',
        dir: 'packages/hooks/src',
      },
      {
        type: 'foo',
        dir: 'packages/foo/src',
      },
    ],
  },
  alias: {
    '@dumi-v2-monorepo/components': `${process.cwd()}/packages/components/src`,
    '@dumi-v2-monorepo/foo': `${process.cwd()}/packages/foo/src`,
    '@dumi-v2-monorepo/hooks': `${process.cwd()}/packages/hooks/src`,
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
    { id: 'zh-HK', name: '繁体中文' },
  ],
});
