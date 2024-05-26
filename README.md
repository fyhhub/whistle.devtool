# whistle.devtool

## 安装
```js
npm i -g whistle.devtool
```

## 使用

**第一步：`把不代理地址删除`，一定要要把 whistle 站点代理上，这一点很重要！！！**

![17165274650391716527464167.png](https://fastly.jsdelivr.net/gh/fyhhub/imgs@main/17165274650391716527464167.png)


然后**切换到whistle代理**

**第二步：配置域名规则**
```
# 将流量走到插件里
juejin.cn whistle.devtool://
# 去掉缓存，防止sdk无法注入
juejin.cn disable://cache
```


**第三步：手机连接代理**


**第四步：开始调试**

1. F12打开控制台, 用于查看log
2. 打开Inspectors下的Preview, 用于查看预览
3. 用手机打开页面



![17165280890611716528088391.png](https://fastly.jsdelivr.net/gh/fyhhub/imgs@main/17165280890611716528088391.png)







## 远程执行命令

直接在whistle的控制台输入`ev('alert(1)')` 即可执行js脚本

![17165282920611716528291346.png](https://fastly.jsdelivr.net/gh/fyhhub/imgs@main/17165282920611716528291346.png)

## 分享抓包内容
![BE20240526221329.png](https://raw.githubusercontent.com/fyhhub/imgs/main/QQ%E6%88%AA%E5%9B%BE20240526221329.png)

![BE20240526221216.png](https://raw.githubusercontent.com/fyhhub/imgs/main/QQ%E6%88%AA%E5%9B%BE20240526221216.png)
