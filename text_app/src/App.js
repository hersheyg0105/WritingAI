import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <button>Create Flashcards</button>
        <button>Flashcards</button>
        <button>Sign In</button>
      </div>
      <div className="textboxContainer">
        <textarea name="textarea" rows="10" cols="60">Type in your text input</textarea>
      </div>
      <div className="inputsContainer">
        <div className="dropdowns">
          <div className="dropdownGroup">
            <label>Difficulty</label>
            <select id = "options">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="dropdownGroup">
            <label id="educationLabel">Education</label>
            <select id = "options">
              <option>High School</option>
              <option>College</option>
            </select>
          </div>
          <div className = "dropdownGroup">
            <label id = "numQuestions">Number of Questions</label>
              <select id = "options">  
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
          </div>
        </div>
        <div className="buttonContainer">
          <button>Create Cards</button>
        </div>
      </div>
    </div>
  );
}

export default App;