import {useState} from 'react'
import styles from './card.module.scss'

const card = ({price,name,catId,image}) => {
    const [cardHover, setCardHover] = useState(false)
    const hoverHandler = () =>{
        setCardHover(!cardHover)
    }

    const cat=["Hats","Jackets","Sneakers","Wemons","Mens"]

    return (
        <div>
            <div id={styles.make_3D_space}>
                <div 
                    id={styles.product_card} 
                    className={`${cardHover?styles.animate:""}`} 
                    onMouseEnter={hoverHandler} 
                    onMouseLeave={hoverHandler}
                >
                    <div id={styles.product_front}>
                        <div className={styles.shadow}></div>
                        <img src={image} alt="" />
                        <div className={styles.image_overlay}></div>
                        <div id={styles.view_details}>add to cart</div>
                        {/* <div className={styles.stats}> */}
                            <div className={styles.stats_container}>
                                <span className={styles.product_price}>{`$${price}`}</span>
                                <span className={styles.product_name}>{name}</span>    
                                <p>{cat[catId-1]}</p>                                            
                                
                                <div className={styles.product_options}>
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div className={styles.colors}>
                                        <div className={styles.c_blue}><span></span></div>
                                        <div className={styles.c_red}><span></span></div>
                                        <div className={styles.c_white}><span></span></div>
                                        <div className={styles.c_green}><span></span></div>
                                    </div>
                                </div>                       
                            </div>                         
                        {/* </div> */}
                    </div>
                </div>	
            </div>	
	        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> */}
        </div>
    )
}

export default card
