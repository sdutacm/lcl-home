import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import CosPlugin0 from '@syyfe/vite-plugin-cos';

// @ts-ignore
const CosPlugin = CosPlugin0.default as typeof CosPlugin0;

function uploadFileToCos(isUpload: boolean) {
  if (!isUpload) {
    return;
  }
  if (!process.env.SECRET_ID || !process.env.SECRET_KEY) {
    console.log('No cos key, skip');
    return;
  }

  return CosPlugin({
    SecretId: process.env.SECRET_ID,
    SecretKey: process.env.SECRET_KEY,
    Region: 'ap-beijing',
    Bucket: 'sdutacm-1252277595',
    bucketName: '',
    remoteDir: 'lcl',
    from: 'build',
    excludesExtra: [],
  });
}

export default defineConfig({
  plugins: [sveltekit(), uploadFileToCos(process.env.NODE_ENV == 'production')],
});
