import React from "react";

export const SmurfCard = ({smurf}) => {
    return (
        <div style={{border: "1px solid black", width: "75%", margin: "0 auto"}}>
            <h3>Name: {smurf.name}</h3>
            <h4>Age: {smurf.age} years old</h4>
            <h4>Height: {smurf.height}</h4>
        </div>
    );
}