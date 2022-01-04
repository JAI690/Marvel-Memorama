import React from 'react';

const styles = {
	main: {
		width: '80%',
		margin: 'auto',
		marginTop: '5%',
		marginBottom: '5%',
		padding: '20px'
	},
	boton: {
		margin: 'auto',
		width: '40%',
		border: '3px solid black',
		padding: '12px',
		marginLeft: '30%',
		backgroundColor: '#DE834D',
		fontSize: '20px',
		color: 'white',
		fontWeight: 'bold',
		borderRadius: '10px',

	},
	texto: {
		textAlign: 'center'
	}
}

const PlayAgain = props => {

	const changeBackground = (e) => {
		e.target.style.backgroundColor = '#A3423C';
		e.target.style.cursor = 'pointer';
	  }

	  const changeBackgroundOriginal = (e) => {
		e.target.style.backgroundColor = '#DE834D';
	  }
	return(
	<div style={styles.main}>
			<div 
			style={{ color: props.gameStatus === 'won' ? 'green' : 'red',  }}
			>
			<h1 style={styles.texto}>{props.gameStatus === 'won' ?  'Nice' : 'Game Over' }</h1>
			</div>
			<button onMouseOver={changeBackground} onMouseLeave={changeBackgroundOriginal}  style={styles.boton} onClick={props.onClick}>Play Again</button>
	</div>
	);
};

export default PlayAgain