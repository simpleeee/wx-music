var app=new getApp();
Page({  
  data:{
    musicList:[],
    // musicContent:[]
  },
  onLoad (){  
    const _this = this;   
    wx.request({
      url: 'https://api.apiopen.top/musicRankings', //仅为示例，并非真实的接口地址     
      header: {
        'content-type': 'application/json' // 默认值
      },         
      success(res) {       
        _this.setData({
          musicList: res.data.result,
          // musicContent:res.data.request.
        })       
      }
    })
  }  
})