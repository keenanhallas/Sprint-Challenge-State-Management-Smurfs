import React from "react";
import { deleteSmurf } from "../actions";
import { connect } from "react-redux";

const SmurfCard = ({smurf, deleteSmurf}) => {
    return (
        <div style={{border: "1px solid black", width: "75%", margin: "0 auto"}}>
            <h3>Name: {smurf.name}</h3>
            <h4>Age: {smurf.age} years old</h4>
            <h4>Height: {smurf.height}</h4>
            <button onClick={() => deleteSmurf(smurf)}>Delete smurf :(</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {};
}

export default connect(mapStateToProps, {deleteSmurf})(SmurfCard);


//can this take in props from the store via mapStateToProps, instead of being passed in during .map?
//is there a way to call connect without the empty mapStateToProps?