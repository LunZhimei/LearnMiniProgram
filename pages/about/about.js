// pages/about/about.js

//4. 获取APP()产生的示例对象
const app = getApp()
console.log(app.globalData.name)

Page({
  // 获取用户信息方式2，事件监听
  handleGetUserInfo(event){
    console.log(event)

  }

  
})