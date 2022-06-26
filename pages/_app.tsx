import '../styles/globals.scss'
import {Layout} from '../hoc/Layout.tsx'
import Head from 'next/head'
import '../styles/globals.scss'

const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;500;700&family=Fascinate&family=Inter:wght@400;700&display=swap"
                    rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
