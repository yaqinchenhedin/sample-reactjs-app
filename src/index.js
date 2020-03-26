import React from 'react';
import ReactDOM from 'react-dom';

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
	<Garage />,
	document.getElementById('root')
);


