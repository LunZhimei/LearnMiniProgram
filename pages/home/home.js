// pages/home/home.js
// 注册页面
Page({

  /**
   * 页面的初始数据
   */
  // 操作2.初始化一些数据
  data: {
    name: 'world',
    age:18,
    students:[
      { id: 110, name: 'zhangsan', age: 24},
      { id: 111, name: 'lisi', age: 34 },
      { id: 112, name: 'wangwu', age: 44 }
    ],
    counter:0,
    // list:[]

  },

// -----------
  // 操作3，监听页面的事件（wxml中定义的事件）
  addBtnClick(){
    // 错误做法：界面不发生刷新，只会在命令行打印。
    // console.log('按钮发生了点击')
    // this.data.counter +=1
    // console.log(this.data.counter)

    // 2，this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  subBtnClick(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleViewTag(){
    console.log('hello被点击了')
  },
  
// ------------
  // 操作1,监听页面的生命周期函数
  // 1）页面被加载出来时
  onLoad(){
    console.log('onLoad')
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success: (res)=> {
    //     console.log(res)
    //     const data = res.data.data
    //     this.setData({
    //       list:data
    //     })
    //   }
    // })
  },
  // 3）页面初次渲染完成时
  onReady(){
    console.log('onReady')
  },
  // 2）页面显示出来时
  onShow(){
    console.log('onShow')
  },
  // 页面隐藏起来时
  onHide(){
    console.log('onHide')
  },
  // 页面跳转时销毁掉跳转前页面时
  onUnload(){

  },

  // -----------
  // 操作4，监听其他事件
  // 监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  }

})