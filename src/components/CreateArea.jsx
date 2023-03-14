import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {

  const [isExpanded,setExpand]=useState(false);
  function Expand(){
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          onChange={props.changeFunc}
          name="title"
          placeholder="Title"
          value={props.inputItem.title}
        />}
        <textarea
          onChange={props.changeFunc}
          onClick={Expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"} 
          value={props.inputItem.content}
        />
        <Zoom in={isExpanded} ><Fab onClick={props.clickFunc} ><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
