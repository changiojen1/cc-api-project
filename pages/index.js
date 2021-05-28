import MenuContainer from '../component/home/MenuContainer'

export async function getServerSideProps(){
  const response = await fetch("https://dry-wave-60207.herokuapp.com/api/categories")
  const categories = await response.json()

  return{
    props:{
      categories
    }
  }
}

export default function Home(props) {

  return (
        <MenuContainer categories={props.categories} />
  )
}
