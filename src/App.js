
import img2 from './images/logo.svg'
import Home from './components/home'
import Login from './components/login'
import {useState, useRef, useLayoutEffect, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const getStyle = useRef();
  const [disp, setDisp] = useState({
    display:"flex"
  })
  const [scroll, setScroll] = useState({
    position:"initial"
  })
  const [animated, setAnimated] = useState("")

  function handleResize () {
    if(window.innerWidth > 550){
      setDisp({display:"flex"});
    }
    else{
      setDisp({display:"none"});
    }
  }
  useEffect (()=> {
    handleResize()
    window.addEventListener("resize", handleResize)
  },[])
  


  const handleClick = (open, from="notPhone") => {
    if(window.innerWidth <=550){
      if(open) {
        setDisp({display:"flex"})
        setScroll({overflowY:"hidden"});
        setAnimated("animated")
      }
      else{
        setDisp({display:"none"})
        setScroll({overflowY:"scroll"});
        setAnimated("")
      }
    }
  }
  return (
    <Router>
        <div className="body"style={scroll}>
        <div className="container" style={scroll}>
          
          <nav>
            <div className="menuicon" onClick={() => handleClick(true,  "phone")}>
              <div className="bar bartop"></div>
              <div className="bar"></div>
              <div className="bar barbottom"></div>
            </div>
            <div className="logo-container">
            <img src={img2} alt="logo" />
            </div>
            
            <div className={`menu-container ${animated}`} ref={getStyle} style={disp}>
              <div className="closeicon"  onClick={() => handleClick(false, "phone")} >
                <div className="bar1"></div>
                <div className="bar2"></div>
              </div>
              <div className="home menu-item">
                <Link to="/" onClick={()=>handleClick(false)}>HOME</Link>
              </div>
              <div className="aboutUs menu-item">
                <Link to="/about" onClick={()=>handleClick(false)}>ABOUT US</Link>
              </div>
              <div className="service menu-item">
                <Link to="/services" onClick={()=>handleClick(false)}>SERVICES</Link>
              </div>
              <div className="service menu-item">
                <Link to="/login" onClick={()=>handleClick(false)}>LOG IN</Link>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
