import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

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
    const { query } = this.state;
    return (
      <form className={styles.search_form}>
        <input
          type="text"
          placeholder="Search images..."
          value={query}
          onChange={this.handleChange}
          autoComplete="off"
          onKeyPress={this.handleKey}
        />
      </form>
    );
  }
}
