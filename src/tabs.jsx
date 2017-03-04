import React from 'react';

class Tabs extends React.Component {
  constructor() {
    super();
    this.state = { title: 0, content: "I am the first" };
  }

  updateIndex(e) {
    e.preventDefault();
    let tabName = e.target.innerHTML;

    const Contents = {
      "one": "I am the first",
      "two": "Second pane here",
      "three": "Third pane here"
    };

    this.setState({ content: Contents[tabName] });
  }

  render() {
    return (
      <ul className="group">
        <h1 onClick={this.updateIndex.bind(this)}>one</h1>
        <h1 onClick={this.updateIndex.bind(this)}>two</h1>
        <h1 onClick={this.updateIndex.bind(this)}>three</h1>
          <article><p>{ this.state.content }</p></article>
      </ul>
    );
  }
}

export default Tabs;
