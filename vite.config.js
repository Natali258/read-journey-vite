import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/read-journey-vite/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  server: {
    open: true,
  },
});

// export default defineConfig({
//   base: '/read-journey-vite/',
//   plugins: [
//     react({
//       babel: {
//         plugins: [['babel-plugin-react-compiler']],
//       },
//       server: {
//         open: true
//       }
//     }),
    
//   ],
// })
