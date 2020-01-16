import React from 'react';

import './App.css';
import Container from "reactstrap/es/Container";

import Jumbotron from "reactstrap/es/Jumbotron";
import Table from "reactstrap/es/Table";
import Button from "reactstrap/es/Button";


const commands_eyes_color = {
    "Eyes: red": "/red",
    "Eyes: green": "/green",
    "Eyes: blue": "/blue",

};
const commands_common = {
    "Stand": "/stand",
    "Rest": "/rest",
    "Sit": "/sit",
};

const commands_palm = {
    "Left open": "/hands&text=open_left",
    "Left close": "/hands&text=close_left",
    "Right open": "/hands&text=open_right",
    "Right close": "/hands&text=close_right",

}

const commands_left_hand = {
    "Front": "/left_hand_front",
    "Left": "/left_hand_left",

}
const commands_right_hand = {
    "Front": "/right_hand_front",
    "Right": "/right_hand_right",

}
const commands_hands = {
    "Front": "/hands_front",
    "Side": "/hands_sides",

}
const commands_walk = {
    "Walk": "/walk_20",
}

function send_to_robot(command) {
    let command_prefix = "http://10.0.0.101:9569/?action="
    let cmnd = command_prefix+command;
    console.log(cmnd)
    fetch(cmnd, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, cors, *same-origin
    })

    console.log("completed")
}

function render_table(commnds, subsection_name) {
    let dict = commnds
    return (
        <tbody className={"text-center"}>
        <tr>
            <td colSpan="2"  style={{fontSize: "x-large"}}>{subsection_name}</td>
        </tr>
        {Object.keys(dict).map(key => (

                    <tr>
                        <td>{key}</td>
                        <td><Button onClick={()=>send_to_robot(dict[key])}>Send!</Button></td>
                    </tr>

                ))}
        </tbody>
    )


}



function App() {
  return (
    <div className="App">
        <Container>
            <h1 className={"text-center"} style={{marginTop:"20px"}}>Nao controler</h1>
            <Jumbotron>
                <Table bordered striped hover>
                    <thead>
                    <tr>
                        <th>Command</th>
                        <th>Btn</th>
                    </tr>
                    </thead>
                    {render_table(commands_common, "Common control")}
                    {render_table(commands_eyes_color, "Eyes control")}
                    {render_table(commands_palm, "Palm control")}
                    {render_table(commands_left_hand, "Left hand control")}
                    {render_table(commands_right_hand, "Right hand control")}
                    {render_table(commands_hands, "Hands front/side")}
                    {render_table(commands_walk, "WALK, CAREFUL")}
                </Table>
            </Jumbotron>
        </Container>



    </div>
  );
}

export default App;
