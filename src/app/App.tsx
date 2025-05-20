import AppRouter from './providers/AppRouter'
import styles from './styles/index.module.scss'
function App() {

  return (
    <div className={styles.page__wrapper}>
      <AppRouter />
    </div>
  )
}

export default App
