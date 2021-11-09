import './Cart.scss';
import deleteIcon from './../../images/icon-delete.svg';

const Cart = ({ cart, setCart, cartIsOpen }) => {
  if (cart.length) {
    return (
      <section className={`${cartIsOpen ? 'Cart open' : 'Cart'}`}>
        <div className='Cart__content'>
          <h3 className='Cart__title'>Cart </h3>
          <div className='Cart__items'>
            {cart.map((item) => {
              return (
                <div className='Cart__item' key={item.name}>
                  <div className='Cart__item-thumbnail'>
                    <img src={item.thumbnail} alt='' />
                  </div>
                  <div className='Cart__item-info'>
                    <p className='name'>{`${item.name.substring(0, 22)}...`}</p>
                    <div className='prices'>
                      <p className='price'>{`$${item.price} x ${item.amount}`}</p>
                      <p className='totalPrice'>
                        {`$${item.totalPrice.toFixed(2)}`}
                      </p>
                    </div>
                  </div>
                  <div className='deleteItem' onClick={() => setCart([])}>
                    <img src={deleteIcon} alt='delete item' />
                  </div>
                </div>
              );
            })}
            <button className='Cart__checkout'>Checktout</button>
          </div>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className={`${cartIsOpen ? 'Cart open' : 'Cart'}`}>
        <div className='Cart__content'>
          <h3 className='Cart__title'>Cart </h3>
          <p className='Cart__empty'>Your cart is empty.</p>
        </div>
      </section>
    );
  }
};

export default Cart;
