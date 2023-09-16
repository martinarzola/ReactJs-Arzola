import Item from '../Item/Item'

const ItemList = ({products }) => {
    console.log(products);
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.name} {...prod} />)}
        </div>
    )
}

export default ItemList