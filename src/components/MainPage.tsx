import React from "react";
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import Header from './Header';
import ErroBoundry from './ErrorBoundry';
import "./MainPage.css";

export interface IRobot {
  name: string;
  id: number;
  email: string;
}
interface IAppProps {
  searchField: string;
  robots: Array<IRobot>;
  isPending: boolean;
  onRequestRobots(): void;
  onSearchChange(): void;
}
interface IAppState {
  robots: Array<IRobot>;
  searchField: string;

}

class MainPage extends React.Component<IAppProps, IAppState> {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter((elem) => elem.name.toLowerCase().includes(this.props.searchField.toLowerCase()));
  }

  render(): JSX.Element {
    return this.props.isPending ?
      <h1>Loading synths...</h1>
      :
      (<div className="tc">
        <Header />
        <Searchbox searchChange={this.props.onSearchChange} />
        <Scroll>
          <ErroBoundry>
            <Cardlist robots={this.filterRobots()} />
          </ErroBoundry>
        </Scroll>
      </div>);
  }
}

export default MainPage;