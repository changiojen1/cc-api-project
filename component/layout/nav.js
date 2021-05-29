import Link from 'next/link'
import { useRef, useState ,useEffect } from 'react'
import styles from './nav.module.scss'
import Image from 'next/image'


let clickOutsideHandler=(handler)=>{
    let toggleRef = useRef()

    useEffect(() => {

        let runHandler=(event)=>{
            if(!toggleRef.current.contains(event.target)){
                handler();
            }
        }

        document.addEventListener("mousedown",runHandler)

        return () => {
         document.removeEventListener("mousedown",runHandler)
        }
    })

    return toggleRef
}

const nav = () => {
    const [catToggle,setCatToggle] = useState(false);
    const cToggle = () =>{
        setCatToggle(!catToggle)
    }
    const [menuToggle,setMenuToggle] = useState(false);
    const mToggle = () =>{
        setMenuToggle(!menuToggle)
    }

    let toggleRef=clickOutsideHandler( () => {
        setCatToggle(false)
    })

    return (
        <div className={styles.navbar}>
            <div className={styles.logo} > 
                <a href="/"><Image src="/favicon.svg" width={40} height={18}/>Crown Clothing</a>
            </div>
            <a href="#" className={styles.toggleBtn} onClick={()=>{mToggle()}}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </a>
            <div className={`${styles.navbar_links} ${menuToggle?styles.active:""}`}>
            {/* <div className="navbar_links active"> */}
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/shop"><a>Shop</a></Link></li>
                    <li><Link href="/shop/overview"><a>Overview</a></Link></li>
                    <li ref={toggleRef} onClick={cToggle} id={styles.navCat}>Category <span>></span>
                        <div className={`${styles.dropdown} ${catToggle?styles.catShow:""}`} >
                            <Link href="/shop/hats">
                                <a className={styles.ddItem}>
                                    <img src="/hat.png" width={40} height={40}/><span> Hats</span>
                                </a>
                            </Link>
                            <Link href="/shop/jackets">
                                <a className={styles.ddItem}>
                                    <img src="/jacket.png" width={40} height={40}/><span>Jackets</span>
                                </a>
                            </Link>
                            <Link href="/shop/sneakers">
                                <a className={styles.ddItem}>
                                    <img src="/sneaker.png" width={40} height={40}/><span>Sneakers</span>
                                </a>
                            </Link>
                            <Link href="/shop/womens">
                                <a className={styles.ddItem}>
                                    <img src="/women.png" width={40} height={40}/><span>Womens</span>
                                </a>
                            </Link>
                            <Link href="/shop/mens">
                                <a className={styles.ddItem}>
                                    <img src="/men.png" width={40} height={40}/><span>Mens</span>
                                </a>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default nav
