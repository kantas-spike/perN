const { tones } = require('./lib/color_system')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        tones: {
          ...tones
        },
        primary: {
          DEFAULT: tones.P_40,
          container: tones.P_90,
        },
        secondary: {
          DEFAULT: tones.S_40,
          container: tones.S_90,
        },
        tertiary: {
          DEFAULT: tones.T_40,
          container: tones.T_90,
        },
        error: {
          DEFAULT: tones.E_40,
          container: tones.E_90,
        },
        surface: {
          dim: tones.N_87,
          DEFAULT: tones.N_98,
          bright: tones.N_98,
          container: {
            lowest: tones.N_100,
            low: tones.N_96,
            DEFAULT: tones.N_94,
            high: tones.N_92,
            highest: tones.N_90,
          }
        },
        outline: {
          DEFAULT: tones.NV_50,
          variant: tones.NV_80,
        },
        inverse: {
          primary: tones.P_80,
          surface: tones.N_20
        },
        background: {
          DEFAULT: tones.N_98,
        },
        shadow: {
          DEFAULT: tones.N_0,
        },
        surface_tint: {
          DEFAULT: tones.P_40,
        },
        scrim: {
          DEFAULT: tones.N_0,
        },
        on: {
          primary: {
            DEFAULT: tones.P_100,
            container: tones.P_10,
          },
          secondary: {
            DEFAULT: tones.S_100,
            container: tones.S_10,
          },
          tertiary: {
            DEFAULT: tones.T_100,
            container: tones.T_10,
          },
          error: {
            DEFAULT: tones.E_100,
            container: tones.E_10,
          },
          surface: {
            DEFAULT: tones.N_10,
            variant: tones.NV_30,
          },
          inverse: {
            surface: tones.N_95,
          },
          background: {
            DEFAULT: tones.N_10,
          }
        }
      }
    },
  },
  plugins: [],
}
