import React from 'react'
import CardList from '../../component/cloth/cardList'


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
    return (
        <div>
            <CardList products={props.products}/>
        </div>
    )
}

export default ShopPage
