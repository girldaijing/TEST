module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
        // 设计稿宽度的1/10
      "rootValue": 75,
      "propList":["*"]
    }
  }
};
