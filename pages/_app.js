import '../styles/globals.css';

//router
import { useRouter } from 'next/router'

//framer motion
import { motion, AnimatePresence } from 'framer-motion'

//Components
import Layout from '../components/Layout';
import Transition from '../components/Transition'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>)
}

export default MyApp;
