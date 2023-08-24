import cart from './assets/shoppingcart.svg';

const CartWidget = () => {
  return (
    <div>
      <img src={cart} alt='cart-widget' className='cart-img'/>
      0
    </div>
  );
};

export default CartWidget;