
// ES6 method to import React component intead of using the statement: "class SearchBar extends React.Component".
import React, { Component } from 'react';

// Using an ES6 class-based component (vs functional-based component), calling render function. Each class-based component has it's own "state" object - functional-based components do not have state. And every class-based component must have a defined render method. Know when to use either method.

// Class-based components are used with user events, changing data, etc. A functional component just takes in information and spits out JSX. A functional component can containg a a class-based component.

class SearchBar extends Component {
	// This is how state is initialized. All ES6 JS classes have a special function called constructor. Reserved for setup within a class. Component has it's own constructor methods like "super". 
	constructor(props) {
		// Calling the parent method with "super", which is then initialized by this.state, which specifying "term" (arbitry property name) to contain the state value.
		super(props);
        // this.state used ONLY inside the constructor method.
		this.state = { term: ''};
	}
    // render method
	render() {
		// onChange, setState etc, are React defined properties

		// input is now a controlled component, set by state. State is a plain JS object used to record and react to user events. Each class based component has it's own state object.	
		return ( 
		// JSX div returned	

		<div className="search-bar">
			<input
			  placeholder='Type here to search' 
			  // value statement indicates a controlled-component
			  value={this.state.term}
			  // declaring function with "fat arrow" ES6 syntax, instead of "function()" keyword. This is the event handler. The "this.setState" (NOT this.state - bad!) is the method used inside of all components.
			  // SHF: 3. Setting onChange event to call onInputChange function	
			  onChange={event => this.onInputChange(event.target.value)} />
		</div>
	);
  }
	// SHF: 4. Setting onInputChange function	
	  onInputChange(term) {
	  	this.setState({term});
	  	this.props.onSearchTermChange(term);
	  }
}

// export statement for import from index.js
export default SearchBar;