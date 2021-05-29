import { useState } from 'react'
import CardList from '../../component/shop/cardList'
import styles from '../../styles/page.module.scss'

////////////Material UI//////////////
import { makeStyles,createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';



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
  const [prePageNum,setPrePageNum] = useState(0)

  const preDatas = prePageNum * 10
  const dataPerPage = 10


  const cardListShow = () => {
    const data = shopData.slice(preDatas,preDatas+dataPerPage)
    // console.log(typeof(data));
    return <CardList products={data}/>
  }

  const changePageHandler = (event,selectedPage) => {
    setPrePageNum(selectedPage-1)
  }

  ////////////Material UI Pagination Styles////////////
  const useStyles = makeStyles({
    root: {
      margin:'20px 0'
    }
  });
  const theme = createMuiTheme({
    palette: {
      primary: {
        main:grey[900]
      }
    },
  });
  const classes = useStyles();//paginationStyles
  ////////////////////////////////////////////////////

    return (
      <div>
        <h1 className={styles.title}>SHOP</h1>
        {cardListShow()}
        <Grid container justify = "center">
          <div className={classes.root}>
            <ThemeProvider theme={theme}>
              <Pagination
                className={classes.root}
                count={Math.ceil(shopData.length/dataPerPage)}
                page={prePageNum+1} 
                shape='rounded'
                onChange={changePageHandler}
                size='large'
                color='primary'
              />
            </ThemeProvider>
          </div>
        </Grid>
      </div>
    )
}

export default ShopPage
