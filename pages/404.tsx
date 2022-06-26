import {useRouter} from 'next/router';
import {FC, useEffect} from 'react';
import Head from 'next/head';

const Error: FC = () => {
    const rout = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            rout.push('/')
        },2000)
    },[rout])


    return <div>
        <Head>
            <title>Error Page</title>
        </Head>
        <h1>Custom Error Handler</h1>
    </div>
}
export default Error