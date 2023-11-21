import Folder from "./Folder";
import "./Folders.css"
import Add from "./Add";

function Folders(){
  return(
    <section className="container folders">
      <Add class={"folder-add"} img={"icons/plus-orange.png"}/>
      <Folder class={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
      <Folder class={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
      <Folder class={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
      <Folder class={"folder"} img={"/icons/folder.png"} alt={"folder"} title={"test"}/>
    </section>
  )
}

export default Folders