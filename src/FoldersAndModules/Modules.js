import Folder from "./Folder";
import Add from "./Add";

function Modules(){
  return(
    <section className="modules container">
      <Add class={"module-add"} img={"icons/plus-blue.png"}/>
      <Folder class={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder class={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder class={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
      <Folder class={"module"} img={"/icons/module.png"} alt={"module"} title={"test"}/>
    </section>
  )
}
export default Modules