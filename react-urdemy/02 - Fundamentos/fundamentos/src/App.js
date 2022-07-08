//Components

import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions'

// Style / CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>02 -Fundamentos</h1>

      <FirstComponent/>
      <h3>Template Expressions</h3>

      <TemplateExpressions/>
    </div>
  );
}

export default App;
