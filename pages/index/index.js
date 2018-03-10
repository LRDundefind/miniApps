//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '演示小程序的组件能力',
    data: [{
      text:'视图容器',
      item:[
        {text:'view'},
        {text:'scroll-view'},
        {text:'swiper'},
        {text:'movable-area'},
        {text:'cover-view'}
      ]
    },{
      text: '基础内容',
      item: [
        { text: 'icon' },
        { text: 'text' },
        { text: 'right-text' },
        { text: 'progress' }
      ]
    },{
      text: '表单组件',
      item: [
        { text: 'button' },
        { text: 'checkbox' },
        { text: 'form' },
        { text: 'input' }
      ]
    }],
    currentTab: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onChangeShowState: function(e) {
    console.log(e);
    var that = this;
    that.setData({
      currentTab: 1 
    })
  } 
})
