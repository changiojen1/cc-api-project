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
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/shop/overview">Overview</Link></li>
                    <li ref={toggleRef} onClick={cToggle} id={styles.navCat}>Category <span>></span>
                        <div className={`${styles.dropdown} ${catToggle?styles.catShow:""}`} >
                            <a className={styles.ddItem} href="/shop/hats">
                                <img src="/hat.png" width={40} height={40}/><span> Hats</span>
                            </a>
                            <a className={styles.ddItem} href="/shop/jackets">
                                <img src="/jacket.png" width={40} height={40}/><span>Jackets</span>
                            </a>
                            <a className={styles.ddItem} href="/shop/sneakers">
                                <img src="/sneaker.png" width={40} height={40}/><span>Sneakers</span>
                            </a>
                            <a className={styles.ddItem} href="/shop/womens">
                                <img src="/women.png" width={40} height={40}/><span>Womens</span>
                            </a>
                            <a className={styles.ddItem} href="/shop/mens">
                                <img src="/men.png" width={40} height={40}/><span>Mens</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default nav
