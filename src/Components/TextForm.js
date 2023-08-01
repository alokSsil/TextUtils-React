import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("upercase was clik"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to UpperCase","success")
      }
      const handleCopy = () =>{
        console.log("i am copy");
        var text= document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text coppied","success")
      }
      const handleLoClick = () =>{
        // console.log("upercase was clik"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to LowerCase","success")
    }
    
    const handleExtraSpaces = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("remove extraSpace","success")
    }
    const handleOnChange = (event) =>{
        // console.log("handle on change");
        setText(event.target.value)

    }
    const handleClear = () =>{
        // console.log("handle on change");
        let newText="";
        setText(newText);
        props.showAlert("Text cleared","success")

    }
    const [text, setText] = useState(' ')
    // text="new text"; //wrong way to change the state
    // setText=("new text"); //correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea onChange={handleOnChange} className="form-control" value={text} id="myBox" rows="8"></textarea>
      </div>
      <button  className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button  className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button  className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
      <button  className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button  className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words,{text.length} charcacters</p>
      <p>{0.008 * text.split(" ").length} minutes to use for read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
