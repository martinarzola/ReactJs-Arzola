import cart from './assets/shoppingcart.svg';

const CartWidget = () => {
  return (
    <div className='cart-info'>
      <img src={cart} alt='cart-widget' className='cart-img'/>
      0
    </div>
  );
};

export default CartWidget;