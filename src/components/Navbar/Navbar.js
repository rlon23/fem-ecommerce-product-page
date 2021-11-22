import './Navbar.scss';
import logo from './../../images/logo.svg';
import cartLogo from './../../images/icon-cart.svg';
import hamburger from './../../images/icon-menu.svg';
import closeIcon from './../../images/icon-close.svg';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Navbar = ({ ...props }) => {
  const links = ['collections', 'men', 'women', 'about', 'contact'];
  const { cart, userPic, cartIsOpen, setCartIsOpen, setCart } = props;
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(-1);
  const bodyEl = document.body;

  const cartAmount = cart.reduce((total, item) => {
    total += item.amount;
    return total;
  }, 0);

  return (
    <nav className='Navbar'>
      <Cart cart={cart} setCart={setCart} cartIsOpen={cartIsOpen} />
      <div
        className='Navbar__mobile-toggle'
        onClick={() => {
          setMobileIsOpen(true);
          bodyEl.style.overflow = 'hidden';
        }}
      >
        <img src={hamburger} alt='sneakers logo' />
      </div>

      <div className='Navbar__logo'>
        <img src={logo} alt='sneakers logo' />
      </div>

      <ul className='Navbar__links'>
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className={`${
                activeLink === index ? 'Navbar__link active' : 'Navbar__link'
              }`}
              onClick={() => {
                setActiveLink(index);
              }}
            >
              <a href={`#${link}`}>{link}</a>
            </li>
          );
        })}
      </ul>

      <div className='Navbar__cart' onClick={() => setCartIsOpen(!cartIsOpen)}>
        <img src={cartLogo} alt='cart icon' />
        <p className={`${cartAmount ? 'cart-amount hasItems' : 'cart-amount'}`}>
          {cartAmount}
        </p>
      </div>
      <div className='Navbar__user'>
        <img src={userPic} alt='user' />
      </div>

      <div
        className={`${
          mobileIsOpen
            ? 'mobile-menu-background open'
            : 'mobile-menu-background'
        }`}
      ></div>

      <div
        className={`${
          mobileIsOpen ? 'Navbar__mobile-menu open' : 'Navbar__mobile-menu'
        }`}
        onClick={(e) => {
          if (e.target.classList.contains('Navbar__mobile-menu')) {
            setMobileIsOpen(false);
            bodyEl.style.overflow = 'auto';
          }
        }}
      >
        <ul className='Navbar__links'>
          <li
            className='close-mobile'
            onClick={() => {
              setMobileIsOpen(false);
              bodyEl.style.overflow = 'auto';
            }}
          >
            <img src={closeIcon} alt='' className='close-icon' />
          </li>
          {links.map((link, index) => {
            return (
              <li key={index} className='Navbar__link'>
                <a href={`#${link}`}>{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
