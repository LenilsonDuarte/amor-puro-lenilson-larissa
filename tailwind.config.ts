import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sf': ['SF Pro Display', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
				'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
				'2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
				'5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
				'6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
				'7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
				'8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
				'9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				love: {
					DEFAULT: 'hsl(var(--love))',
					foreground: 'hsl(var(--love-foreground))'
				},
				secret: {
					DEFAULT: 'hsl(var(--secret))',
					foreground: 'hsl(var(--secret-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-mesh': 'var(--gradient-mesh)',
				'gradient-premium': 'var(--gradient-premium)',
			},
			boxShadow: {
				'premium': 'var(--shadow-premium)',
				'glow': 'var(--shadow-glow)',
			},
			backdropBlur: {
				'xs': '2px',
				'sm': '4px',
				'md': '8px',
				'lg': '16px',
				'xl': '24px',
				'2xl': '40px',
				'3xl': '64px',
			},
			animation: {
				'float-premium': 'float-premium 8s ease-in-out infinite',
				'heartbeat-premium': 'heartbeat-premium 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'shimmer': 'shimmer 2s linear infinite',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'float-premium': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(0.5deg)' },
					'50%': { transform: 'translateY(-20px) rotate(0deg)' },
					'75%': { transform: 'translateY(-10px) rotate(-0.5deg)' }
				},
				'heartbeat-premium': {
					'0%, 100%': { transform: 'scale(1)' },
					'25%': { transform: 'scale(1.05)' },
					'50%': { transform: 'scale(1.1)' },
					'75%': { transform: 'scale(1.05)' }
				},
				'glow': {
					'0%': { boxShadow: '0 0 20px hsl(var(--love) / 0.3)' },
					'100%': { boxShadow: '0 0 40px hsl(var(--love) / 0.6)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'float-premium': 'float-premium 8s ease-in-out infinite',
				'heartbeat-premium': 'heartbeat-premium 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'shimmer': 'shimmer 2s linear infinite',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
