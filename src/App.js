import "./App.css";
import Cleave from "cleave.js/react";

function App() {
  const onInputChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <h1>Cleave.js App Integration</h1>
      <div className="cards">
        <div className="card">
          <p>Date:</p>
          <Cleave
            placeholder="Enter date in YYYY-MM-DD"
            options={{
              date: true,
              delimiter: "-",
              datePattern: ["Y", "m", "d"],
            }}
            onChange={onInputChange}
          />
        </div>
        <div className="card">
          <p>Date:</p>
          <Cleave
            placeholder="Enter date in MM/YY"
            options={{ date: true, datePattern: ["m", "y"] }}
            onChange={onInputChange}
          />
        </div>
        <div className="card">
          <p>Time :</p>
          <Cleave
            placeholder="Enter time in hh:mm"
            options={{ time: true, timePattern: ["h", "m"] }}
            onChange={onInputChange}
          />
        </div>
        <div className="card">
          <p>Time : </p>
          <Cleave
            placeholder="Enter time in hh:mm:ss:"
            options={{ time: true, timePattern: ["h", "m", "s"] }}
            onChange={onInputChange}
          />
        </div>
        <div className="card">
          <p>Numeral :</p>
          <Cleave
            placeholder="Enter numerals"
            options={{ numeral: true, numeralThousandsGroupStyle: "thousand" }}
            onChange={onInputChange}
          />
        </div>

        <div className="card">
          <p>Credit card number :</p>
          <Cleave
            placeholder="Enter your credit card number"
            options={{ creditCard: true }}
            onChange={onInputChange}
          />
        </div>

        <div className="card">
          <p>Custom options:</p>
          <Cleave
            placeholder="Prefix"
            options={{
              prefix: "PREFIX",
              delimiter: "-",
              blocks: [6, 4, 4, 4],
              uppercase: true,
            }}
            onChange={onInputChange}
          />
        </div>
        <div className="card">
          <p>Custom options:</p>
          <Cleave
            placeholder='Delimeter [".",".","-"]'
            options={{
              delimiters: [".", ".", "-"],
              blocks: [3, 3, 3, 2],
              uppercase: true,
            }}
            onChange={onInputChange}
          />
        </div>
        <div className="card">
          <p>Custom options:</p>
          <Cleave
            placeholder='Delimeter "."'
            options={{ delimiter: "·", blocks: [3, 3, 3], uppercase: true }}
            onChange={onInputChange}
          />
        </div>
        <div className="card">
          <p>Custom options:</p>
          <Cleave
            placeholder="Block [4,3,3,4]"
            options={{ blocks: [4, 3, 3, 4], uppercase: true }}
            onChange={onInputChange}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
