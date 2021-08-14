import './App.css';
import Header from './components/Header';
import Material_test from "./components/Material_test"


function App() {

  const name = 'run any code belong to this function component here'

  return (
    <div className="container" style={{}}>
      <Header say="hallow world" time="15:55"/>
      <Material_test  />
    </div>
  );
}

export default App;

//אחרי שמדברים על style
// https://create-react-app.dev/docs/adding-a-sass-stylesheet
// https://www.w3schools.com/react/react_sass.asp