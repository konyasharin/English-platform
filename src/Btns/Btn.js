import "./Btn.css"
function Btn(props){
  let styles = {
    btn: {
      backgroundColor: props.backgroundColor
    }
  }
  return(
    <button style={styles.btn} className="btn">{props.text}</button>
  )
}

export default Btn