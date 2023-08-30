import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)
  setCount(0)
  console.log('test');
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// // import React from "react";
// // import ReactDOM from "react-dom";

// import React from "src/lib/react";

// function App() {
//   const [count1, setCount1] = React.useState(0);
//   const [count2, setCount2] = React.useState(0);
//   const myRef = React.useRef(100)
//   console.log(myRef.current);
  

//   React.useEffect(() => {
//     console.log("useEffect always run");
//   });

//   React.useEffect(() => {
//     console.log("useEffect run if count1 changed");
//   }, [count1]);

//   React.useEffect(() => {
//     console.log("useEffect run if count2 changed");
//   }, [count2]);

//   return (
//     <>
//       <div>
//         <h1>Counter 1</h1>
//         <p>{count1}</p>
//         <button onClick={() => setCount1(count1 + 1)}>Increase</button>
//       </div>

//       <div>
//         <h1>Counter 2</h1>
//         <p>{count2}</p>
//         <button onClick={() => setCount2(count2 + 1)}>Increase</button>
//       </div>
//     </>
//   );
// }

// export default App;
