const autoPrefixer=require('autoprefixer')
//进一步优化我们的丛css文件
module.exports={
  Plugins:[
    autoPrefixer()//此插件主要是用来处理各个浏览器特殊样式的问题
  ]
}