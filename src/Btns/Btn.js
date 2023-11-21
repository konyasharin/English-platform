function Btn(props){
  let styles = {
    btn: {
      backgroundColor: props.backgroundColor
    }
  }
  return(
    <button style={styles.btn}>{props.text}</button>
  )
}

export default Btn