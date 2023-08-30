// import React from "react";
import { root } from "./index";

// helpers
const renderApp = () => root.render(<App />);
const isFunction = (fn: unknown): fn is Function => typeof fn === "function";

// types
type TUpdateState<S = any> = S | ((prevState: S) => S);

const React = (function () {
  // source code
  let values: any[] = [];
  let index = 0;

  const useState = <S = any,>(initState: S) => {
    const localIndex = index;

    index++;
    console.log("useState", { localIndex, index });

    if (values[localIndex] === undefined) {
      console.log(
        `useState-init state to values[${localIndex}] with init value: ${initState}`
      );
      values[localIndex] = initState;
    }

    console.log(`values[${localIndex}]`, values[localIndex]);

    const setState = (updateState: TUpdateState<S>) => {
      values[localIndex] = isFunction(updateState)
        ? updateState(values[localIndex])
        : updateState;

      console.log("----------------");
      console.log(`setState-values[${localIndex}]`, values[localIndex]);

      // trigger re-render
      index = 0;

      console.log("setState-trigger re-render");
      console.log("global index now before renderApp", index);

      renderApp();
    };

    console.log(`useState-return => values[${localIndex}]`, values[localIndex]);

    return [values[localIndex], setState] as const;
  };

  return { useState };
})();

function App() {
  const [count1, setCount1] = React.useState<number>(0);
  const [count2, setCount2] = React.useState<number>(0);

  return (
    <>
      <div className="section">
        <h1>Section1</h1>
        <p>Count: {count1}</p>
        <button onClick={() => setCount1((prev) => prev + 1)}>Increase</button>
      </div>

      <div className="section">
        <h1>Section2</h1>
        <p>Count: {count2}</p>
        <button onClick={() => setCount2(count2 + 1)}>Increase</button>
      </div>
    </>
  );
}

export default App;
