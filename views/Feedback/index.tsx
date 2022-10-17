import Layout from '@/components/layouts'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Message from './components/Message'
import styles from './styles.module.scss'
export default function Feedback () {
  return (
        <Layout>
            <section className={styles.section} >
                <Banner/>
                <Message/>
                <Footer/>
            </section>
        </Layout>
  )
}
