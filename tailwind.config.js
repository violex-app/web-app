import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin';
import { violex } from './src/violex'
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					violex,
				],
			},
		}),
	],
};
