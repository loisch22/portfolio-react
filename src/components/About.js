import React from 'react';

// Summary of myself, Links to github / linked in

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "Write about me content"
    }
  }

  render() {
    return (
      <div ref="about">
        <h1>More About Lois Choi</h1>
        {this.state.content}
      </div>
    )
  }
};