import React from "react";
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErroBoundry from '../components/ErrorBoundry';
import "./App.css";

import { setSearchField } from '../actions';

const mapStatetoProps = state => {
    return {
        searchField: state.searchField
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const frobots = this.state.robots.filter((elem) => elem.name.toLowerCase().includes(this.props.searchField.toLowerCase()));

        return !this.state.robots.length ?
            <h1>Loading synths...</h1>
            :
            (<div className="tc">
                <h1 className='f2'>Synthfriends</h1>
                <Searchbox searchChange={this.props.onSearchChange} />
                <Scroll>
                    <ErroBoundry>
                        <Cardlist robots={frobots} />
                    </ErroBoundry>
                </Scroll>
            </div>);
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);