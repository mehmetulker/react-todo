import "./App.css";
import TodoFormList from "./components/TodoFormList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <TodoFormList />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
