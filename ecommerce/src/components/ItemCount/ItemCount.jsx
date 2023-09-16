import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button id="ButtonMenos" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button id="ButtonMas" onClick={increment}>+</button>
            </div>
            <div>
                <button id="ButtonAgregar" onClick={() => onAdd(quantity)} disabled={!stock}>
                Añadir al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount