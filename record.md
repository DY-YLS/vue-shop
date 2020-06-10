# axios配置拦截器添加token和进度条
```
axios.defaults.baseURL = 'http://47.115.124.102:8888/api/private/v1/';
/*为每个请求添加一个拦截器，作用是在每个请求头中添加自定义变量为authorization的token信息*/
axios.interceptors.request.use(config=>{
  /*发送请求时，进度条开始*/
  NProgress.start()
  config.headers.authorization=window.sessionStorage.getItem('token')
  return config
})
axios.interceptors.response.use(config=>{
  /*请求完成后，进度条结束*/
  NProgress.done()
  return config
})
```

#Tomcat部署vue单页面项目
1. 将vue项目打包，会生成一个dist文件夹
```
npm run build
```
2. 将dist文件夹中的内容复制到Tomcat的webapps/ROOT目录下（Tomcat默认的根目录就是webapps/ROOT目录）
3. 启动Tomcat，浏览器访问 `http://localhost:8080/` 即可

注意：
由于`npm run build`打包生成的index.html文件中，引入的css和js都是基于根目录的，   
像这样`<script src=/js/app.a9514e70.js></script>`,
所以不能将dist文件夹中的内容放到webapps目录的其它文件夹下，然后通过 `http://localhost:8080/文件夹名称/` 访问，   
因为这样无法导入css和js。
