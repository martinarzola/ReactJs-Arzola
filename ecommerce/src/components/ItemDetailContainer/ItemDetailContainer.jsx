import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom' 
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = ({}) => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()
    console.log('itemId:', itemId)

    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then((response) => {
                if (response.exists()) {
                    const data = response.data()
                    setProduct(data)
                } else {
                    console.log('El producto no existe')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            {product ? (
                <ItemDetail {...product} />
            ) : (
                <p>No se encontró el producto</p>
            )}
        </div>
    )
}


export default ItemDetailContainer