 // components/like/index.js
Component({

  properties: {
    isLike: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
    }
  },


  data: {
    yesSrc: "/images/like.png",
    noSrc: "/images/unlike.png"
  },


  methods: {
    onLike() {
      var isLike = this.properties.isLike;
      var count = this.properties.count;

      //  逻辑好理解
      if (isLike) {
        this.setData({
          isLike: false,
          count: count - 1
        })
      } else {
        this.setData({
          isLike: true,
          count: count + 1
        })
      }

      // 不语易化，不好理解
      // count=isLike?count-1:count+1;
      // this.setData({
      //   isLike:!isLike,
      //   count:count
      // })
      let behavior = this.properties.isLike ? "like" : "like/cancel";
      this.triggerEvent("like", { behavior: behavior })
      // wx.request({
      //   url: 'http://bl.7yue.pro/v1/'+url,
      //   header: {
      //     'Content-Type': 'application/json',
      //     "appkey":"9xK0CrzQREI1yGPh"
      //   },
      //   data:{
      //     art_id=1,
      //     type:100
      //   },
      //   method:"POST",
      //   success: function(res) {
      //     console.log(res)
      //   }
      // })
    }
  }
})
