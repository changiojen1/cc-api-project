import Link from 'next/link'
import { useState } from 'react'
import styles from './nav.module.scss'
import Image from 'next/image'

const nav = () => {
    const [navLinkAct,setNavLinkAct] = useState(false);
    const toggle = () =>{
        setNavLinkAct(!navLinkAct)
    }
    
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}> 
                <a href="/"><Image src="/favicon.svg" width={40} height={18}/>Crown Clothing</a>
            </div>
            <a href="#" className={styles.toggleBtn} onClick={toggle}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </a>
            <div className={`${styles.navbar_links} ${navLinkAct?styles.active:''}`}>
            {/* <div className="navbar_links active"> */}
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/allproducts">All Products</Link></li>
                    <li><Link href="/overview">Overview</Link></li>
                    <li>Category
                        <div className={styles.dropdown}>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default nav
