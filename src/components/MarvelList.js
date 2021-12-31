import React from 'react';
import MarvelCard from './MarvelCard';

import data from '../data/datos';



const styles = {
    grid: {
        display: 'grid',
        'gridGap': '50px',
        'gridTemplateColumns': '400px 400px 400px 400px',
        'justifyContent':'center',
        marginTop: '40px'
    }
};

const random = function(minimo,maximo,total){
    let rango = maximo - minimo + 1;
    let lista = [];

    if(rango<=total){
        for (let index = 0; index < rango; index++) {
            lista.push(index);
        }
    }else{
        for (let index = 0; index < total; index++) {
            let number = Math.floor(Math.random() * maximo);
            while(lista.includes(number)){
                number = Math.floor(Math.random() * maximo);
            }

            lista.push(number);
        }
    }

    return lista;
}

const getCharacters = function(cuantos,personajes){
    let arrayPersonajes = Object.values(personajes);
    let totalPersonajes = arrayPersonajes.length;
    const arrayPositions = random(0,totalPersonajes,cuantos);
    const result = arrayPositions.map(i => arrayPersonajes[i]);
    return result

}

const doubleCharacters = function(characters){
    const newCharacters = [ ...characters, ...characters ];
    return newCharacters;
}

const scramble = function(posiciones){
    let lista = [];
    for (let index = 0; index < posiciones; index++) {
        let number = Math.floor(Math.random() * posiciones);
            while(lista.includes(number)){
                number = Math.floor(Math.random() * posiciones);
            }
        lista.push(number);
    }
    return(lista);
}

const getStatus = function(elementos){
    if(elementos[0] === elementos[1]){
        return true
    }else{
        return false
    }
};

class MarvelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personajes: doubleCharacters(getCharacters(4,data.results)),
            posiciones: scramble(8),
            seleccion: [],
            idSeleccionados: [],
            usados:[],
            estatusJuego: [],
            now:'not-blocked',
            intentos: 0
        };
    }

    agregarCarta = async(nombre,id) => {
        if(!this.state.idSeleccionados.includes(id) & !this.state.usados.includes(id) & this.state.now==='not-blocked'){
            switch (this.state.seleccion.length) {
                case 0:
                    this.setState({
                        estatusJuego: []
                    })
                    this.state.seleccion.push(nombre);
                    this.state.idSeleccionados.push(id);
                    break;
                case 1:
                    this.state.seleccion.push(nombre);
                    this.state.idSeleccionados.push(id);
                    if(getStatus(this.state.seleccion)){
                        //ganaste
                        this.state.usados.push(this.state.idSeleccionados[0])
                        this.state.usados.push(this.state.idSeleccionados[1])
                        this.setState({
                            seleccion: [],
                            idSeleccionados: []
                        }); 
                    }else{
                    //elige de nuevo
                        if(this.props.intentos===1){
                            console.log('Game Over');
                            this.props.actualizar('lost')
                            this.props.usarIntento();
                        }else{
                            this.state.estatusJuego.push(...this.state.idSeleccionados)
                            setTimeout(()=>{this.setState({estatusJuego:[],now:'not-blocked'})},1000)
                            this.setState({
                                now:'blocked',
                                intentos: this.state.intentos+1,
                                seleccion: [],
                                idSeleccionados: []
                            });
                            this.props.usarIntento();
                        }    
                    }
                    break;

                default:
                    break;
            }
            if(this.state.usados.length === 8){
                console.log('Ganaste el juego, Felicidades!!')
                this.props.actualizar('won')
            }
        }
    }

    render() {
        return (
            <div style={styles.grid}>
                {this.state.posiciones.map(i => 
                            <MarvelCard
                                key = {i}
                                id = {i}
                                name = {this.state.personajes[i].name}
                                img = {this.state.personajes[i].thumbnail.path+"."+this.state.personajes[i].thumbnail.extension}
                                onClickFunction = {this.agregarCarta}
                                estatus = {this.state.estatusJuego}
                                now = {this.state.now}
                            />
                )}
            </div>
        );
    }
};
  

export default MarvelList;