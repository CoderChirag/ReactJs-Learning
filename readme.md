# React Js Learning

My complete React JS Learning from beginner to Advanced Level.

## Contents

- [React Js Learning](#react-js-learning)
  - [Contents](#contents)
  - [Birth of ReactJs](#birth-of-reactjs)
  - [Declarative vs Imperative](#declarative-vs-imperative)
  - [Component Architecture](#component-architecture)
  - [One Way Data Flow](#one-way-data-flow)
  - [Hooks API Reference](#hooks-api-reference)
    - [Basic Hooks](#basic-hooks)
      - [useState](#usestate)
        - [Functional Updates](#functional-updates)
        - [Lazy initial state](#lazy-initial-state)
        - [Bailing out of a state update](#bailing-out-of-a-state-update)
        - [Batching of state updates](#batching-of-state-updates)

## Birth of ReactJs

-   Initially Web Development started with just HTML, CSS and JS in 90s and early 2000s. HTML displayed the text on the pages, CSS the styles and JS added some functionality. For every page we requested to server, and server sent different different HTML pages.
    <br>
    But the major problem here was that there were different different browsers developed by different group of developers and as we wanted to use more and more JavaScript, we had to account for all these browsers that sometimes work differently from each other, and we had to accomodate JavaScript to work with these different browsers.
    <br>

-   Now, eventually we had **jQuery** come out which allowed developers to easily interact with the DOM across all the browsers just simply by using their API and cross browser problems was manged by them only.
    <br>

-   As websites turn into the full applications that people can interact with besides just requesting more and more pages like a blog, libraries like **Backbone.JS** came out as our JavaScript files started getting bigger and bigger.
    <br>

-   Because it became easier and easier to work with the DOM, we had the birth of a **Single Page Application**.
    <br>
    Traditionally we just had HTML files for each page and every time we moved to a different page we would request from the server the HTML, CSS and JS files.
    <br>
    With more advancements like jquery and backbone, and AJAX we now focused less on HTML and a lot more on Js.
    So now instead of requesting new and new files, we just have one HTML files and using JavaScript file, just simply changes or updates the HTML file or the DOM to display new things. So we are able to sign into an application and interact with that application without ever speaking to the server.
    <br>

-   This way of writing applications became more and more popular and in 2010, **Angular Js**, which was created by Google, really became the standard way of building the Web Applications.
    Now unlike jquery, Angular allowed developers to build these large applications by forming these large applications by forming the containers that will wrap our project, and as it was created by Google, it had a lot of power.
    <br>

-   But as things getting more and more complex and every small small part of the UI was linked to other, people started to find bugs more and more often upto a point when Facebook was no more able to continue with Angular.
    <br>
    And so Facebook came up with a solution of **React**, which they released in 2013 to the developer community at JS Conf 2013.
    <br>

-   React became popular in a very short span of time as it developed a whole new way to build front end application.
    And at the same time, in 2014 Angular JS realized that the way they've architected their framework just didn't allow good applications to be built anymore, so they started rewriting their entire library and called it **Angular** (instead of AngularJS). But because they wanted to do an entire rewrite, a lot of people during that time moved to React.

## Declarative vs Imperative

-   Before React, we simply have to manipulate DOM using the Javascript directly or using the tools like Jquery or with some libraries. This approach of directly manipulating the DOM to change the individual parts of our app in response to various user events in called the **Imperative Paradigm**
    <br>
    The problem with the **Imperative** approach is that it becomes difficult to see the relationships between events and all the edge cases.
    <br>

-   According to React, DOM manipulation is one of the biggest performance bottlnecks. It takes a long time for DOM changes to happen.
    So React says "Let me take care and I'll find the best way for me to change the DOM and just declare to me what your app looks like."
    So the idea of a **Declarative approach** is that we didn't have to say to do this and if this happens do that in a sequential order, instead we tell this is the **state** of our app.
    <br>
    So the basic difference is that all the different states are accounted for in one place, i.e, one big Javascript object that describes how our app should look. This results in **less complexity**, **better code quality**, and **faster developer times**.

## Component Architecture

-   React has the idea of putting together small components to form bigger components, and these small small components can be reused to multpile locations and even in the multiple projects.

## One Way Data Flow

-   React uses the **state** and **components** and maintains a tree-like, lightweight Javascript Object called a **Virtual Dom**.
-   **Virtual Dom** is basically a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called **reconciliation**.
    <br>

-   Now this idea of **unidirectional data flow** means that any time we want something to change on our Web Page, the state has to change, ie., the data has to be changed on the App.
    React as soon as state changes, reacts to the change, combines the new state and the components we have and updates the DOM. **Thus the data only flow one way (Only flows down in the tree and can never move up).**

## Hooks API Reference

Hooks are a new addition in React 16.8. They let us use state and other React features without writing a class.

### Basic Hooks

#### useState

`const [state, setState] = useState(initialState);`

Returns a stateful value, and a function to update it.

During the initial render, the returned state (`state`) is the same as the value passed as the first argument (`initialState`).

The `setState` function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

`setState(newState);`

During subsequent re-renders, the first value returned by `useState` will always be the most recent state after applying updates.

**Note**

-   React guarantees that `setState` function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the `useEffect` or `useCallback` dependency list.

##### Functional Updates

If the new state is computed using the previous state, we can pass a function to `setState`. The function will receive the previous value, and return an updated value. Here’s an example of a counter component that uses both forms of setState :

```
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

The ”+” and ”-” buttons use the functional form, because the updated value is based on the previous value. But the “Reset” button uses the normal form, because it always sets the count back to the initial value.

If our update function returns the exact same value as the current state, the subsequent rerender will be skipped completely.

**Note**

-   Unlike the `setState` method found in class components, `useState` does not automatically merge update objects. We can replicate this behavior by combining the function updater form with object spread syntax :
    ```
    const [state, setState] = useState({});
    setState(prevState => {
    // Object.assign would also work
    return {...prevState, ...updatedValues};
    });
    ```
-   Another option is `useReducer`, which is more suited for managing state objects that contain multiple sub-values.

##### Lazy initial state

The `initialState` argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render :

```
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

##### Bailing out of a state update

If we update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects. (React uses the `Object.is` comparison algorithm.)

Note that React may still need to render that specific component again before bailing out. That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree. If we’re doing expensive calculations while rendering, we can optimize them with `useMemo`.

##### Batching of state updates

React may group several state updates into a single re-render to improve performance. Normally, this improves performance and shouldn’t affect your application’s behavior.

Before React 18, only updates inside React event handlers were batched. Starting with React 18, batching is enabled for all updates by default. Note that React makes sure that updates from several different user-initiated events — for example, clicking a button twice — are always processed separately and do not get batched. This prevents logical mistakes.

In the rare case that you need to force the DOM update to be applied synchronously, you may wrap it in `flushSync`. However, this can hurt performance so do this only where needed.
