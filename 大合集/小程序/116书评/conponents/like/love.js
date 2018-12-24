// conponents/like/love.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
    },
    readOnly: Boolean

  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: "/conponents/like/images/like.png",
    noSrc: "/conponents/like/images/unlike.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike() {
      if (!this.properties.readOnly) {
        var isLike = this.properties.isLike;
        var count = this.properties.count;
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
        let behavior = this.properties.isLike;//? "like" : "like/cancel"
        /* 在子组件中自定义事件,向组父组件传递参数 */
        //  console.log((behavior));

        this.triggerEvent("jump", { behavior: behavior });
      }
    }
  }
})
