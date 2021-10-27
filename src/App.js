import user from './images/image-avatar.png';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Item from './components/Item/Item';
import item_1_thumbnail from './../src/images/image-product-1-thumbnail.jpg';
import item_1_picture from './../src/images/image-product-1.jpg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar cartAmount={3} userPic={user} />
        <main className='App-main'>
          <Item
            id={1}
            brand={'Sneaker Company'}
            name={'Fall Limited Edition Sneakers'}
            thumbnail={item_1_thumbnail}
            picture={item_1_picture}
            description={
              'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.'
            }
            price={250.0}
            discount={50}
          />
        </main>
      </header>
    </div>
  );
}

export default App;
