import SeccessRedux from '../views/SuccessRedux';
import React from 'react';
import { connect } from 'react-redux';

const SuccessReduxContainer = (props) => {
    
    return (
        <div>
            <SeccessRedux props={props} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    appReducer: state.appReducer
})



export default connect(mapStateToProps)(SuccessReduxContainer);