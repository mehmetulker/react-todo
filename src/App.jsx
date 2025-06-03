import "./App.css";
import TodoFormList from "./components/TodoFormList";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoFromFooter from "./components/TodoFromFooter";

function App() {
  return (
    <div className="App">
      <section className="todoapp">
               <h1>todos</h1>
        <TodoForm />
        <TodoFormList />
        <TodoFromFooter />

      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
