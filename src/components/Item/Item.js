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
  setCartIsOpen,
}) => {
  const [amount, setAmount] = useState(0);
  const [index, setIndex] = useState(0);
  const [activePicture, setActivePicture] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const discountedPrice = (price - (price * discount) / 100).toFixed(2);
  const bodyEl = document.body;

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  const changeActivePicture = (num) => {
    const lastIndex = images.length - 1;

    if (num === -1 && activePicture === 0) {
      setActivePicture(lastIndex);
      return;
    }

    if (num === 1 && activePicture === lastIndex) {
      setActivePicture(0);
      return;
    }

    setActivePicture(activePicture + num);
  };

  return (
    <article className='Item' onClick={() => setCartIsOpen(false)}>
      <div className='Item__pictures--mobile'>
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

      <div className='Item__pictures'>
        <div
          className='active-picture'
          onClick={() => {
            setLightboxIsOpen(true);
            bodyEl.style.overflow = 'hidden';
          }}
        >
          <img src={images[activePicture].picture} alt='' />
        </div>
        <div className='thumbnails'>
          {images.map((image, imageIndex) => {
            return (
              <div
                key={imageIndex}
                className={`${
                  activePicture === imageIndex
                    ? 'thumbnail active'
                    : 'thumbnail'
                }`}
                onClick={() => setActivePicture(imageIndex)}
              >
                <img src={image.thumbnail} alt='' key={imageIndex} />
              </div>
            );
          })}
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

        <div className='Item__info__buttons'>
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
                  thumbnail: images[0].thumbnail,
                };

                cart.map((item) => {
                  if (item.id === newItem.id) {
                    item.amount += newItem.amount;
                    item.totalPrice += newItem.totalPrice;
                    return item;
                  } else {
                    return newItem;
                  }
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
      </div>

      <div
        className={`${
          lightboxIsOpen ? 'Item__lightbox open' : 'Item__lightbox'
        }`}
        onClick={(e) => {
          if (e.target.classList.contains('Item__lightbox')) {
            setLightboxIsOpen(false);
            bodyEl.style.overflow = 'auto';
          }
        }}
      >
        <div className='active-picture'>
          <img src={images[activePicture].picture} alt='' />

          <div
            className='previousSlide'
            onClick={() => changeActivePicture(-1)}
          >
            <img src={iconPrevious} alt='previous' />
          </div>

          <div className='nextSlide' onClick={() => changeActivePicture(1)}>
            <img src={iconNext} alt='next' />
          </div>
        </div>
        <div className='thumbnails'>
          {images.map((image, imageIndex) => {
            return (
              <div
                key={imageIndex}
                className={`${
                  activePicture === imageIndex
                    ? 'thumbnail active'
                    : 'thumbnail'
                }`}
                onClick={() => setActivePicture(imageIndex)}
              >
                <img src={image.thumbnail} alt='' key={imageIndex} />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Item;
