import './Item.scss';
import cartIcon from './../../images/icon-cart.svg';
import minusIcon from './../../images/icon-minus.svg';
import plusIcon from './../../images/icon-plus.svg';
import { useState } from 'react';

const Item = ({
  id,
  brand,
  name,
  thumbnail,
  picture,
  description,
  price,
  discount,
}) => {
  const [amount, setAmount] = useState(0);

  return (
    <article className='Item'>
      <div className='Item__picture'>
        <img className='image' src={picture} alt='product' />
      </div>
      <div className='Item__info'>
        <p className='brand'>{brand}</p>
        <p className='name'>{name}</p>
        <p className='description'>{description}</p>

        <div className='prices-container'>
          <p className='discounted-price'>{`$${(
            price -
            (price * discount) / 100
          ).toFixed(2)}`}</p>
          <p className='discount'>{`${discount}%`}</p>
          <p className='full-price'>{`$${price.toFixed(2)}`}</p>
        </div>

        <div className='toggle-amount'>
          <img
            className='decrease'
            onClick={() => {
              if (amount > 0) {
                setAmount(amount - 1);
              }
            }}
            src={minusIcon}
            alt='decrease'
          />
          <p className='amount'>{amount}</p>
          <img
            className='increase'
            onClick={() => setAmount(amount + 1)}
            src={plusIcon}
            alt='increase'
          />
        </div>

        <button className='add-to-cart'>
          <img className='add-to-cart-icon' src={cartIcon} alt='cart' />
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default Item;
