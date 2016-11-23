import React from 'react';
import ReactDOM from 'react-dom';

class Application extends React.Component {
  render() {
    return <div>
      <h1>Welcome, Joel a ReactJS!</h1>
    </div>;
  }
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));

