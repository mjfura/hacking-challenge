import Layout from '@/components/layouts'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Message from './components/Message'
import styles from './styles.module.scss'
export default function Feedback () {
  return (
        <Layout>
            <section className={styles.section} >
                <div className={styles.section__banner} >
                <Banner/>
                </div>
                <div className={styles.section__message} >
                <Message/>
                </div>
                <Footer/>
            </section>
        </Layout>
  )
}
