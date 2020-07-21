import React, { Component } from 'react';
import Pigeonburgh from './Pigeonburgh';

// Styling
import { GlobalStyle } from './styles';

class App extends Component {
	render() {
		return (
			<div>
				<GlobalStyle />
				<Pigeonburgh />
			</div>
		);
	}
}

export default App;
