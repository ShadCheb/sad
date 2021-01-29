const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  // Указываем, что приложение SPA
  mode: 'universal',
  // Для прода создается 2 сборки ES6 синтаксис и Legacy
  ...(!isDev && {
    modern: 'client'
  }),

  // Дефолтный head для страниц
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Tifity',
    meta: [
      { hid: 'description', name: 'description', content: 'Интернет-магазин' }
    ],
    link: [
      { rel: 'shortcut icon', href: 'favicon.ico' }
    ]
  },
  // Указываем корень проекта
  rootDir: __dirname,
  serverMiddleware: [
  ],
  // Отключаем Подрузку страниц, попавших в область видимости окна, сылок
  router: {
    middleware: ['resetBreadcrumbs'],
    prefetchLinks: false
  },
  // Бегущая полоска при загрузке страниц, вверху страницы
  loading: { color: '#ddd' },
  // Глобальные стили (подгружаемые на каждой странице)
  css: [
    // 'normalize.css',
    'ant-design-vue/dist/antd.css',
    './assets/style/global-styles.less',
  ],
  plugins: [
    { src: '~~/plugins/vue-lazy-load.js' },
    { src: '~~/plugins/ant-ui.js' },
    { src: '~~/plugins/vue-flickity.js', mode: 'client' },
  ],
  // Подключаем Nuxt модули (плагины)
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-trailingslash-module',
    'nuxt-webfontloader',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources',
    'nuxt-vuex-localstorage'
  ],

  // Конфиг для модуля nuxt-webfontloader
  webfontloader: {
    events: false,
    google: {
      families: ['Montserrat:300,400,500,600,800:cyrillic&display=swap']
    },
    timeout: 5000
  },
  // Конфиг для модуля @nuxtjs/style-resources
  styleResources: {
    // scss: ['./assets/scss/global-variables.scss'], // alternative: scss
    less: ['./assets/style/global-variables.less'],
    // stylus: []
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  vuexLocalstorage: {
    ...(isDev && {
      mode: 'debug'
    }),
    localStorage: ['cart']
  },
  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // compressor: false, // gzimp сжатие (можно использовать nginx)
    resourceHints: false, // предварительная загрузка по ссылке
    // etag: false, // кэширование файлов
    // static: {
    //   etag: false
    // }
  },
  /*
  ** Build configuration
  */
  build: {
    optimizeCss: false, // дефолтный оптимизатор стилей (используем nanocss)
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    // Отключаем для Разработки всю модификацию html
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    // разбиваем на независимые чанки все приложение
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    // Модификация js
    optimization: {
      minimize: !isDev
    },
    // Не выдавать во время разработки ложные предупреждения о найденных конфликтах и дубликатах
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true
      }
    }),
    // По умолчанию Babel трансплитирует весь код проекта но иногда нужно указывать явно
    transpile: ['vue-lazy-hydration', 'intersection-observer'],
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: ['advanced', {
              autoprefixer: false,
              cssDeclarationSorter: false,
              zindex: false,
              discardComments: {
                removeAll: true
              }
            }]
          }
        })
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true
        }
      }),

      order: 'cssnanoLast'
    },
    // Изменение webpack конфиг перехватывать loaders или ntcn
    extend (config, ctx) {
      // const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i';
      const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|webp)$/i';
      /*
      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader',
          options: {
            svgo: false
          }
        }
      ];
      */
      const imageMinPlugin = new ImageminPlugin({
        pngquant: {
          quality: '5-30',
          speed: 7,
          strip: true
        },
        jpegtran: {
          progressive: true
        },
        gifsicle: {
          interlaced: true
        },
        plugins: [
          imageminMozjpeg({
            quality: 70,
            progressive: true
          })

        ]
      })
      if (!ctx.isDev) config.plugins.push(imageMinPlugin)

      config.module.rules.forEach(rule => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: ctx.isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'
              }
            }
          ]
        }
      })
      /*
      // Create the custom SVG rule
      const svgRule = {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: vueSvgLoader
          },
          {
            resourceQuery: /data/,
            loader: 'url-loader'
          },
          {
            resourceQuery: /raw/,
            loader: 'raw-loader'
          },
          {
            loader: 'file-loader' // By default, always use file-loader
          }
        ]
      }

      config.module.rules.push(svgRule) // Actually add the rule
      */
    }
  }
}
