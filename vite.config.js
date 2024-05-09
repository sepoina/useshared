/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// Determina se il processo è per la costruzione della libreria
const isLibraryBuild = process.env.BUILD_LIB === 'true';

// Configurazione per la costruzione della libreria
function LibraryBuild() {
  return {
    plugins: [react(), nodeResolve()],
    build: {
      outDir: './dist-Library',  // Specifica la directory di output personalizzata
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, "src/useShared/index.jsx"),
        name: "@sepoina/useshared",
        // fileName: (format) => `index.${format}.js`,
        fileName: 'index',
        formats:  ['es'],  // Specifica il formato ESM
      },
      rollupOptions: {
        external: ["react", "react-dom","react/jsx-runtime"],
        output: {
          globals: {
            "react": "React",
            "react-dom": "ReactDOM",
            'react/jsx-runtime': 'react/jsx-runtime',
          },
        },
      },
    }
  };
}

// Configurazione per lo sviluppo (demo)
function DemoPlay() {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@sepoina/useshared': resolve(__dirname, 'dist-Library') // testa la libreria compilata
        // '@sepoina/useshared': resolve(__dirname, 'src/useShared') // testa il sorgente originale
      }
    }
  };
}

// Utilizza la configurazione appropriata in base al contesto
export default defineConfig(isLibraryBuild ? LibraryBuild() : DemoPlay());