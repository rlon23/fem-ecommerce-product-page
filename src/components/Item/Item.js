import './Item.scss';
import cartIcon from './../../images/icon-cart.svg';
import minusIcon from './../../images/icon-minus.svg';
import plusIcon from './../../images/icon-plus.svg';
import iconNext from './../../images/icon-next.svg';
import iconPrevious from './../../images/icon-previous.svg';
import { useEffect, useState } from 'react';

const Item = ({
  id,
  brand,
  name,
  description,
  price,
  discount,
  images,
  cart,
  setCart,
}) => {
  const [amount, setAmount] = useState(0);
  const [index, setIndex] = useState(0);
  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  return (
    <article className='Item'>
      <div className='Item__picture'>
        {images.map((item, itemIndex) => {
          let position = 'nextSlide';

          if (itemIndex === index) {
            position = 'activeSlide';
          }

          if (
            itemIndex === index - 1 ||
            (index === 0 && itemIndex === images.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <img
              key={itemIndex}
              className={`${position} image`}
              src={item.picture}
              alt='product'
            />
          );
        })}

        <div className='previousSlide' onClick={() => setIndex(index - 1)}>
          <img src={iconPrevious} alt='previous' />
        </div>
        <div className='nextSlide' onClick={() => setIndex(index + 1)}>
          <img src={iconNext} alt='next' />
        </div>
      </div>
      <div className='Item__info'>
        <p className='brand'>{brand}</p>
        <p className='name'>{name}</p>
        <p className='description'>{description}</p>

        <div className='prices-container'>
          <p className='discounted-price'>{`$${discountedPrice}`}</p>
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

        <button
          className='add-to-cart'
          onClick={() => {
            if (amount !== 0) {
              const newItem = {
                id: id,
                name: name,
                price: discountedPrice,
                totalPrice: discountedPrice * amount,
                amount: amount,
              };
              cart.map((item) => {
                if (item.id === newItem.id) {
                  item.amount += newItem.amount;
                  item.totalPrice += newItem.totalPrice;
                }
                return item;
              });
              setCart([...cart]);

              if (cart.length === 0) {
                setCart([...cart, newItem]);
              }
              setAmount(0);
            }
          }}
        >
          <img className='add-to-cart-icon' src={cartIcon} alt='cart' />
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default Item;
