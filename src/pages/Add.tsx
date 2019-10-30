import React, { Component } from 'react'

type AddState = {
  username: string;
  checked: boolean;
  task: string;
}


export class Add extends Component<{}, AddState> {
  state = {
    username: "",
    checked: false,
    task: ""
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Add
