// component/music/index.js
const audio=wx.getBackgroundAudioManager();
Component({
  properties: {
      title:String, url:String
  },
  data: {
      isPlay:false
  },
  methods: {
    onMusic(){

      if(this.data.isPlay){
        this.setData({
          isPlay:false
        })
        audio.pause()
      }else{
        audio.title=this.properties.title;
        audio.src=this.properties.url;
        this.setData({
          isPlay:true
        })
      }

    }
  },

  attached(){
    audio.onPlay(()=>{
        this.setData({
          isPlay:true
        })
    })
    audio.onPause(()=>{
      this.setData({
        isPlay:false
      })
    })
    audio.onStop(()=>{
      this.setData({
        isPlay:false
      })
    })
    audio.onEnded(()=>{
      this.setData({
        isPlay:false
      })
    })
  }

})
