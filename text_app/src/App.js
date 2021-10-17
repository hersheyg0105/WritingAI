import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <button class="create-flashcards">Create Flashcards</button>
        <button class="flashcards">Flashcards</button>
        <button class="sign-in">Sign In</button>
      </div>
      <div className="textboxContainer">
        <textarea></textarea>
      </div>
      <div className="inputsContainer">
        <div className="dropdowns">
          <div className="dropdownGroup">
            <label>Difficulty</label>
            <select>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="dropdownGroup">
            <label id="educationLabel">Education</label>
            <select>
              <option>High School</option>
              <option>College</option>
            </select>
          </div>
          <div className = "dropdownGroup">
            <label id = "numQuestions">Number of Questions</label>
              <select>  
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
          <button class="create-cards">Create Cards</button>
        </div>
      </div>
    </div>
  );
}

export default App;