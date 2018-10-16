const path = require('path');

module.exports = {
  entry: './src/app/main.js',
  output: {
    path: path.join(__dirname, 'src/public/js'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ // use `include` vs `exclude` to white-list vs black-list
          path.resolve(__dirname, "src"), // white-list your app source files
          require.resolve("bootstrap-vue"), // white-list bootstrap-vue
         ],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader'
        } 
      }, 
      {
        test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
      }, 
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
        
      }
    ]
  },
  devServer: {
    port: 3000
  }
};
