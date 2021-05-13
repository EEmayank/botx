import img1 from './images/botx.png'
import img2 from './images/logo.svg'
import {useState} from 'react'
function App() {
  const [disp, setDisp] = useState({
    display:"none"
  })

  const handleClick = (val) => {
    if(!val) {
      setDisp({display:"flex"})
    }
    else{
      setDisp({display:"none"})
    }
  }
  return (
    <div className="body">
      <div className="container">
        
        <nav>
          <div className="menuicon" onClick={() => handleClick(0)}>
            <div className="bar bartop"></div>
            <div className="bar"></div>
            <div className="bar barbottom"></div>
          </div>
          <div className="logo-container">
          <img src={img2} alt="logo" />
          </div>
          <div className="menu-container" style={disp}>
            <div className="closeicon"  onClick={() => handleClick(1)} >
              <div className="bar1"></div>
              <div className="bar2"></div>
            </div>
            <div className="home menu-item">
              HOME
            </div>
            <div className="aboutUs menu-item">
              ABOUT US
            </div>
            <div className="service menu-item">
              SERVICES
            </div>
          </div>
        </nav>
      <div className="page1">
        <div className="left">
          <h1>GENERAL EDUCATION PLATFORM</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus voluptatem itaque mollitia inventore, officia, nobis ratione perferendis modi praesentium consequuntur, quo necessitatibus doloribus harum maxime eos accusantium debitis adipisci!</p>
          <button>GET STARTED</button>
        </div>
        <div className="right">
          <img src={img1} alt="botx" />
        </div>
      </div>
      <div className="page2">
        <div className="top">
          <h1>FOR STUDENTS</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi tempora consequuntur accusamus reprehenderit fugit voluptas repellat eaque, temporibus, libero fugiat maxime, ducimus in eveniet quis adipisci quibusdam nostrum pariatur! Ex.</p>
        </div>
        <div className="bottom">
          <div className="card">
            <h1>GRADE</h1>
            <hr />
            <h2>3-6</h2>
          </div>
          <div className="card">
            <h1>GRADE</h1>
            <hr />
            <h2>7-10</h2>
          </div>
          <div className="card">
            <h1>GRADE</h1>
            <hr />
            <h2>11-12</h2>
          </div>
        </div>
      </div>
      <div className="page3">
        <div className="top">
          <h1>FOR EDUCATOR</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus incidunt dolorem earum, deleniti modi rem ut alias expedita ipsam repellendus obcaecati odio perspiciatis ullam, voluptatibus facilis sequi itaque quae eligendi?</p>
        </div>
        <div className="bottom">
          <div className="card">
            <h1>ASPIRING STUDENTS</h1>
            <hr />
            <h1>THIS IS FOR THOSE COLLEGE STUDENTS WILLING TO GO BEYOND</h1>
          </div>
          <div className="card">
            <h1>ASPIRING ENTHUSIASTIC</h1>
            <hr />
            <h1>THIS IS FOR THOSE COLLEGE STUDENTS WILLING TO GO BEYOND</h1>
          </div>
        </div>
        
      </div>
      <footer>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum sint laborum velit reprehenderit voluptatem quibusdam quos deleniti earum consequuntur vitae laboriosam ipsa quidem, cupiditate quo praesentium. Repellat, perferendis asperiores.</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
