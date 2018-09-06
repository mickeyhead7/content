import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEntries } from '@app/store/actions/entries';
import { entriesSelector } from '@app/store/reducers/entries';
import Ui from '@app/Components/EntryList/Ui';

class EntryList extends Component {
  componentDidMount () {
    this.props.fetchEntries();
  }

  render () {
    const { entries } = this.props;

    return (
      <Ui entries={entries} />
    );
  }
}

EntryList.propTypes = {
  entries: PropTypes.array.isRequired,
  fetchEntries: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  entries: entriesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchEntries: () => dispatch(fetchEntries())
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
