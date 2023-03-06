import React from 'react';
import './Exercise4.css' 

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

function Exercise4()  {
    return (
        <>
            {/* <h1 style={{ color:'red', backgroundColor:'lightblue' }}>This is a header</h1> */}
            <h1 style={style_header}>This is a header</h1>
            <p className='para'>This is a paragraph</p>
            <a href="#">This is a link</a>
             <form>
                <p>This is a form</p>
                <label>Enter your name </label>
                <input type="text"/>
                <input type="submit" value="submit"/>
            </form>
            <img src="https://conteudo.imguol.com.br/c/esporte/37/2023/01/26/andrey-santos-durante-brasil-x-colombia-pelo-sul-americano-sub-20-1674765944799_v2_450x450.jpg.webp" alt="alt"/>
            <ul>
                <li>Cofee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul> 
        </>
    )
}

export default Exercise4;