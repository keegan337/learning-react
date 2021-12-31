import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const list = [1, 2, 3];

function Beach({name}) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  )
}

function Snow({name}) {
  return (<div>
    <h1>Visit {name}!</h1>
  </div>)
}

function GitHubUser({login}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log("Use effect called");
    fetch("https://api.github.com/users/keeganwhite")
    .then(response => response.json())
    .then(setData)
    .catch(console.error);
  }, []);
  if (data) {
    return (
      <div>
       <h1>{data.login}</h1>
       <img src={data.avatar_url} width={100} />
      </div>
    );
  }
  else {
    return (
      <div>
        Loading...
      </div>
    )
  }
}

// function App(props) {
//   if(props.season === "summer") {
//     return <Beach name="Clifton Beach"/>;
//   }
//   else if (props.season === "winter") {
//     return <Snow name="Matroosberg"/>;
//   }
//   else {
//     return <div>
//     <h1>Come back in the winter or summer</h1>
//   </div>
//   }
// }

function App() {
  const [status, setStatus] = useState("Open"); // initial state
  const [alarmed, changeState] = useState("Off"); // initial state
  return (
    <>
      <GitHubUser/>
      <div>
        <h1>Alarm set: {alarmed}</h1>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => {
              setStatus("Open");
              changeState("Off");
            }
          }>Open</button>
        <button onClick={() => {
              setStatus("Closed");
              changeState("On");
            }
          }>Closed</button>
      </div>
    </>
  );
}

function List({items}) {
  return (
  <ul>
    {items.map(item => (
      <li key={item.toString()}>{item}</li>
    ))}
  </ul>
  );
}

ReactDOM.render(
 <App/>,
  document.getElementById('root')
);


