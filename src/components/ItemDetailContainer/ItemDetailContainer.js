import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import { useParams } from 'react-router'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams();

    useEffect(() => {
        getProduct(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    console.log(fetch(''));
    console.log(product)

    if (loading) {
        return <h3>loading...</h3>
    }

    return (
        <div>
            <h1 className="tituloPpal">Detalle de producto</h1>
            {/* <ItemDetail {...product}/> */}
            <div className='tarjeta'>
                <h3 className='tituloTarjeta'>{product.name}</h3>
                <img src={product.img} alt={product.name}></img>
                <h3>${product.price}</h3>
                <h6>{product.description}</h6>
            </div>
            <div className='lateral'>
                <button className='action'>Comprar</button>
                <div className='detalle'>
                    <h3 className='stock1'>Stock</h3>
                    <h3 className='stock2'>{product.stock} Unidades</h3>
                </div>

            </div>
        </div>
    )
}

export default ItemDetailContainer