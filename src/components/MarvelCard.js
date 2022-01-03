
import React, { useState } from 'react';

const styles = {
    tarjeta: {
        backgroundColor: 'gray',
        border: '4px solid black',
        height: '300px',
        width: '100%'
    },
    tarjetaVacia: {
        backgroundColor: 'gray',
        height: '300px',
        width: '100%',
        border: '5px solid black',
        margin: 'auto',
        display: 'bloc',

    },
    container: {
        backgroundColor: 'lightgray',
        border: '4px solid RGB(92,58,58)',
        width: '98%',
        height: '20%',
        margin: 'auto'
    },
    contenedorImg: {
        width: '100%',
        height: '78%',
        margin: 'auto'
    },
    img: {
        objectFit: 'cover',
        border: '3px solid white',
        height: '220px',
        width: '97%',
        display: 'block',
        margin: 'auto'
    },
    imgVacia:{
        height: '100%',
        width: '100%',
        display: 'block',
        objectFit: 'contain',
        margin: 'auto'
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
    };

    if(estatus.includes(id)){
        setTimeout(()=>setVisibilidad(false),1100);
    }




    return (
        <div>
            <div style={styles.tarjeta} hidden={!visibilidad}>
                    <div style={styles.contenedorImg}>
                        <img alt="notFound" src={img}  style={styles.img} />
                    </div>
                    <div style={styles.container}>
                        <h4 style={styles.titulo}>{name}</h4>
                    </div>
            </div>
            <div onClick={()=>{agregarCard(name,id); voltear()}} style={styles.tarjetaVacia} hidden={visibilidad}>
                <img alt="notFound" src='logo512.png' style={styles.imgVacia} />
            </div>
        </div>


    );
};


export default MarvelCard;