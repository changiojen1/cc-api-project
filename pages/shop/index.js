import { useState } from 'react'
import CardList from '../../component/cloth/cardList'
import styles from '../../styles/shop.module.scss'

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
  const [pageNumber,setPageNumber] = useState(0)

  const dataPerPage = 10
  const preDatas = pageNumber * 10


  const displayData = () => {
    const data = shopData.slice(preDatas,preDatas+dataPerPage)
    return <CardList products={data}/>
  }

  const changePageHandler = (event,newPage) => {
    setPageNumber(newPage-1)
  }

  ////////////Material UI Pagination Styles////////////
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(9),
        marginBottom: theme.spacing(9),
      },
    }
  }));
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
      <div className={styles.shopPage}>
        <h1>SHOP</h1>
        {displayData()}
        <Grid container justify = "center">
          <div className={classes.root}>
            <ThemeProvider theme={theme}>
              <Pagination
                className={classes.root}
                count={Math.ceil(shopData.length/dataPerPage)} 
                page={pageNumber+1} 
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
