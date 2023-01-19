import logo from "./logo.svg";
import "./App.css";

const User = ({ firstname, lastName, link }) => {
  return (
    <div>
      <h1>
        Mening ismim - {firstname.name} and sharifim {lastName}
      </h1>
      <a href={link}>Youtube</a>;
    </div>
  );
};

const App = () => {
  return (
    <div>
      <User
        firstname={{ name: "Aziz" }}
        lastName="Kuchkarov"
        link="youtube.com"
      />
      ;
      <User
        firstname={{ name: "Laziz" }}
        lastName="Boqiev"
        link="youtube.com"
      />
      ;
    </div>
  );
};

export default App;
