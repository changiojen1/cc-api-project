import CardList from '../../../component/shop/cardList'
import styles from '../../../styles/page.module.scss'


export async function getServerSideProps(){
    const response = await fetch("https://dry-wave-60207.herokuapp.com/api/shop/overview")
    const products = await response.json()
  
    return{
      props:{
        products
      }
    }
}

const Overview = (props) => {

    const data = props.products

    const showOverview = () => {
        const componentList = []
        for(let k in data){
            const slicedData = data[k].slice(0,5)
            componentList.push(
                <div>
                    <h1 className={styles.title}>
                        {k.charAt(0).toUpperCase()+k.slice(1)}
                    </h1>
                    <CardList products={slicedData}/>
                </div>
            )
                
        }
        return componentList
    }

    return (
        <div>
            {showOverview()}
        </div>
    )
}

export default Overview
