import "./styles.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Header from "./components/Header/Header";
import MemeGenerator from "./containers/MemeGenerator/MemeGenerator";
const App = () => {
  return (
    <div>
      <Header> </Header>
      <MemeGenerator> </MemeGenerator>
    </div>
  );
};

export default App;
