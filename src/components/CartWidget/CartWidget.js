import cart from './assets/cart.svg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="cart">
            <img className="carrito" src={cart} />
            2
        </div>
    )
}

export default CartWidget