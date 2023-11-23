import Btn from "../Btns/Btn";
import "./Entry.css"
import {useDispatch} from "react-redux";

const OpenRegistration = () => {

}

function ChooseEntry(){
  const dispatch = useDispatch()
  return(
    <div className="container choose-entry">
      <Btn text={"Регистрация"} backgroundColor={"#4D4DFF"} color={"#ffffff"}
           onClick={() => {dispatch({type: "REGISTRATION"})}}/>
      <Btn text={"Вход"} backgroundColor={"#4D4DFF"}
           color={"#ffffff"} onClick={() => {dispatch({type: "ENTRY"})}}/>
    </div>
  )
}

export default ChooseEntry