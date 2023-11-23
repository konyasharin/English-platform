import Input from "../Input/Input";
import MainBtn from "../Btns/MainBtn";
import "./Profile.css"
import {useDispatch, useSelector} from "react-redux";
import CheckAuth from "../Auth/CheckAuth";
import {useState} from "react";

function Profile(props){
  const dispatch = useDispatch(),
        login = useSelector(state => state.account.login),
        editLogin = (event) => {
          dispatch({type: "EDIT_LOGIN", login: event.target.value})
        }

  return(
    <section className="container profile">
      <CheckAuth/>
      <img src={props.img} alt="avatar"/>
      <div>
        <Input placeholder={"Ваш логин"} value={login} edit={editLogin}/>
        <Input placeholder={"Ваш старый пароль"}/>
        <Input placeholder={"Ваш новый пароль"}/>
        <MainBtn text={"Изменить данные"}/>
      </div>
    </section>
  )
}

export default Profile