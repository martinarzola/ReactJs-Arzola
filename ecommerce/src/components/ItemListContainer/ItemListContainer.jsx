import { useState, useEffect } from 'react'

import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        let collectionRef = itemsCollection

        if (categoryId) {
            collectionRef = query(collectionRef, where('category', '==', categoryId))
        }

        getDocs(collectionRef)
            .then((snapshot) => {
                const productsAdapted = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProducts(productsAdapted)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1 className='greeting'>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
