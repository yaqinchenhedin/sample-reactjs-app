import React from 'react';

/*
Chapter 12 React Forms
*/

/* form with select from dropdown list */

class FormWithSelect extends React.Component {
	constructor(props) {
		super(props); 
		
		this.state = {
			myCar: 'Volvo'
		}
	}
	
	myChangeHandler = (event) => {
		let value = event.target.value; 
		
		this.setState({myCar: value}); 
	}
	
	render() {
		return (
			<form>
				<h1>Your selected car: {this.state.myCar}</h1>
				<select value={this.state.myCar} onChange={this.myChangeHandler}>
					<option value="Ford">Ford</option>
					<option value="Volvo">Volvo</option>
					<option value="Fiat">Fiat</option>
				</select>
			</form>
		); 
	}
}

/* form with textarea */
class FormWithTextArea extends React.Component {
	constructor(props) {
		super(props); 
		
		this.state = {
			description: 'This content of a textarea goes in the value attribute'
		}
	}

	render() {
		return (
			<form>
				<textarea value={this.state.description} />
			</form>
		); 
	}
}

/* form with input fields and validation of input; submit button*/
class MyForm extends React.Component {
	constructor(props) {
		super(props); 
		
		this.state = {
			userNmae: '',
			age: null,
			errorMessage: ''
		}; 
	}
	
	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		let err = ''; 
		
		if(nam === 'age') {
			if(val != "" && !Number(val)) {
				err = <strong>Your age must be a number.</strong>;
			}
		}
		
		this.setState({errorMessage: err}); 
				
		/* to validate on fylling the form
		if(nam === "age") {
			if(!Number(val)) {
				alert("Your age must be a number."); 
			}
		}
		*/
		this.setState({[nam]: val}); 
	}
	
	mySubmitHandler = (event) => {
		event.preventDefault(); 
		
		let age = this.state.age; 
		
		if(!Number(age)) {
			alert("Your age must be a number!"); 
		}
	}
	
	render() {
		let header = ''; 
		
		if(this.state.userName) {
			header = <h1>Hello {this.state.userName} {this.state.age}</h1>
		} else {
			header = ''; 
		}
		return(
			<form onSubmit={this.mySubmitHandler}>			
				{header}
				<p>Enter your name: </p>
				<input 
					type='text'
					name='userName'
					onChange={this.myChangeHandler}
				/>
				
				<p>Enter your age: </p>
				<input 
					type='text'
					name='age'
					onChange={this.myChangeHandler}
				/>
				
				<input
					type="submit"					
				/>
				
				{this.state.errorMessage}
			</form>
		); 
	}
}
