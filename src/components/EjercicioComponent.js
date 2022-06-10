import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const EjercicioComponent = ({year}) => {

    const [yearNow , setYearNow] = useState(year);

    const siguiente = e => {
        setYearNow(yearNow+1) ;
    }

    const anterior = e => {
        let operacion = yearNow -1 ;
        setYearNow(operacion) ;
    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value);

        if(Number.isInteger(dato)){

            setYearNow(dato);

        }else{
            setYearNow(year) ;
        }
    }

    return (
    <div>
        <h2> Ejercicios con Eventos y UseState</h2>

        <h3> aqui se muestra el uso del props </h3>

        <strong className="label label-green">
         {yearNow}
        </strong>


        <p>
            <button onClick= {siguiente}> ir al siguiente</button>
            &nbsp;
            <button onClick= {anterior}> anterior</button>
        </p>

        <p>
                Cambiar Año:
                <input 
                onChange={cambiarYear } 
                type="text" 
                placeholder="Cambiar Año"
                 />
        </p>
    </div>
  )
}

EjercicioComponent.propTypes = {
year: PropTypes.number.isRequired

}