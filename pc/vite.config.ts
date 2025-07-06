import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default {
	plugins: [
		vue(),
		tsconfigPaths()
	],
	css: {
		devSourcemap: true
	},
	// resolve: {
	// 	alias: [// tsconfigPath로 tsconfig.json - paths로 설정
	// 		{ find: '@', replacement: '/src' },
	// 		{ find: '$', replacement: '/public' }
	// 	],
	// },
};