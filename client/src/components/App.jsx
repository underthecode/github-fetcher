import React from 'react';
import $ from 'jquery';
import Search from './Search.jsx';
import RepoList from './RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    $.get('/repos', data => {
      this.setState({ repos: data });
    });
  }

  search(term) {
    console.log(`${term} was searched`);
    $.post('/repos', { user: term }, () => {
      this.componentDidMount();
    });
  }

  render() {
    return (
      <div>
        <h1>GitHub Fetcher</h1>
        <Search onSearch={this.search.bind(this)} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}
export default App;
