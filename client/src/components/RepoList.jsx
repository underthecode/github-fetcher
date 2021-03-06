import React from 'react';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.repos);
    const repos = this.props.repos;
    const reposList = repos.map(repo => (
      <ul key={repo.repo_id}>
        <b>Repo {repo.repo_id}</b>
        <li>
          User: <a href={repo.repo_user_url}>{repo.repo_user}</a>
        </li>
        <li>
          Name: <a href={repo.repo_html_url}>{repo.repo_name}</a>
        </li>
        <li>Desc: {repo.repo_description}</li>
        <li>Stars: {repo.repo_stargazers_count}</li>
      </ul>
    ));

    return (
      <div>
        <h4> Repo List Component </h4>
        There are {this.props.repos.length} repos.
        <div>{reposList}</div>
      </div>
    );
  }
}

export default RepoList;
