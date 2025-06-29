import FullReload from 'vite-plugin-full-reload'
import autoprefixer from 'autoprefixer'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import handlebars from 'vite-plugin-handlebars'
import postcssCombine from 'postcss-combine-media-query'
import postcssPresetEnv from 'postcss-preset-env'
import { resolve } from 'path'
import serverConfig from './server.config.js'
import sortMediaQueries from 'postcss-sort-media-queries'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import pages from './pages.config.js'
import path from 'path'

const root = resolve(__dirname, 'src/')
const outDir = resolve(__dirname, 'docs')
dotenv.config({ path: resolve(__dirname, '.env') })

const pagesInput = {}

pages.forEach(page => {
  pagesInput[page.name] = page.path
})

export default defineConfig({
  base: '/',
  outDir: resolve(__dirname, 'docs'),
  preview: {
    port: 8000,
    strictPort: true,
  },
  envDir: path.resolve(__dirname, '../..'),
  server: serverConfig,
  publicDir: path.resolve(__dirname, './public'),
  plugins: [
    handlebars({
      reloadOnPartialChange: true,
      partialDirectory: resolve(__dirname, 'src/html/'),
      helpers: {
        eq: (a, b) => a === b,
        eqString: (a, b) => a.trim() === b.trim(),
        and: (a, b) => a && b,
        ifCond: function (v1, operator, v2, options) {
          switch (operator) {
            case '==':
              return v1 == v2 ? options.fn(this) : options.inverse(this)
            case '===':
              return v1 === v2 ? options.fn(this) : options.inverse(this)
            case '!=':
              return v1 != v2 ? options.fn(this) : options.inverse(this)
            case '<':
              return v1 < v2 ? options.fn(this) : options.inverse(this)
            case '<=':
              return v1 <= v2 ? options.fn(this) : options.inverse(this)
            case '>':
              return v1 > v2 ? options.fn(this) : options.inverse(this)
            case '>=':
              return v1 >= v2 ? options.fn(this) : options.inverse(this)
            default:
              return options.inverse(this)
          }
        },
      },
    }),
    FullReload('./**/*', { delay: 0 }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
              },
              cleanupIDs: {
                minify: false,
                remove: false,
              },
              convertPathData: false,
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 80,
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
      cache: false,
      cacheLocation: undefined,
    }),
    createHtmlPlugin({
      minify: true,
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      minifyCSS: true,
      minifyJS: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import', 'legacy-js-api'],
      },
    },
    postcss: {
      plugins: [autoprefixer(), postcssPresetEnv(), postcssCombine(), sortMediaQueries({ sort: 'desktop-first' })],
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000,
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true,
        unused: true,
        join_vars: true,
      },
      parse: {
        html5_comments: false,
        shebang: false,
      },
      format: {
        comments: false,
      },
      safari10: true,
    },
    rollupOptions: {
      input: {
        ...pagesInput,
      },
      output: {
        assetFileNames: ({ name }) => {
          name = name.toLowerCase()

          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/styles/[name]-[hash][extname]'
          }

          if (/\.js$/.test(name ?? '')) {
            return 'assets/js/[name]-[hash][extname]'
          }

          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': root,
    },
  },
})
