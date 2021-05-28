import styles from './MenuContainer.module.scss'
import MenuItem from './MenuItem'

const MenuContainer = ({categories}) => {

  return (
    <div className={styles.homepage}>
        <div className={styles.menuContainer_menu}>
            {categories.map((cat)=>{
              return <MenuItem key={cat.cid} title={cat.name} imageUrl={cat.remote_url} size={cat.size} />
            })}
        </div>
    </div>
  )
}

export default MenuContainer
