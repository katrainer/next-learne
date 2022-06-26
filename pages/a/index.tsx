import Head from 'next/head';
import {usersApi} from '../api/hello';
import Link from 'next/link';
import {GetStaticProps} from 'next';

export const getStaticProps: GetStaticProps = async () =>{
    const res = await usersApi.getUsers()

    if (!res) return {notFound: true}
    return{
        props: {users: res},
    }
}

const APage = ({users}) => {
    return <div>
        <Head>
            <title>Users</title>
        </Head>
        <h1>Users</h1>
        <ul>{users&&users.map(u => <li key={u.id}>
            <Link href={`/a/${u.id}`}>{u.name}</Link>
        </li>)}</ul>
    </div>
}

export default APage