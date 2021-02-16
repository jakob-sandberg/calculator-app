import Home from "./pages/Home"
import DataContext from "./context/DataContext"

function App() {
  return (
    <div className="app">
      <DataContext>
        <Home />
      </DataContext>
    </div>
  );
}

export default App;
