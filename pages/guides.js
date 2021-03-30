import { useContext } from 'react'
import AuthContext from '../stores/authContext'
import styles from '../styles/Guides.module.css'

export default function Guides() {
  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div> 
  )
}