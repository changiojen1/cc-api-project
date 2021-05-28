import Link from 'next/link'
import styles from './MenuItem.module.scss'

const MenuItem = ({imageUrl,title,size}) => {
    const linkUrl=`/shop/${title}`
  return (
    <div className={`${styles[size]} ${styles.menu_item}`}>
        <img src={imageUrl} alt="" className={styles.background_image} />
        <Link href={linkUrl}>
            <a className={styles.content}>
                <h1 className={styles.title}>{title.toUpperCase()}</h1>
                <span className={styles.subtitle} >SHOP NOW</span>
            </a>
        </Link>
    </div>
  )
}

export default MenuItem
