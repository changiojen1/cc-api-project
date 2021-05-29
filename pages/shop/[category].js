import {useRouter} from 'next/router'
import CardList from '../../component/shop/cardList'
import styles from '../../styles/page.module.scss'

const CategoryPage = (props) => {
    
    const router = useRouter()
    const title = router.query['category']
    const data=props.products

    return (
        <div className={styles.title}>
            <h1>{title.charAt(0).toUpperCase()+title.slice(1)}</h1>
            <CardList products={data} />
        </div>
    )
}

export async function getStaticPaths(){
    return{
      paths:[
          {params:{category:'hats'}},
          {params:{category:'jackets'}},
          {params:{category:'mens'}},
          {params:{category:'womens'}},
          {params:{category:'sneakers'}}
      ],
      
      fallback:false
    }
}

export async function getStaticProps({params}){
    
    const response = await fetch(`https://dry-wave-60207.herokuapp.com/api/shop/${params['category']}`)
    const products = await response.json()
  
    return{
      props:{
        products
      }
    }
}
// export async function getServerSideProps({params}){
    
//     const response = await fetch(`https://dry-wave-60207.herokuapp.com/api/shop/${params['category']}`)
    
//     if (!response.ok) {
//         return {
//           notFound: true,
//         }
//       }

//     const products = await response.json()
  
//     return{
//       props:{
//         products
//       }
//     }
// }


export default CategoryPage
