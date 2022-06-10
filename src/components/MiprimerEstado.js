import React, {useState} from 'react'

export const MiprimerEstado = () => {

    /*
    let nombre = "jose Baltazar";

    const cambiarNombre = e =>{
        nombre = "Baltazar"
    }
        // el problema es que no cambia 

    */

    //useState devuelve un array 
    const [ nombre , setNombre ] = useState("jose mtz")

    const cambiarNombre = (e,nombreFijo) => {
        setNombre(nombreFijo);
        console.log(e.target);
    }



  return (

    <div>
        <h3> Componente : Primer estado</h3>
        <strong className="label">
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ e => cambiarNombre (e,"BAL")}>Cambiar nombre por bal </button>
        &nbsp;
        <input type="text" onChange={ e => cambiarNombre (e,e.target.value)} 
         placeholder="cambia le nombre"
         />

    </div>
  )
}
