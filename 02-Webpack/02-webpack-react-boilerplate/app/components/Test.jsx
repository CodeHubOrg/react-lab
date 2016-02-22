import React from 'react';

/*
https://facebook.github.io/react/docs/reusable-components.html#es6-classes
https://muffinresearch.co.uk/back-to-the-future-using-es6-with-react/
http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
 */

let { Component, PropTypes } = React;

export default class Test extends Component {

  // Set prop types
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  // Set default props
  static defaultProps = {
    items: ['foo', 'bar', 'baz']
  };

  constructor() {
    super();

    // Set default state
    this.state = {
        env: 'Test'
    }
  }

  handleClick = (e) => {
      // this is now the component instance.
      console.log(this);
  }

  render() {
    return (
      <div>
      <h1>{this.state.env}</h1>
      <ul>
        {this.props.items.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}