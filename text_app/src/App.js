import './App.css';

function App() {
  return (
    <div className="desktop-1">
      <div classNAme="overlap-group4">
        <div className="overlap-group">
          <div className="rectangle-2"></div>
          <Rectangle5 />
          <div className="create-flashcards voces-regular-normal-white-39px">
            <span className="voces-regular-normal-white-39px">
              <br />
            </span>
            <span className="span1"> Create Flashcards</span>
          </div>
        </div>
        <div className="overlap-group">
          <div className="sign-in voces-regular-normal-white-50px">
            Sign In
          </div>
        </div>
        <div className="overlap-group2">
          <div className="flashcards voces-regular-normal-white-50px">
            Flashcards
          </div>
        </div>

      </div>
      <Component1> Difficulty: </Component1>
      <Component1 classNAme="component-2">
        Education: 
      </Component1>
      <div className="flex-row">
        <Component1 classNAme="component-3">
          # of Q's:
        </Component1>
        <div className="overlap-group1">
          <div className="rectangle-6"></div>
          <div className="create-cards"></div>
            Create Cards
          </div>
        </div>
      </div>

  );
}

export default App;

function Rectangle5() {
  return <button className="rectangle-5"></button>;
}

function Component1(props) {
   const { children, className } = props;

    return (
      <div className={`component-1 ${className || ""}` }>
        <h1 className = "title roboto-regular-normal-white-56px">
          {children}
        </h1>
        <div className="rectangle-3"></div>
      </div>
    );
}
