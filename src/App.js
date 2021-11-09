import user from './images/image-avatar.png';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Item from './components/Item/Item';
import item_1_thumbnail from './../src/images/image-product-1-thumbnail.jpg';
import item_1_picture from './../src/images/image-product-1.jpg';
import item_2_thumbnail from './../src/images/image-product-2-thumbnail.jpg';
import item_2_picture from './../src/images/image-product-2.jpg';
import item_3_thumbnail from './../src/images/image-product-3-thumbnail.jpg';
import item_3_picture from './../src/images/image-product-3.jpg';
import item_4_thumbnail from './../src/images/image-product-4-thumbnail.jpg';
import item_4_picture from './../src/images/image-product-4.jpg';
import { useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const itemImages = [
    { picture: item_1_picture, thumbnail: item_1_thumbnail },
    { picture: item_2_picture, thumbnail: item_2_thumbnail },
    { picture: item_3_picture, thumbnail: item_3_thumbnail },
    { picture: item_4_picture, thumbnail: item_4_thumbnail },
  ];

  const [cart, setCart] = useState([]);

  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar cart={cart} userPic={user} />
      </header>
      <main className='App-main'>
        <Cart cart={cart} setCart={setCart} />
        <Item
          id={1}
          brand={'Sneaker Company'}
          name={'Fall Limited Edition Sneakers'}
          thumbnail={item_1_thumbnail}
          picture={item_1_picture}
          images={itemImages}
          description={
            'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.'
          }
          price={250.0}
          discount={50}
          setCart={setCart}
          cart={cart}
        />
      </main>
    </div>
  );
}

export default App;
