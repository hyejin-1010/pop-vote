import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  devServer: {
    proxy: {
      '/CheckVoted': { 
        target: 'http://internal-ilb-1826088408.ap-northeast-2.elb.amazonaws.com',
        changeOrigin: true,
      }, 
    },
  },
});