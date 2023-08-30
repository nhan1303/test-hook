import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// // import React from "react";
// import ReactDOM from "react-dom/client";

// export const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// const renderApp = () => {
//   // React communicates with ReactDOM for rendering
//   root.render(<App />);
// };

// // Rules of HOOKS

// // Make use of closure to store/encapsulation private state
// // by implement IIFE(Immediately Invoked Function Expression) function
// // Module Pattern: https://www.patterns.dev/posts/module-pattern

// const React = (() => {
//   // if true tao data trong hooks

//   let hooks: any[] = [
//     // [value1, setValue1], 1st true  | 2st false
//     // [value2, setValue3], 1st true  | 2st true
//     // [value3, setValue3], 1st true  | 2st true
//   ];
//   let index = 0;

//   const resetIndex = () => (index = 0);

//   const useState = (initState: any) => {
//     const localIndex = index;
//     index++;
//     if (hooks[localIndex] === undefined) {
//       hooks[localIndex] = initState;
//     }

//     const setValue = (newValue: any) => {
//       hooks[localIndex] = newValue;

//       // force re-render
//       resetIndex();
//       renderApp();
//     };

//     return [hooks[localIndex], setValue];
//   };

//   const useRef = (value: any = null) => {
//     const localIndex = index;
//     index++;

//     if (hooks[localIndex] === undefined) {
//       hooks[localIndex] = { current: value };
//     }

//     return [hooks[localIndex]][0];
//   };

//   const useEffect = (callback: () => void, dependencies?: any[]) => {
//     const localIndex = index;
//     index++;

//     let hasChanges = true;

//     const oldDependencies = hooks[localIndex];
//     if (Array.isArray(dependencies) && Array.isArray(oldDependencies)) {
//       hasChanges = false;

//       dependencies.forEach((dependency, index) => {
//         const oldDependency = oldDependencies[index];

//         const isTheSame = Object.is(dependency, oldDependency);
//         if (!isTheSame) {
//           hasChanges = true;
//         }
//       });
//     }

//     if (hasChanges) {
//       callback();
//     }

//     hooks[localIndex] = dependencies;
//   };

//   const useMemo = (callback: () => any, dependencies?: any[]) => {
//     const localIndex = index;
//     index++;

//     let hasChanges = true;

//     const [memoValue, oldDependencies] = hooks[localIndex] || [];
//     if (Array.isArray(dependencies) && Array.isArray(oldDependencies)) {
//       hasChanges = false;

//       dependencies.forEach((dependency, index) => {
//         const oldDependency = oldDependencies[index];

//         const isTheSame = Object.is(dependency, oldDependency);
//         if (!isTheSame) {
//           hasChanges = true;
//         }
//       });
//     }

//     let value = memoValue;
//     if (hasChanges) {
//       value = callback();
//     }

//     hooks[localIndex] = [value, dependencies];
//     console.log(hooks[localIndex]);

//     return value;
//   };

//   return {
//     useState,
//     useEffect,
//     useRef,
//     useMemo,
//     hooks,
//   };
// })();

// const useCombineCounter = (count1: number, count2: number) => {
//   const [data, setData] = React.useState(`combined: ${count1}/${count2}`);

//   React.useEffect(() => {
//     setData(`combined: ${count1}/${count2}`);
//   }, [count1, count2]);

//   console.log(data);

//   return data;
// };

// function App() {
//   const [count1, setCount1] = React.useState(0); // setValue[0]
//   // setCount1(0)
//   // // const [count3, setCount3] = React.useState(0);
//   const myRef = React.useRef(100 - 1);

//   // if (myRef.current % 2 === 0) {
//   //   // eslint-disable-next-line react-hooks/rules-of-hooks
//   //   React.useEffect(() => {
//   //     // console.log(myRef);
//   //     console.log("useEffect always run");
//   //   });
//   // }

//   // for (let index = 0; index < 3; index++) {
//   //   // eslint-disable-next-line react-hooks/rules-of-hooks
//   //   React.useEffect(() => {
//   //     // console.log(myRef);
//   //     console.log("useEffect always run");
//   //   });
//   // }

//   const [count2, setCount2] = React.useState(0);
//   const color = React.useMemo(() => {
//     return `color-${count2}`;
//   }, [count2]);
//   // [count2, setCount2] === [hooks[1], (newValue) => hooks[1] = newValue]

//   React.useEffect(() => {
//     console.log("useEffect only run if setCount2 was called");
//   }, [count2]);

//   const combineData = useCombineCounter(count1, count2);

//   console.log(React.hooks);
//   console.log(color);

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
//         <button
//           onClick={() => {
//             setCount2(count2 + 1);
//             myRef.current = myRef.current + 1;
//           }}
//         >
//           Increase
//         </button>
//       </div>

//       <div>
//         <h1>Combined Data</h1>
//         <p>{combineData}</p>
//       </div>

//       {/* <div>
//         <h1>Counter 3</h1>
//         <p>{count3}</p>
//         <button onClick={() => setCount3(count3 + 1)}>Increase</button>
//       </div> */}
//     </>
//   );
// }

// renderApp();
