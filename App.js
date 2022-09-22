import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Links from "./components/Links"
import Footer from "./components/Footer"
import Aboutme from "./components/Aboutme"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Contacts from "./components/Contacts"
import Recommendations from "./components/Recommendations"
import Login from "./components/Login"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Links/>
      <Routes>
      <Route path="/" element={<Login/>}> </Route>
      <Route path="/Aboutme" element={<Aboutme/>}> </Route>
      <Route path="/Skills" element={<Skills/>}> </Route>
      <Route path="/Experience" element={<Experience/>}> </Route>
      <Route path="/Contactme" element={<Contacts/>}> </Route>
      <Route path="/Recommendations" element={<Recommendations/>}> </Route>
     
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
