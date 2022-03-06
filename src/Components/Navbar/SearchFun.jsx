import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';
import styles from './SearchFun.module.css';

export default function SearchFun({word, setSearchOption}){
    let {setProduct} = useContext(ProductContext);
    const navigate = useNavigate();

    const showProduct = ( prod) => {
        setProduct(prod);
        navigate("/product");
    
       }
    let prodArr = ["beds","bed sheets", "bed linen", "sofa", "sofa cum bed", "furniture", "decore", "lighting", "cabinetry", "applainces"];

    prodArr= prodArr.filter( (prod) => prod.indexOf(word) > -1);

    if(word == ""){
        setSearchOption();
    }

    return(
        <div className={styles.cont}>
            <ul className={styles.rec}>
                {
                    prodArr.map( (ele) => (
                        <li onClick={() => showProduct(ele)}>{ele}</li>
                    ))
                }
            </ul>
        </div>

    )
}