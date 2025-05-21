import App from 'app/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/reset.scss'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'app/providers/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
