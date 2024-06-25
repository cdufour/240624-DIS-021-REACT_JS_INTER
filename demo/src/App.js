import './App.css';
import { Counter } from './components/Counter';
import CounterStateful from './components/CounterStateful';
import Addition from './components/exos/Addition';
import { Lorem } from './components/exos/Lorem';
import { Simple, Simple2, Simple3, Simple4, Simple5 } 
  from './components/Simples';

// composant racine
function App() {
  const message = "Bonjour à tous";
  const version = "18.3";

  return (
    <div>
      <h1>{ message }</h1>
      <h2>Version de react: { version }</h2>

      <Simple5 operand1={56} operand2={12} operator="sub" />
      <Simple5 operand1={12} operand2={56} operator="sub" />

      <section>
        <Simple />
        <Simple2 propA="React" />
        <Simple2 propA="Angular" />
        <Simple3 training="Symfony" level="débutant" duration="3" />
        <Simple3 training="Drupal" level="avancé" duration="2" />
        <Simple4 />
        <Simple4 accessible="toto" />
        <Simple4 accessible="true" />
        <Simple4 accessible={true} />
        <Lorem />
        <Lorem limit={10} />
        <Lorem limit={20} schapsum={true} />
        <Simple5 operand1={4} operand2={6} operator="add" />
        <Simple5 operand1={56} operand2={12} operator="add" />
        <Simple5 operand1={56} operand2={12} operator="mult" />
        <Simple5 operand1={56} operand2={12} operator="sub" />
        
        <CounterStateful initialValue={5} />
        <Counter />
        <Addition difficulty="easy" />
        <Addition difficulty="medium" />
        <Addition difficulty="hard" />
      </section>
    </div>
  )
}

export default App;
