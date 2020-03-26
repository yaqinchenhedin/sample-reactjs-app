import React from 'react';

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