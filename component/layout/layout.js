import Nav from './nav'
import Head from 'next/head'

const layout = (props) => {
    return (
        <div>
            <Head>
                <title>Buy All You Love </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Nav />
            <main>{props.children}</main>
        </div>
    )
}

export default layout
