

module.exports = {
   entry : "./index.js",
   output: {
      filename: "./bundle.js"
   },
   module: {
      rules: [ {
         test: /\.(js|jsx)$/,
         exclude: [ /node_modules/ ],
         use: {
            loader: "babel-loader",
            options: {
               presets: [ "react", "env" ]
            }
         },
      } ]
   }
}

/*
devServer: {
   open: true, // Автоматически открыть браузер после запуска webpack-dev-server
   openPage: "" // URL при открытии браузера (пустая строка соответствует "/index.html")
}
*/
