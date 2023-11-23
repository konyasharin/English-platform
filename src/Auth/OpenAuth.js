import {useSelector} from "react-redux";
import ChooseEntry from "../Entry/ChooseEntry";
import BlackBg from "../Form/BlackBg";
import Registration from "../Entry/Registration";
import Entry from "../Entry/Entry";

function OpenAuth(){
  let currentForm = null
  const form = useSelector(state => state.account.form)

  switch (form){
    case "choose":
      currentForm = <ChooseEntry />
      break
    case "registration":
      currentForm = <Registration />
      break
    case "entry":
      currentForm = <Entry />
      break
    default:
      currentForm = null
  }

  return(
    <BlackBg form={currentForm}>

    </BlackBg>
  )
}

export default OpenAuth