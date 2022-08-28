import "./App.css";
import { Person, Country } from "./Person";

function App() {
  // fnc and return : number
  // const getAge = (name: string): number => {
  //   return 99;
  // };
  return (
    <div className="App">
      <Person
        name="Gluay"
        email="gluay@gmail.com"
        age={25}
        isMarried={true}
        friends={["jake", "jessica", "jerry"]}
        country={Country.China}
      />
    </div>
  );
}

export default App;
