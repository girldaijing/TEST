//index.js
//获取应用实例
const app = getApp();

function getRandomColor () {
  let rgb = [];
  for (let i = 0 ; i < 3; i++){
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}
Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo');
  },
  inputValue: '',
    data: {
        src: '',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      },
      {
          text: '开始发送弹幕！！！！',
          color: '#ff2d51',
          time: 6
        }
    ]
    },
    //取到 敲进input输入框里的弹幕
    //并更新弹幕
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value;
  },
  //发送弹幕
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    });
  },
    videoErrorCallback: function(e) {
      console.log('视频错误信息:');
      console.log(e.detail.errMsg);
    }
})
