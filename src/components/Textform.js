import React, {useState} from 'react'


export default function Textform(props) {
    

    const handleClickUp = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClickLow = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClickClear = () =>{
        let newText = "";
        setText(newText);
        
    }

    const onchangefunc = (event) =>{
        setText(event.target.value);

    }

    const [text, setText] = useState("Enter the default text");
    //text = "new text" wrong way to update the state
    //setText("blabla") correct way to update the text
    return (
        //jsx fragment
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea class="form-control" value={text} onChange = {onchangefunc} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleClickUp}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClickLow}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClickClear}>Clear Text</button>
        </div>
        
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        <div className="container my-3">
            <h1>Text Preview</h1>
            <p>{text}</p>
        </div>
        </>
    )
}
