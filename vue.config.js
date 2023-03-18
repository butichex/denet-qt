const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: true, 
  lintOnSave: false, 
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/main.scss";
        `
      }
    }
  }, 
  publicPath: process.env.NODE_ENV === "production" ? "/avito-qt/" : "/",
});
