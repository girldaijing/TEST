// conponents/music/index.js
const audio = wx.getBackgroundAudioManager();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    image: String,
    content: String,
    title: String,
    url: String
  },
  data: {
    isPlay: false
  },
  methods: {
    onMusic() {
      if (this.data.isPlay) {
        this.setData({
          isPlay: false
        })
        audio.pause()
      } else {
        audio.title = this.properties.title;
        audio.src = this.properties.url;
        this.setData({
          isPlay: true
        })
      }
    },
    _recoveryMusic() {
      if (audio.src == this.properties.url) {
        this.setData({
          isPlay: true
        })
      }
      if (audio.paused) {
        this.setData({
          isPlay: false
        })
      }
    },
    _momiterMusic() {
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
      audio.onStop(() => {
        this.setData({
          isPlay: false
        })
      })
      audio.onEnded(() => {
        this.setData({
          isPlay: false
        })
      })
    },
  },

  attached() {
    this._recoveryMusic();
    this._momiterMusic();

  }
})
