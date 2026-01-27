import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function About() {
  const { user } = useContext(AppContext);

  return (
    <section className="page">
      <h1>About</h1>
      <p>This is the codeva internship task</p>
      <p>Current User: {user}</p>
    </section>
  );
}
