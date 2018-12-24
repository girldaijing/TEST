// conponents/search/search.js
import { Keyword } from "../../models/keyword"
const keyword = new Keyword();
import { BookModel } from "../../models/book"
const bookModel = new BookModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    topMore: {
      type: Number,
      observer: "onPull"
    },
    bottomMore: {
      type: Number,
      observer: "onBottom"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    words: [],
    hots: [],
    books: [],
    isSearch: false,
    value: "",
    isResult: false,
    isLoading: false,
    isClear: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPull() {
      this.setData({
        books:[]
      });
      bookModel.getBookSearch(0,this.data.value).then(res=>{
        this.setData({
          books:res.books
        })
      })
    },
    onBottom() {
      var start = this.data.books.length;
      var value = this.data.value;
      bookModel.getBookSearch(0, value).then(res => {
        this.data.books.push(...res.books);
        this.setData({
          books: this.data.books,
        })
      })
    },
    Input() {
      this.setData({
        isClear: true
      })
    },
    onConfirm(event) {
      // wx.showLoading({
      //   title: "数据加载中"
      // });
      let value = event.detail.value;
      // 只有在服务器上能够搜索到的关键字才能添加到缓存
      bookModel.getBookSearch(0, value).then(res => {
        console.log(res)
        if (res.total) {
          keyword.addHistory(value)
          let words = keyword.getHistory()
          this.setData({
            words,
            books: res.books,
            isSearch: true,
            isResult: false,
            value,
            total: res.total
          })
          // wx.hideLoading();
        } else {
          wx.showToast({
            title: '抱歉，您搜索的页面不存在',
            icon: 'none'
          })
          this.setData({
            isSearch: true,
            isResult: true,
            value,
            books: []
          })
        }

      })
    },
    onCancel() {
      wx.switchTab({
        url: '/pages/books/books'
      });


    },
    onClear() {
      this.setData({
        isSearch: false,
        isResult: false,
        isClear: false,
        value: "",
        books: []
      })
    },
    onScroll() {
      this._loadmore();

    },
    _loadmore() {
      this.setData({
        isLoading: true,
      })
      var start = this.data.books.length;
      var value = this.data.value;
      if (start < this.data.total) {
        bookModel.getBookSearch(start, value).then(res => {
          let arr = this.data.books.concat(res.books)
          this.setData({
            isLoading: false,
            books: arr
          })
        })
      } else {
        this.setData({
          isLoading: false,
        })
      }
    }
  },

  attached() {

    this.setData({
      words: keyword.getHistory()
    })


    keyword.getHotData().then(res => {
      this.setData({
        hots: res.hot
      })

    })
  }
    
})
