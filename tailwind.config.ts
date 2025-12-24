import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                teal: {
                    50: "#F6FEFF",
                    100: "#E0FBFE",
                    200: "#BAF9FD",
                    300: "#51F7ED",
                    400: "#1DE4DE",
                    500: "#11D3CD",
                    600: "#00A0A1",
                    700: "#057E80",
                    800: "#0E5053",
                    900: "#00191B",
                },
                slate: {
                    850: "#0E5053",
                    900: "#00191B",
                    950: "#00191B",
                },
                primary: {
                    DEFAULT: "#00191B",
                    foreground: "#1DE4DE",
                },
                secondary: {
                    DEFAULT: "#0E5053",
                    foreground: "#E0FBFE",
                },
                accent: {
                    DEFAULT: "#1DE4DE",
                    foreground: "#00191B",
                },
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
            }
        },
    },
    plugins: [],
} satisfies Config;
