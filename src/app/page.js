import Image from 'next/image'
import styles from './page.module.css'

function Header({ name }) {
  return (
    <h1>{name}&apos;s TODO List</h1>
  )
}

function Subheader() {
  return (
    <h2>
      These are the GTD for the day
    </h2>
  )
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Header name="Jericho" />
      <Subheader />
    </main>
  )
}
