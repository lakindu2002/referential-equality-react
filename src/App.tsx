import { useState } from 'react';
import './App.css';

const App = () => {
  const [mySelf, setMySelf] = useState<{ name: string, age: number }>({ name: 'David', age: 30 });

  const changeNameToJohn = () => {
    mySelf.name = "John";
    mySelf.age = 30;
    console.log(mySelf);
    setMySelf(mySelf);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12" style={{ textAlign: 'center', padding: 30 }}>
          <p>My name is {mySelf.name} and I am {mySelf.age} years of age.</p>
          <button className="btn btn-primary" onClick={changeNameToJohn}>Change My Name To John</button>
        </div>
      </div>
    </div>
  );
}

export default App;
