import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Humans from './components/humans'
import Fruits from './components/fruits'
import Example from './components/example'
import figlet from 'figlet'
import $ from 'jquery'

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Gist = ({ match }) => (
  <div>
    <p>URL: { match.url } </p>
    <p>ID:  { match.params.id }</p>
  </div>
)

class Math {
  @log
  add(a, b) {
    return a + b;
  }

  remove(text) {
    console.log('text', text)
    return text
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  console.log('--------------------')

  console.log('target', target)
  console.log('name', name)
  console.log('descriptor', descriptor)

  console.log('--------------------')

  descriptor.value = function() {
    console.log(`Calling "${name}" with`, arguments);

    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

class Application extends React.Component {
  
  componentDidMount() {
    $( window ).on( "load", function() {

      figlet('Hello World!!', function(err, data) {
          if (err) {
              console.log('Something went wrong...');
              console.dir(err);
              return;
          }
          console.log(data)
      });

      console.log("%cExtra Large Yellow Text with Red Background", "background: red; color: yellow; font-size: x-large");

    })

    const math = new Math();

    // passed parameters should get logged now
    math.add(2, 4);
  
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/step/12'>
              Navigate step1
            </Link>
          </div>
          <div>
            <Link to='/step/11'>
              Navigate step2
            </Link>
          </div>
          <div>
            <Link to="/humans">humans</Link>
          </div>
          <Link to="/fruits">fruits</Link>
          <li><Link to="/topics">Topics</Link></li>
          <div>
            <Switch>
              <Route exact path='/humans' component={Humans} />
              <Route exact path='/fruits' component={Fruits} />
              <Route exact path='/step/:id' component={Gist} />
              <Route path="/topics" component={Topics} />
            </Switch>
          </div>

          <div>-------</div>
          <Example/>
        </div>
      </Router>
    )
  }
}



/*
 * Render the above component into the div#app
 */
ReactDOM.render(<Application />, document.getElementById('app'));

