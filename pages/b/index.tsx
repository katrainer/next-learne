import Head from 'next/head';
import {usersApi} from '../api/hello';
import Link from 'next/link';
import {GetStaticProps} from 'next'

export const getStaticProps:GetStaticProps = async () =>{
    const res = await usersApi.getPosts()

    if (!res) return {notFound: true}
    return{
        props: {posts: res},
    }
}

const Posts=({posts}) => <div>
    <Head>
        <title>Posts</title>
    </Head>
    <h1>Posts</h1>
    <ul>{posts&&posts.map(p => <li key={p.id}>
        <Link href={`/b/${p.id}`}>{p.title}</Link>
    </li>)}</ul>
</div>

export default Posts