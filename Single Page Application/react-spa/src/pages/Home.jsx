import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const { user, setUser } = useContext(AppContext);

  return (
    <section className="page">
      <h1>Home</h1>
      <p>Welcome, {user}</p>
      <button onClick={() => setUser("Milkias")}>
        Change User
      </button>
<button onClick={()=>setUser("kenna")}>
    Next
</button>
    </section>
  );
}
