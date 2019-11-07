import React,{PureComponent} from 'react';
import Header from './Header';
import Body from './Body';
import {bindActionCreators} from 'redux';
import {increaseCount, Dec } from '../actions/index';
import { connect } from 'react-redux';

class Home extends PureComponent {
  render() {
    return (
          <div>
            <Header />
            <Body />
          </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleIncrease: increaseCount,
  }, dispatch)
}
export default connect (mapStateToProps,mapDispatchToProps)(Home);