import { useState } from 'react'
import CardList from '../../component/cloth/cardList'
import styles from '../../styles/shop.module.scss'


export async function getServerSideProps(){
    const response = await fetch("https://dry-wave-60207.herokuapp.com/api/shop")
    const products = await response.json()
  
    return{
      props:{
        products
      }
    }
  }

const ShopPage = (props) => {
  const [shopData,setShopData] = useState(props.products)
  const [pageNumber,setPageNumber] = useState(2)

  const dataPerPage = 10
  const preDatas = pageNumber * 10


  const displayData = () => {
    const data = shopData.slice(preDatas,preDatas+dataPerPage)
    console.log(data);
    return <CardList products={data}/>
  } 


    return (
      <div className={styles.shopPage}>
        <h1>SHOP</h1>
        {displayData()}
      </div>
    )
}

export default ShopPage
