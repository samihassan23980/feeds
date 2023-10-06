import logo from './logo.svg';
import './App.css';
import Feeds from './Components/Feeds';

function App() {
  const obj = {

    title:"9 Tips to Nail Your Social Media Profile Picture plus, research and examples",
    date:Date.now(),
    images:[ 'https://easetec.com.pk/wp-content/uploads/2023/01/WhatsApp-Image-2023-05-03-at-09.08.14-1.jpeg',
    'https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/h/p/hp_g160_-_gaming_mouse__myshop-pk-3.jpg'
],
    profilePic:"https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw",
    username:"Kashif"}
  return (
    <div className="App">
      <header className="App-header">
       
    <Feeds title={obj.title} images={obj.images} profilePic={obj.profilePic} username={obj.username}/>
      </header>
    </div>
  );
}

export default App;
