---
title: Foo
link: foo
---

# Foo

This is an example component.

```jsx
import Foo from '@dumi-v2-monorepo/foo';

export default () => <Foo title="Hello dumi!" />;
```

<API id="Foo"></API>

## dumi 和 Umi 的关系是什么？

Umi 是前端开发框架，适用于前端应用研发；dumi 是在 Umi 的基础上打造的静态站点框架，适用于组件研发。

## 如何完全自定义首页？

创建 `.dumi/pages/index.tsx` 即可用 React 来编写首页，注意不要同时在文档解析的根目录中创建 index.md，会导致路由冲突。

## dumi 支持使用 `.md` 之外的其他方式编写文档吗？

dumi 约定 `.dumi/pages` 为 React 路由的解析目录，较为复杂的交互式页面可以在这个目录下用 React 编写，路由的生成规则及 FrontMatter 能力与 md 一致。

## 如何在 cra 等非 umi 项目中使用 dumi？

1. 安装模块。

```bash
yarn add dumi cross-env -D
```

2. 增加启动命令，修改 `package.json`。

```json
  "scripts": {
    "dumi": "cross-env APP_ROOT=dumi dumi dev",
    "dumi-build": "cross-env APP_ROOT=dumi dumi build"
  },
```

3. 增加配置，新建 `.dumirc`。

```js
export default {
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
};
```

4. 新建文档目录 `dumi/docs/`，这里的 `dumi` 目录即第二步中配置的环境变量，你可以随意同步修改。

5. 新建文档 `dumi/docs/index.md`。

```markdown
# 这是一个 Dumi 结合 create-react-app 的 Demo
```

6. 将 dumi 的临时文件添加到 `.gitignore` 中。

```text
.dumi
```

## dumi 支持基于其他技术框架、例如 Vue、Angular 编写文档和 Demo 吗？

暂不支持

## 如何添加统计脚本和全局 CSS 样式？

统计脚本可以使用配置项 [analytics](/config#analytics)，全局样式可以添加到 `.dumi/global.{less,css}` 文件内。

## 部署文档

### 非根目录部署

非根目录部署需要修改 Umi 的 [base 配置项](/config#base) 和 **视实际情况** 修改 [publicPath 配置项](/config#publicpath)。

```ts
export default {
  base: '/文档起始路由',
  publicPath: '/静态资源起始路径/',
  // 其他配置
};
```

> 文档项目独立时, 通常 `base` 和 `publicPath` 配置项相同。

### 部署到 GitHub Pages

由于 GitHub Pages 是非域名根路径部署, `base` 和 `publicPath` 配置项需改为 **仓库名称** 。参考 [非根目录部署](#非根目录部署)

#### 手动部署

借助 [gh-pages](https://github.com/tschaub/gh-pages) 可以轻松帮助我们部署文档到 Github Page

```bash
npm install gh-pages --save-dev
```

or

```bash
yarn add gh-pages -D
```

`package.json` 中添加

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

编译生成 `dist` 目录

```bash
npm run docs:build
```

一键发布

```bash
npm run deploy
```

#### 自动部署

利用 [Github Action](https://github.com/features/actions) 在每次 `master` 分支更新后自动部署

新建 `.github/workflows/gh-pages.yml` 文件

```yml
name: github pages

on:
  push:
    branches:
      - master # default branch

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run docs:build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs-dist
```

```md
### Info Badge <Badge>info</Badge>

### Warning Badge <Badge type="warning">warning</Badge>

### Error Badge <Badge type="error">error</Badge>

### Success Badge <Badge type="success">success</Badge>
```

会被渲染为：

### Info Badge <Badge>info</Badge>

### Warning Badge <Badge type="warning">warning</Badge>

### Error Badge <Badge type="error">error</Badge>

### Success Badge <Badge type="success">success</Badge>

## Container

需要在正文中以醒目的方式展示额外信息时，可以使用 Container 扩展语法，例如：

```md
:::info{title=自定义标题}
这是一条普通信息
:::

:::success
这是一条成功信息
:::

:::warning
这是一条警告信息
:::

:::error
这是一条错误信息
:::
```

将会被渲染为：

:::info{title=自定义标题}
这是一条普通信息
:::

:::success
这是一条成功信息
:::

:::warning
这是一条警告信息
:::

:::error
这是一条错误信息
:::

```md
### Info Badge <Badge>info</Badge>

### Warning Badge <Badge type="warning">warning</Badge>

### Error Badge <Badge type="error">error</Badge>

### Success Badge <Badge type="success">success</Badge>
```

会被渲染为：

### Info Badge <Badge>info</Badge>

### Warning Badge <Badge type="warning">warning</Badge>

### Error Badge <Badge type="error">error</Badge>

### Success Badge <Badge type="success">success</Badge>

## Container

需要在正文中以醒目的方式展示额外信息时，可以使用 Container 扩展语法，例如：

```md
:::info{title=自定义标题}
这是一条普通信息
:::

:::success
这是一条成功信息
:::

:::warning
这是一条警告信息
:::

:::error
这是一条错误信息
:::
```

将会被渲染为：

:::info{title=自定义标题}
这是一条普通信息
:::

:::success
这是一条成功信息
:::

:::warning
这是一条警告信息
:::

:::error
这是一条错误信息
:::
