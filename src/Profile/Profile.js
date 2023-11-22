import Input from "../Input/Input";
import MainBtn from "../Btns/MainBtn";
import "./Profile.css"
function Profile(props){
  return(
    <section className="container profile">
      <img src={props.img} alt="avatar"/>
      <div>
        <Input placeholder={"Ваш логин"}/>
        <Input placeholder={"Ваш старый пароль"}/>
        <Input placeholder={"Ваш новый пароль"}/>
        <MainBtn text={"Изменить данные"}/>
      </div>
    </section>
  )
}

export default Profile