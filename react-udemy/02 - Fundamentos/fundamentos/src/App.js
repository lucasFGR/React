//Components

import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'
// Style / CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>02 -Fundamentos</h1>

      <FirstComponent/>
      <h3>Template Expressions</h3>
      <h3>Hieraquia de componentes</h3>
      <TemplateExpressions/>
      <MyComponent />

      <h3>Eventos</h3>
      <Events/>

      <h4>Desafio</h4>
      <Challenge />
    </div>
  );
}

export default App;
