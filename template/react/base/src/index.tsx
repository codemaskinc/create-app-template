import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'

const container = document.getElementById('root') as HTMLDivElement
const root = ReactDOM.createRoot(container)

root.render(
    <App />
)
