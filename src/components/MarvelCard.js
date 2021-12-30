
import React, { useState } from 'react';

const styles = {
    tarjeta: {
        backgroundColor: 'gray',
        border: '5px solid black',
        margin: '10px',
    },
    tarjetaVacia: {
        backgroundColor: 'gray',
        border: '5px solid black',
        margin: '10px',
        height: '410px',
        display: 'bloc',
    },
    container: {
        padding: '2px 16px',
        backgroundColor: 'lightgray',
        border: '4px solid RGB(92,58,58)'
    },
    img: {
        height: '300px',
        width: '300px',
        display: 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'marginTop': '20px',
        'marginBottom': '5px',
        border: '3px solid white'
    },
    imgVacia:{
        height: '300px',
        width: '300px',
        display: 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'marginTop': '50px',
        'marginBottom': '5px',
    },
    titulo: {
        'textAlign': 'center'
    }
};

const MarvelCard = props => {
    const { img, name, id, estatus, now } = props;
    const [visibilidad,setVisibilidad] = useState(true);
    const agregarCard = props.onClickFunction;

    React.useEffect(() => {
        setTimeout(() => setVisibilidad(false), 2000);
      }, []);

    const voltear = () => {
        if(now==='not-blocked'){
           setVisibilidad(true);
        }
    }

    if(estatus.includes(id)){
        setTimeout(()=>setVisibilidad(false),1100);
    }

    return (
        <div>
            <div style={styles.tarjeta} hidden={!visibilidad}>
                <img alt="notFound" src={img}  style={styles.img} />
                <div style={styles.container}>
                    <h2 style={styles.titulo}>{name}</h2>
                </div>
            </div>
            <div onClick={()=>{agregarCard(name,id); voltear()}} style={styles.tarjetaVacia} hidden={visibilidad}>
                <img alt="notFound" src='logo512.png' style={styles.imgVacia} />
            </div>
        </div>


    );
};


export default MarvelCard;