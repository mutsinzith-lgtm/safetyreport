import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { navy: '#10243A', teal: '#087E8B' } } }, plugins: [] };
export default config;
