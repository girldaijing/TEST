// pages/detail/detail.js
const local=require("../../../data/local");  //请求当地接口数据
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isPlay:false,   //定义初始状态
      shared:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.clearStorage({
    //   key: 'allcollected',
    //   success: function(res){
    //     // success
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })
     console.log(options);
    var self=this;//改变自己的this名称为self后，再使用的this就指向page
    var id=options.id; //
    var data=local.postList[options.id];
       

    this.setData({
        data,
        postId:id,
        music:local.postList[options.id].music
     });

     this.onMusic();

     if(app.globalData.g_isPlay && app.globalData.g_currentId==id){
       this.setData({
         isPlay:true
       });
     }

     let allcollected=wx.getStorageSync('allcollected'); 
    //  console.log(allcollected[id])  
     if(allcollected){
         let storagecollected=allcollected[id];
      //  console.log(storagecollected)
         this.setData({
          allcollected:storagecollected
         });
     }else{
       let allcollected={};
       allcollected[id]=false;
       wx.setStorageSync("allcollected", allcollected);
     }

    },
     onMusic(){
       var self=this;
       wx.onBackgroundAudioPlay(function() {
       self.setData({
         isPlay:true
       });
       app.globalData.g_isPlay=true;
       app.globalData.g_currentId=self.data.postId;
     });

     wx.onBackgroundAudioPause(function() {
      self.setData({
        isPlay:false
      });
      app.globalData.g_isPlay=false;
      app.globalData.g_currentId=null;
     });
     wx.onBackgroundAudioStop(function() {
      self.setData({
        isPlay:false
      });
     });

    
  },



  playmusic(){
     var self=this;
    if(this.data.isPlay){
      wx.stopBackgroundAudio();
      this.setData({
        isPlay:false
      });
    }else{
      wx.playBackgroundAudio({
      dataUrl: self.data.music.url,
      title:self.data.music.title,
      coverImgUrl:self.data.music.coverImgUrl
    });
    this.setData({
      isPlay:true
    });
    }
  },

  collect(){
    var allcollected=wx.getStorageSync('allcollected');
    var storagecollected=allcollected[this.data.postId];
    // console.log(storagecollected)
    storagecollected=!storagecollected;
    // console.log(storagecollected)
    allcollected[this.data.postId]=storagecollected;
    wx.setStorageSync("allcollected", allcollected);

    this.setData({
      allcollected:storagecollected
    })
  },
  share(){
  //   this.setData({
  //     shared:!this.data.shared
  // })
    wx.showActionSheet({
      itemList: ["分享到微信","分享到微博","分享到朋友圈"],
      itemColor: '#44f',
      success:res=>{
        this.setData({
          shared:true
        });
      },
        fail:err=>{
          this.setData({
            shared:false
          })
        
      }
    })
  }


})