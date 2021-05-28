import Card from './card'
import styles from './cardList.module.scss'

const CardList = ({products}) => {
    return (
        <div className={styles.cardList}>
            {products.map((prod)=>{
                return (
                    <Card 
                    key={prod.id} p
                    price={prod.price} 
                    catId={prod.cat_id} 
                    name={prod.name} 
                    image={prod.remote_url}
                    />
                ) 
            })}
        </div>
    )
}

export default CardList
