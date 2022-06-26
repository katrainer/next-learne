import s from './Navbar.module.scss'
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC} from 'react';

const navigation = [
    {id: 1, title: 'Users', path: '/a'},
    {id: 2, title: 'Posts', path: '/b'},
    {id: 3, title: 'C Page', path: '/b/c'},
]

export const Navbar: FC = () => {
    const {pathname} = useRouter()

    return <nav className={s.mainContainer}>
        {navigation.map(({id, title, path}) => <Link key={id} href={path}>
            <a className={pathname === path ? s.active : undefined}>{title}</a>
        </Link>)}
    </nav>
}