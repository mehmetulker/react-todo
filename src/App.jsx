import "./App.css";
import TodoFormList from "./components/TodoFormList";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <TodoForm />
        <TodoFormList />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
