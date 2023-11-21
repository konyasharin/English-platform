import './App.css';
import Refer from "./Header/Refer";
import './Header/Header.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Folders from "./FoldersAndModules/Folders";
import Modules from "./FoldersAndModules/Modules";
import ToMain from "./ToMain/ToMain";
import Trainings from "./Trainings/Trainings";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <section className="header container">
          <Refer text={"Тренировки"} img={"header/trainings.png"} alt={"trainings"} url={"trainings"}></Refer>
          <Refer text={"Папки"} img={"header/folders.png"} alt={"folders"} url={"folders"}></Refer>
          <Refer text={"Модули"} img={"header/modules.png"} alt={"modules"} url={"modules"}></Refer>
          <Refer text={"Профиль"} img={"header/profile.png"} alt={"profile"} url={"profile"}></Refer>
        </section>
        <ToMain/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/trainings" element={<Trainings />}/>
          <Route path="/folders" element={<Folders/>}/>
          <Route path="/modules" element={<Modules/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
