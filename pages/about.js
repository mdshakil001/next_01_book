import Layout from '../components/Layout'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <Layout title='about page'>
            <Link href="/">Home</Link>
            <h2>about</h2>
            <h3>this is about page !</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto blanditiis numquam saepe alias? Recusandae nobis ea, ad sed facilis niis numquam saepe alias? Recusandae nobis ea, ad sed facilis natus neque odio officiis, ullam ab repellat possimus at animi! iis numquam saepe alias? Recusandae nobis ea, ad sed facilis natus neque odio officiis, ullam ab repellat possimus at animi! iis numquam saepe alias? Recusandae nobis ea, ad sed facilis natus neque odio officiis, ullam ab repellat possimus at animi! atus neque odio officiis, ullam ab repellat possimus at animi! Ab.</p>
        </Layout>
    )
}
