import { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";
import Header from "./componentes/Header";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user);
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      <header>
        {user ? (
          <div>
            <h1>Authenticated</h1>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={login}>Login with Github</button>
        )}
      </header>

      <main>
        <Main9></Main9>
      </main>
    </div>
  );
}
