// 注册小程序示例
App({
  // 生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    // console.log(options)

    // 1, 获取用户信息方式1，并将用户信息传递给服务器
    wx.getUserInfo({
      success: function (res) {
        // console.log(res)
      }
    })
  },




  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  },
  // 4.在APP中定义全局数据，pages可以通过getApp()的方式获取App()示例对象，进而获取全局数据。
  globalData:{
    name:'lunzm',
    age:28
  }
})