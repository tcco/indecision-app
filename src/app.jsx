import React from 'react';
import ReactDom from 'react-dom';
import IndecisionApp from './components/IndecisionApp.jsx';

ReactDom.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name = 'Tim';

    // needs to bind in constructor
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting() {
    return `Hi, My name is ${this.name}.`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax {
  name = 'Yay';

  getGreeting = () => {
    return `Hi, my name is ${this.name}.`;
  };
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
