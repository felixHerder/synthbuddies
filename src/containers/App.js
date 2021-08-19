import React from "react";
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../actions';
import MainPage from "../components/MainPage";

const mapStatetoProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {
    render() {
        return <MainPage {...this.props} />
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);