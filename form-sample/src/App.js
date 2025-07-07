import logo from './logo.svg';
import './App.css';
import StateForm from './components/StateForm';
import StateFormUC from './components/StateFormUC';
import FormTextarea from './components/FormTextarea';
import FormTest from './components/FormTest';
import FormTest1 from './components/FormTest1';
import FormFile from './components/FormFile';

function App() {
  return (
    <div className="App">
      <StateForm />
      <StateFormUC />
      <FormTextarea/>
      <FormTest/>
      <FormTest1/>
      <FormFile/>
    </div>
  );
}

export default App;
