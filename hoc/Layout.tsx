import {Navbar} from '../components/Navbar/Navbar';
import dog from '../public/dog.jpg'
import Image from 'next/image';
import {FC, ReactNode} from 'react';

type LayoutPropsType = {
    children: ReactNode
}

export const Layout: FC<LayoutPropsType> = ({children}) => <>
    <Navbar/>
    {children}
    <Image src={dog} alt='dog' height={300} width={300} placeholder="blur"/>
    <Image src={dog} alt='dog' width={500} height={500} />
    <div>__________</div>
</>

