import "./Form.css"
const closeForm = (event) => {
  if(event.target.classList.contains("bg-black")){
    event.target.classList.toggle("bg-black_disable")
  }
}

function BlackBg(props){
  return(
    <div className="bg-black bg-black_disable" onClick={closeForm}>
      {props.form}
    </div>
  )
}
export default BlackBg