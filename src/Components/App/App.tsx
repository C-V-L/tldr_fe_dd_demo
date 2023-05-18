import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Login from "../Login/Login";
import Results from "../Results/Results";
import { ConcernsShape } from "../../interfaces";
import Welcome from "../Welcome/Welcome";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [error, setError] = useState("");
  const [concerns, setConcerns] = useState<ConcernsShape | null>(null);

  return (
    <div className="App">
      {error ? (
        <h1>{error}</h1>
      ) : (
        <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/form">
          <Header />
          <Form setConcerns={setConcerns} setError={setError}/>
          <Footer />
        </Route>
        <Route exact path="/results">
          <Results concerns={concerns}/>
        </Route>

      </Switch>
      )}
      {/* // <Header />
      // {error ? ( */}
      {/* //   <h1>{error}</h1>
      // ) : (
      //   <main className="main-content">
      //     {concerns ?  */}
      {/* //       <Results concerns={concerns}/> :
      //       <Form setConcerns={setConcerns} setError={setError}/>
      //     }
      //   </main> */}
      {/* // )}
      // <Footer />    */}
    </div>
  );
};

export default App;
