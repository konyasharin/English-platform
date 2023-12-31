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
import Profile from "./Profile/Profile";
import {Provider} from "react-redux";
import store from "./store";
import BlackBg from "./Form/BlackBg";
import OpenAuth from "./Auth/OpenAuth";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
            <Route path="/profile" element={<Profile img={"/avatar.png"}/>}/>
          </Routes>
          <Footer/>
          <OpenAuth />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
