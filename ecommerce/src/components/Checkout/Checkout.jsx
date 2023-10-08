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


   /*  {const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'productos')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId('Ub8DsItjkuIqusOCbfiW'), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const ordenesRef = collection(db, 'ordenes')

                const orderAdd = await addDoc(ordenesRef, objOrder)

                setOrderId(orderAdd.id)
                clearCart()
            } else {
                console.error('Hay productos fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if(loading) {
        return <h1>Se está generando su orden...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    } }*/