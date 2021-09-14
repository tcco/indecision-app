console.log('App.js is running');

const app = {
  title: 'Indecision Application',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';

    renderIndecisionApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderIndecisionApp();
};

const onMakeDecision = () => {
  /*Generate a random number based on length of options*/
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0
          ? 'Here are your options ' + app.options
          : 'no options'}
      </p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
