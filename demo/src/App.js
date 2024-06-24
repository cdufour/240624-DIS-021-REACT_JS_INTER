import './App.css';
import { Simple, Simple2, Simple3, Simple4 } from './components/Simples';

function App() {
  const message = "Bonjour à tous";
  const version = "18.3";

  return (
    <div>
      <h1>{ message }</h1>
      <h2>Version de react: { version }</h2>
      <Simple />
      <Simple2 propA="React" />
      <Simple2 propA="Angular" />
      <Simple3 training="Symfony" level="débutant" duration="3" />
      <Simple3 training="Drupal" level="avancé" duration="2" />
      <Simple4 />
      <Simple4 accessible="toto" />
      <Simple4 accessible="true" />
      <Simple4 accessible={true} />
    </div>
  )
}

export default App;
