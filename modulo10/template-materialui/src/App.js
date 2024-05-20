import FirstComponent from "./components/FirstComponent"
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <FirstComponent/>
    </div>
  );
};

export default App;
