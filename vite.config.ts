import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [preact()],
    base: 'https://github.com/yuraKrampus2021/todo-react-ts',
})
