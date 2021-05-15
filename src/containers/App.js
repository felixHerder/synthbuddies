import React from "react";
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from'../components/Scroll';
import ErroBoundry  from '../components/ErrorBoundry';
import "./App.css";



class App extends React.Component {
    constructor(){
        super();
        this.state =  {  
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(users =>this.setState({robots:users}));
    }

    OnSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const frobots = this.state.robots.filter((elem)=> elem.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
				
			return !this.state.robots.length ?
				<h1>Loading synths...</h1>
				:
				(<div className="tc">
					<h1  className='f2'>Synthfriends</h1>
					<Searchbox searchChange={this.OnSearchChange}/>
					<Scroll>
                        <ErroBoundry>
						    <Cardlist robots={frobots}/>
                        </ErroBoundry>
					</Scroll>
				</div>);
				
    }
}

export default App;