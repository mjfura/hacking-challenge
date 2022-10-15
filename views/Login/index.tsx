import Layout from '@/components/layouts'
import Banner from './components/Banner'
import LoginForm from './components/LoginForm'
import styles from './styles.module.scss'
export default function Login () {
  return (
    <Layout>
        <section className={styles.section} >
            <Banner/>
            <div className={styles.form} >
                <h2 className={styles.form__title} >Déjanos tus datos</h2>
            <LoginForm/>
            </div>
        </section>
    </Layout>
  )
}
