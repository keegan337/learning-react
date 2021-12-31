import './App.css';
import capeTown from "./cape-town.jpg"
function Header(props) {
  return (
    <header>
      <h1>
        Welcome to {props.name}
      </h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <img 
        src={capeTown} 
        height={200} 
        alt="Cape Town"
      />
      <p>In {props.name} you can:</p>
      <ul style={{textAlign: "left"}}>
        {props.activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const activities = [
  "Hike",
  "Swim",
  "Eat"
];

const activitiesObjects = activities.map((activity, i) => (
  {id: i, title: activity}
));

function App() {
  return (
    <div className="App">
      <Header name="Cape Town"/>
      <Main name= "Cape Town" activities = {activitiesObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
