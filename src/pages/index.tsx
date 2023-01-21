import Link from 'next/link'
import styles from '../../styles/Home.module.css'

import { Button } from '@mui/material'

import CustomHead from '../components/customhead'
import CustomFooter from '../components/customfooter'

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead/>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Main Page
        </h1>

        <Link href="/login" passHref>
          <Button variant="contained" style={{textTransform: 'none'}}>
            Login
          </Button>
        </Link>

      </main>

      <CustomFooter/>
    </div>
  )
}
