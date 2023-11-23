import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function CheckAuth(){
  const login = useSelector(state => state.account.login),
        navigate = useNavigate(),
        dispatch = useDispatch()
  useEffect(() => {
    if(login === ""){
      dispatch({type: "CHOOSE_ENTRY"})
      document.querySelector(".bg-black").classList.remove("bg-black_disable")
      navigate("/")
    }
  })
}
export default CheckAuth