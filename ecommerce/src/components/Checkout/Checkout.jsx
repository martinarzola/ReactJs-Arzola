import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import { collection, getDocs, query, where, documentId, writeBatch, addDoc, Timestamp} from 'firebase/firestore'
import { db } from '../../main';
import { getFirestore } from 'firebase/firestore';

import CheckoutForm from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    function crearOrden(userData) {
        const db = getFirestore()
        const order = {
            buyer: {
                name: userData.name,
                phone: userData.phone,
                email: userData.email,
            }
        }

        const ordenesRef = collection(db, 'ordenes')
        addDoc(ordenesRef, order).then(result => setOrderId(result.id))
    }

    if(orderId) {
        return <h1 className='orden'>{'Gracias por tu compra, tu id de pedido es: ' + orderId}</h1>
    }


    return (
        <div>
            <h1 className='Label'>Checkout</h1>
            <CheckoutForm onConfirm={crearOrden}/>
        </div>
    )
}

export default Checkout