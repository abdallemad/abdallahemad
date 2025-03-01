import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary:'#8c0327',
				'primary-content':'#edd0d0',
				secondary:'#d85251',
				'secondary-content':'#110202',
				accent:'#d59b6a',
				'accent-content':'#100904',
				neutral:'#826a5c',
				'neutral-content':'#e5e0dc',
				'base-100':'#ffffff',
				'base-content':'#141414',
				'base-200':'#dbdbdb',
				'base-300':'#c5c5c5',
				'info':'#42adbb',
				'info-content':'#010b0d',
				success:'#499380',
				'success-content':'#020806',
				warning:'#e97f14',
				'warning-content':'#130600',
				error:'#d40014',
				'error-content':'#ffd4d1'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
