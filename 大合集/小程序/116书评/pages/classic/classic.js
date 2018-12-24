// pages/classic/classic.js
import { ClassicModel } from "../../models/classic"
import { LikeModel } from "../../models/love"

const classicModel = new ClassicModel()
const likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: {},
    isLast: true,
    isFirst: false
  },


  onLoad: function (options) {
    classicModel.getLatest(res => {
      this.setData({
        classic: res,
        like_status:res.like_status,
        fav_nums:res.fav_nums
      })
    })
  },
  onLike(e) {
    var behaviors = e.detail.behavior;
    // console.log(behaviors)

    var id = this.data.classic.id;
    var type = this.data.classic.type;
    // console.log(type)
    likeModel.getLike(behaviors, id, type)
  },
  onPrev() {


    this._updateData("previous")
  },
  onNext() {
 


    this._updateData("next")
  },


  // 封装
  _updateData(nextOrprevious) {
 
       classicModel.getClassic(this.data.classic.index, nextOrprevious, res => {
       likeModel.getLikeStatus(res.type,res.id,res=>{
         this.setData({
          like_status:res.like_status,
          fav_nums:res.fav_nums
         })
       })
       
        this.setData({
        classic: res,
        isFirst: classicModel.isFirst(res.index),
        isLast: classicModel.isLast(res.index)
      })
      // wx.setStorageSync(this._getkey(res.index), res)
    })
    // }
  },


})