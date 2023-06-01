import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Subheader from './components/Subheader'
import Counter from './components/Counter'
import LaserPointer from './components/LaserPointer'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header name="Jericho" /> */}
      {/* <Subheader /> */}
      {/* <Counter /> I maintain my own state. No other component knows my state */}
      {/* <Counter /> I do not know the other Counter's state */}
      {/* <input /> My text does not change regardless of the counter being in/decremented */}
      {/* <LaserPointer /> */}
      <TodoList />
    </main>
  )
}
