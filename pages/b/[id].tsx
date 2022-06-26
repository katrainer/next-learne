import {PostInfo} from '../../components/PostInfo/PostInfo';
import {usersApi} from '../api/hello';
import {GetStaticProps,GetStaticPaths} from 'next'

export const getStaticPaths:GetStaticPaths = async () => { //SSG способ получения данных, данные появляются когда мы делаем запрос за всеми постами и при клике на отдельный пост запрос на сервер не делается
    const res = await usersApi.getPosts()

    const paths = res.map(({id}) => ({
        params: {id: id.toString()},
    }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps:GetStaticProps = async (context) => {
    const {id} = context.params
    const res = await usersApi.getPost(id)

    if (!res) return {notFound: true}
    return {
        props: {post: res},
    }
}

const Post = ({post}) => {
    return <div>
        <PostInfo post={post}/>
    </div>
}

export default Post