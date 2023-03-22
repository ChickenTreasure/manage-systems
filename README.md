介绍：

该项目是一个后台管理项目，可以理解为后台管理系统的模板。该项目采用 SpringBoot+Vue 开发。主要基于Vue 技术栈的SPA项目，vue-cli搭建项目，使用vue-router单页面开发，进行后台管理系统的开发。 前端技术栈：Vue2全家桶 + Element UI + axios + echarts

前端代码：（主分支）

后端代码：（backer分支）

使用教程：

1.  首先在后端代码目录里面，打开powershell，输入npm install安装依赖包，然后输入node .\app.js运行后端node服务器

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79ffb3e198a0438cb0a5f620d2973c97~tplv-k3u1fbpfcp-zoom-1.image)

1.  VScode打开前端项目代码，npm install安装依赖包，之后npm run serve运行项目，打开就会出现下面界面。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3359afb3e46f4ddc81a7c55e63ac8985~tplv-k3u1fbpfcp-zoom-1.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76d2fd4aca0c488889f374c3915c0476~tplv-k3u1fbpfcp-zoom-1.image)

登录后：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4224161116d46a29825e867e7a90d8c~tplv-k3u1fbpfcp-zoom-1.image)

就可以去了解整个项目里面的东西了...

其他：

后端API接口源码（在另一个分支backer里面）

此项目中使用的是api地址是：<http://timemeetyou.com:8889/api/private/v1/>。如果发现该地址无法使用，可能服务器过期了，这样请自行下载后端源码使用本地的后端服务。

可以将后端源码（backer分支里）下载下来跑通后使用本地的后端服务，此时需要修改src/network/request.js文件中的请求地址，也需要修改src/components/goods/listChildComponents/ListAdd.vue中上传图片的请求地址。
