/** @type {import('vite').UserConfig} */
export default {
    build : {
        terserOptions: {
            compress: {
                drop_console: true
            }
        }
    }
  }