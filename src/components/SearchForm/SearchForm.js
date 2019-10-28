/*eslint-disable*/
import React, { Component } from 'react';
import styles from '../SearchForm/SearchForm.module.css';
export default class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };
  handleKey = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.onSearch(this.state.query);
      this.setState({ query: '' });
    }
  };
  render() {
    return (
      <form className={styles.search_form} onKeyPress={this.handleKey}>
        <input
          type="text"
          placeholder="Search images..."
          value={this.state.query}
          onChange={this.handleChange}
          autoComplete="off"
        />
      </form>
    );
  }
}
