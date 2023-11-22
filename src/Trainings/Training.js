import Btn from "../Btns/Btn";

function Training(props){
  let styles = {
    block: {
      backgroundColor: props.backgroundColor
    }
  }
  return(
    <div className="training-block" style={styles.block}>
      <h3>{props.title}</h3>
      <span>{props.text}</span>
      <Btn text={"Начать тренировку"} backgroundColor={props.btnColor}/>
    </div>
  )
}

export default Training