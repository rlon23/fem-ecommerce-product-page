import './Navbar.scss';
import logo from './../../images/logo.svg';
import cartLogo from './../../images/icon-cart.svg';
import hamburger from './../../images/icon-menu.svg';
import closeIcon from './../../images/icon-close.svg';
import { useState } from 'react';

function Navbar({ cartAmount, userPic }) {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  return (
    <nav className='Navbar'>
      <div
        className='Navbar__mobile-toggle'
        onClick={() => setMobileIsOpen(true)}
      >
        <img src={hamburger} alt='sneakers logo' />
      </div>
      <div className='Navbar__logo'>
        <img src={logo} alt='sneakers logo' />
      </div>
      <div className='Navbar__cart'>
        <img src={cartLogo} alt='cart icon' />
        <p className='cart-amount'>{cartAmount}</p>
      </div>
      <div className='Navbar__user'>
        <img src={userPic} alt='user' />
      </div>

      <div
        className={`${
          mobileIsOpen ? 'Navbar__mobile-menu open' : 'Navbar__mobile-menu'
        }`}
        onClick={(e) => {
          if (e.target.classList.contains('Navbar__mobile-menu')) {
            setMobileIsOpen(false);
          }
        }}
      >
        <ul className='Navbar__links'>
          <li className='close-mobile' onClick={() => setMobileIsOpen(false)}>
            <img src={closeIcon} alt='' className='close-icon' />
          </li>
          <li className='Navbar__link'>
            <a href='#Collections'>Collections</a>
          </li>
          <li className='Navbar__link'>
            <a href='#Men'>Men</a>
          </li>
          <li className='Navbar__link'>
            <a href='#Women'>Women</a>
          </li>
          <li className='Navbar__link'>
            <a href='#About'>About</a>
          </li>
          <li className='Navbar__link'>
            <a href='#Contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
