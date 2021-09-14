class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visiblity: !prevState.visiblity,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visiblity && (
          <div>
            <p>Now you can see me!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//   title: 'Visibility Toggle',
//   toDisplay: [],
//   buttonText: 'Show details'
// }
//
// const toggleDisplay = () => {
//
//   if (app.toDisplay.length === 0) {
//     app.toDisplay.push('Show me some details');
//     app.buttonText = 'Hide details';
//   } else {
//      app.toDisplay = [];
//      app.buttonText = 'Show details';
//   };
//
//   renderVisibilityToggle();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderVisibilityToggle = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleDisplay}>{app.buttonText}</button>
//       {
//         app.toDisplay.map((item) => {
//           return <p key={item}>{item}</p>;
//         })
//       }
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
// renderVisibilityToggle();

