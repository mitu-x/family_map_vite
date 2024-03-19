import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// const path = require('path')
//引入path用于写别名配置,自带无须安装


// https://vitejs.dev/config/

export default defineConfig({
    plugins: [vue()],
    resolve: {
        //别名配置
        alias: {
            '~': path.resolve(__dirname, './'),
            '@': path.resolve(__dirname, 'src')
        },
        //引入文件的时候，可以忽略掉以下文件后缀
        extensions: ['.js', '.mjs', '.vue', '.json', '.less', '.css', '.scss', '.sass', 'ts']
    },
    css: {
        //预处理器配置项
        preprocessorOptions: {
            less: {
                //支持直接使用表达式 width: 100px - 20px;得到值为width:80px;
                math: "always"
            }
        }
    },
    server: {
        proxy: {
            host: '0.0.0.0',
            '/api': {
                target: 'http://8.137.36.141:18888',
                changeOrigin: true,
                rewrite: (path) => {
                    console.log(path)
                    return path.replace(/^\/api/, '')
                }
            }
        }
    }


})
