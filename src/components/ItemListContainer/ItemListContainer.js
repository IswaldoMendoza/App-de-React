import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from "react-router"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, SetError] = useState()
    const { categoryId } = useParams()
    console.log(categoryId);

    useEffect(() => {
        if(!categoryId) {
            getProducts().then(res => {
                console.log(res);
                setProducts(res)
            }).catch(error => {
                console.log(error);
                SetError(true)
            }).finally(() => {
                setLoading(false)
            });
        } else {
            getProductsByCategory(categoryId).then(res => {
                console.log(res);
                setProducts(res)
            }).catch(error => {
                console.log(error);
                SetError(true)
            }).finally(() => {
                setLoading(false)
            });
        }
    }, [categoryId])

    if(loading) {
        return <h3>Loading...</h3>
    }

    console.log(error);

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            {/* <ItemList products={products} /> */}

            <div className='item1'>
            <div className='flip-card'>
                <div className='flip-card-general'>
                    <div className='flip-card-frente'>
                        <div className="Hover">Read More >>> </div>
                        <img src='https://cdn-icons-png.flaticon.com/512/2797/2797843.png' alt={products.name}></img>
                    </div>
                    <div className='flip-card-detras'>
                        <span><ItemList products={products} /></span>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default ItemListContainer