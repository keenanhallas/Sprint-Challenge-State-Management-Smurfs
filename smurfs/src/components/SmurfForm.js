import React, { useState } from "react";
import { addSmurf } from "../actions";
import { connect } from "react-redux";

const SmurfForm = ({addSmurf}) => {
    const [formState, setFormState] = useState({
        name: "",
        age: undefined,
        height: ""
    });

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
        console.log(formState);
    }

    const handleSubmit = e => {
        e.preventDefault();
        addSmurf(formState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Smurf name:</label>
            <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={handleChange}
            />
            <label htmlFor="age">Smurf age:</label>
            <input
                type="number"
                name="age"
                id="age"
                value={formState.age}
                onChange={handleChange}
            />
            <label htmlFor="height">Smurf height:</label>
            <input
                type="text"
                name="height"
                id="height"
                value={formState.height}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {};
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);