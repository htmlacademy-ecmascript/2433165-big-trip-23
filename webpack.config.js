const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js", // Точка входа
  output: {
    filename: "bundle.[contenthash].js", // Имя бандла
    path: path.resolve(__dirname, "build"), // Директория для файлов сборки
    clean: true, // Удаляем предыдущую сборку перед созданием новой
  },
<<<<<<< HEAD
  devtool: 'source-map', // Генерируем карту исходного кода
<<<<<<< HEAD
  plugins: [ // Подключаем плагины
=======
=======
  devtool: "source-map", // Генерируем карту исходного кода
>>>>>>> parent of 7648bd0 (Выполнил 1.24)
  plugins: [
    // Подключаем плагины
>>>>>>> master
    new HtmlPlugin({
      template: "public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
  module: {
<<<<<<< HEAD
    rules: [ // Добавляем лоадеры
=======
    rules: [
      // Добавляем лоадеры
>>>>>>> master
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
<<<<<<< HEAD
<<<<<<< HEAD
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
=======
            presets: ['@babel/preset-env'],
=======
            presets: ["@babel/preset-env"],
>>>>>>> parent of 7648bd0 (Выполнил 1.24)
          },
        },
      },
    ],
  },
<<<<<<< HEAD
  resolve: {
    alias: {
      '@view': path.resolve(__dirname, 'src/view/'),
    },
  },
>>>>>>> master
};
=======
};
>>>>>>> parent of 7648bd0 (Выполнил 1.24)
