// components/music/index.js
// import {common} from "../my-behaviors";
const audio = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    url: String
  },
  // behaviors:[common],

  /**
   * 组件的初始数据
   */
  data: {
    // 定义音乐播放状态
    isPlay: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMusic() {
      if (this.data.isPlay) {
        this.setData({
          isPlay: false
        })
        audio.pause();
      } else {
        audio.title = this.properties.title;
        audio.src = this.properties.url;
        this.setData({
          isPlay: true
        })
      }
    }
  },
  attached() {
    audio.onPlay(() => {
      this.setData({
        isPlay: true
      })
    })
    audio.onPause(() => {
      this.setData({
        isPlay: false
      })
    })
    audio.onStop(()=>{
      this.setData({
        isPlay: false
      })
    })
    audio.onEnded(()=>{
      this.setData({
        isPlay: false
      })
    })
  }
})
