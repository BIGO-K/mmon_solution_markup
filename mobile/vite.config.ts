import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		tsconfigPaths()// resolve alias: tsconfig.json에서 설정
	],
	css: {
		devSourcemap: true
	}
});
