import './view-styles';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash/object';

class AppView extends Component {
    static propTypes = {
        appName: PropTypes.string,
        children: PropTypes.any
    }

    render(){
        const { appName } = this.props;
        return (
            <div className="view view--app">
                <h1>{appName}</h1>
            </div>
        );
    }
}

AppView.defaultProps = {
    appName: '',
    children: []
};

export default connect(state => ({
    appName: get(state, 'app.name')
}))(AppView)