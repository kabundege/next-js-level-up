import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Fetcher } from '../helpers/Fetcher'
import styles from '../styles/landing.module.scss'

const base_url = 'https://api.unsplash.com/photos'

function HomePage({ photos }) {
  return (
    <div className='container'>
      <Header />
      <div className={styles.body}>
        <section className='h-100'>
          <h6>New Arrivals</h6>
          <h1> <span>a  collection  of </span> <br/>Art and Beaty <br/>  stories</h1>
          <button className='btn border-1 border-dark rounded-0'>
            Checkout
          </button>
        </section>
        <section>
          <div style={styles.imageWrapper}>
            <Image className={styles.image} src={require('../assets/images/IMG_8504.JPG')} />
          </div>
        </section>
      </div>
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const url = base_url + '?pages=1' + `&client_id=${process.env.unsplash_access_key}`
//   const response = await Fetcher(url,'GET',undefined)
//   return {
//     props : {
//       photos: response
//     }
//   }
// }

export default HomePage