import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Subheader from './components/Subheader'
import Counter from './components/Counter'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header name="Jericho" />
      <Subheader />
      <Counter /> {/* I maintain my own state. No other component knows my state */}
      <Counter /> {/* I do not know the other Counter's state */}
    </main>
  )
}
