import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfList = ({smurfs, getSmurfs}) => {
    useEffect(() => {
        getSmurfs();
    }, [smurfs]);

    console.log(smurfs);
    return (
        <h2>This will be a list</h2>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);