import Head from 'next/head';
import {UserInfo} from '../../components/UserInfo/UserInfo';
import {usersApi} from '../api/hello';
import {GetServerSideProps } from 'next'

export const getServerSideProps:GetServerSideProps = async (context) =>{ //SSR способ получения данных, при каждом переходе на нового юзера будет делаться новый запрос на сервер
    const {id}= context.params
    const res = await usersApi.getUser(id)

    if (!res) return {notFound: true}
    return{
        props: {user: res},
    }
}

const User = ({user}) => {
    return <div>
        <Head>
            <title>User</title>
        </Head>
        <UserInfo user={user}/>
    </div>
}
export default User