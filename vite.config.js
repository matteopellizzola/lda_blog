import { defineConfig, transformWithEsbuild, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig((mode) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        define: {
            "process.env": env,
        },
        build: {
            outDir: 'build',
        },
        plugins: [
            {
                name: 'treat-js-files-as-jsx',
                async transform(code, id) {
                    if (!id.match(/src\/.*\.js$/)) return null

                    // Use the exposed transform from vite, instead of directly
                    // transforming with esbuild
                    return transformWithEsbuild(code, id, {
                        loader: 'jsx',
                        jsx: 'automatic',
                    })
                },
            },
            react()],
        optimizeDeps: {
            force: true,
            esbuildOptions: {
                loader: {
                    '.js': 'jsx',
                },
            },
        },
    };
});