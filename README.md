# react pc 端的模板

包含 react, react-redux, react-router-dom, antd

使用 create-react-app 生成，[点击查看文档](https://create-react-app.dev/)

# 代码格式规范

使用 prettier 规范格式即可

## vscode 配置：

1. 安装插件 Prettier - Code formatter
2. ctrl + p 输入 `setting` 打开工作区设置
3. 搜索 `format on save` 并勾选
4. 选择一个 js 文件 ctrl + p 输入 `format document`
5. 选择`格式化文档，方法是...`
6. 选择 Prettier - Code formatter

这样即可保存的时候使用 prettier 格式化代码

## webstorm 配置：

高版本 webstorm 自带 prettier, 格式化快捷键为 ctrl + shift + alt + p

1. 打开 File -> Setting
2. 搜索 `file watchers`(Tools -> File Watchers)
3. 选择 file watchers 点击右侧 + 图标
4. 选择 Prettier 即可

> 注意配置 prettier 应用程序路径地址，以及文件类型

# 关于样式

在文件 src/modifyVars 可以配置全局的 less 变量

antd 皮肤变量可以在此配置，同实自己所写的 less 文件也可使用其中的变量

less 文件默认为 css modules，如果想写非 css modules 在 less 文件加入 global 即可。eg:

```less
:global {
  .app {
    color: @primary-color;
  }
}
```

# 关于图标

考虑到 antd 的 svg 图标过大的问题
使用手动的取别名的方式按需加载。如果程序中 antd 的 svg 图标无法展示，可直接修改 ant-icons-alias.js 文件，对所需 svg 图标单独引入

# 关于 redux

暂时没有做 redux 模板的规范

redux 可以跟随页面按需引入，动态引入案例：

```
import store from 'store';
store.injectReducer('home', reducer);
```

# 关于引入的绝对路径

暂时通过 jsconfig 配置 src 为绝对路径引入

# 关于 moment

由于 moment 过大，去掉 moment 使用 Day 插件
