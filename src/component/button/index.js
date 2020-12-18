import React from 'react';
import './index.styl';

function Button(props) {
    return (
        <button className={`btn  ${props.class}`} style={{ color:props.color , backgroundColor:props.backgroundColor , border: `1px solid ${props.borderColor}` }} onClick={props.handleClick} >
            <p>{props.title}</p>
        </button>
    );
  }
  
  export default Button;
  