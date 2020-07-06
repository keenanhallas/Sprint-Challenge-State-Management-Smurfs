import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
import SmurfCard from "./SmurfCard";

const SmurfList = ({smurfs, getSmurfs}) => {
    useEffect(() => {
        getSmurfs();
        console.log(smurfs);
    }, []); //is there a way to just call getSmurfs when you need the component to update?

    return (
        smurfs.map((smurf, i) => {
            return <SmurfCard smurf={smurf} key={i}/>
        })
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);