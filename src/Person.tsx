import { useState } from "react";
// props is an object
interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  // a list of string string[]
  //   country: string;
  //   if you don't wanna run country you could use the optional ?
  //   country?
  country: Country;
}

export enum Country {
  China = "China",
  Brazil = "Brazil",
  France = "France",
}

export const Person = (props: Props) => {
  //   const [name, setName] = useState("");
  //   you could specify type of state by
  const [name, setName] = useState<string>("");
  return (
    <>
      <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person {props.isMarried ? "is" : "is not"} Married</h1>
        {props.friends.map((friend: string) => (
          <h1>{friend}</h1>
        ))}
        <h1>Country: {props.country}</h1>
      </div>
    </>
  );
};

export default Person;
