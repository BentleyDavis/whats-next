import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: "What's Next",
      short_name: 'whats-next',
      description: 'whats-next',
      theme_color: '#ffffff',
      shortcuts: [
        {
          name: "Checklist",
          short_name: "Checklist",
          description: "Checklist",
          url: "/",
          icons: [
            { src: "icons/checklist_icon_256.png", sizes: "256x256", type: "image/png" },
            { src: "icons/checklist_icon_512.png", sizes: "512x512", type: "image/png" },
          ]
        },
        {
          name: "Weather",
          short_name: "Weather",
          description: "Todays Hourly Weather",
          url: "/weather",
          icons: [
            { src: "icons/weather_icon_256.png", sizes: "256x256", type: "image/png" },
            { src: "icons/weather_icon_512.png", sizes: "512x512", type: "image/png" },
          ]
        },
      ],
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: 'index.html',
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  }),
  ],

  /* Custom */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  build: {
    rollupOptions: {
      onwarn: () => { },
    },
  },

})