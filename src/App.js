import "./App.css";
import Testimonial from './components/Testimonial';
import reviews from './data';

function App() {
  return (
    <div className='app'>
      <div style={{textAlign :"center"}}>
        <h1 className='heading'>Our Testimonials</h1>
        <div className="blw-line"></div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
