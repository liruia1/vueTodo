module.exports=(isDev)=>{
  return{
    preserveWhitepace: true,//去除模板中空白字符
    extractCSS: true, //是否将vue文件中css样式单独打包出来

  }
}