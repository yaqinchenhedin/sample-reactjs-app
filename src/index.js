import React from 'react';
import ReactDOM from 'react-dom';

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


/*
Chapter 11 - React Events
*/

class FootBall_6 extends React.Component {
	shoot = (a,b) => {
		alert(b.type); 
	}
	
	render() {
		return (
			<button onClick={(ev) => this.shoot("Goal", ev)}>Take the shot!</button>
			
			/*<button onClick={this.shoot.bind(this,"GoalXX")}>Take the shot!</button>*/
		); 
	}
}

class FootBall_5 extends React.Component {
	shoot(a) {
		alert(a); 
	}
	
	render() {
		return (
			<button onClick={this.shoot.bind(this, "Goal_5")}>Take the shot!</button>
		); 
	}
}

class FootBall_4 extends React.Component {
	shoot = (a) => {
		alert(a); 
	}
	
	render() {
		return (
			<button onClick={() => this.shoot("Goal_4")}>Take the shot!</button>
		); 
	}
}

/*  regular function: using bind() to make this refers to the component that defines the function */
class FootBall_3 extends React.Component {
	constructor(props) {
		super(props); 
		this.shoot = this.shoot.bind(this); 
	}
	
	shoot() {
		alert(this); 
	}
	
	render() {
		return (
			<button onClick={this.shoot}> Take the shot!</button>
		); 
	} 
}


/* arrow function: this refers to the component that defines the function*/
class FootBall_2 extends React.Component {
	shoot = () => {
		alert(this); 
	}
	
	render() {
		return (
			<button onClick={this.shoot}> Take the shot!</button>
		); 
	} 
}

/*  regular function: this refers to the object that calls the function */
class FootBall extends React.Component {
	shoot() {
		alert("Great shot!"); 
	}
	
	render() {
		return (
			<button onClick={this.shoot}> Take the shot!</button>
		); 
	} 
}

class Container extends React.Component {
	constructor(props) {
		super(props); 
		
		this.state = {show: true}; 
	}
	
	delHeader = 
		() => {
			this.setState({show: false}); 
		}
		
	render() {
		let myHeader; 
		
		if(this.state.show) {
			myHeader = <Child />; 
		}; 
		
		return (
			<div>
				{myHeader}
				<button type="button" onClick={this.delHeader}>Delete Header</button>				
			</div>
		); 
	}
}

class Child extends React.Component {
	componentWillUnmount() {
		alert("The component named Header is about to be unmounted."); 
	}
	
	render() {
		return(
			<h1>Hellow world</h1>
		);		
	}	
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {favoriteColor: "red"}; 
	}
	
	componentDidMount() {
		setTimeout(
			() => {
				this.setState({favoriteColor: "purple"})
			}, 
			
			1000
		)
	}
	
	getSnapshotBeforeUpdate(prevProps, prevState) {
		document.getElementById("div1").innerHTML = "Before the update, the favorite color was " + prevState.favoriteColor; 
	}
	
	componentDidUpdate() {
		document.getElementById("div2").innerHTML = "The updated favorite color is " + this.state.favoriteColor; 
	}

	render() {
		return (
			<div>
				<h1>My favoriteColor is {this.state.favoriteColor}</h1>
				<div id="div1"></div>
				<div id="div2"></div>
			</div>
		); 
	}
}

class Car extends React.Component {
	constructor(props) {
		super(props); 
		
		this.state = {
			brand: "Ford",
			model: "Mustang",
			color: "red",
			year: 1964
		}; 
	}
	
	changeColor = () => {
		this.setState({color: "blue"}); 
	}
	
	render() {
		return (
			<div>
				<h1>My {this.state.brand}</h1>
				
				<p>
					It is a {this.state.color} 
					 {this.state.model} 
					 from {this.state.year}.
				</p>
				<button 
					type="button"
					onClick={this.changeColor}
				>
					Change color
				</button>
			</div>
		); 
	}
}

class Garage extends React.Component {
	
	render() {				
		return (
			<div>
				<h1> Who lives in my Garage? </h1>
				<Car />
			</div>
		); 
	}
}

ReactDOM.render(
	<FormWithSelect />,
	document.getElementById('root')
);


