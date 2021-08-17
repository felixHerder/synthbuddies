import React from "react";
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErroBoundry from '../components/ErrorBoundry';
import "./App.css";

import { requestRobots, setSearchField } from '../actions';

const mapStatetoProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const frobots = this.props.robots.filter((elem) => elem.name.toLowerCase().includes(this.props.searchField.toLowerCase()));

        return this.props.isPending ?
            <h1>Loading synths...</h1>
            :
            (<div className="tc">
                <Header />
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