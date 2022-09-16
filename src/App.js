// component
import TodoApp from "./components/TodoApp";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-zinc-50 dark:bg-[rgb(22,23,34)] min-h-screen bg-white-mobile sm:bg-white-desktop dark:bg-dark-mobile dark:sm:bg-dark-desktop bg-no-repeat bg-[length:100%_200px] sm:bg-[length:100%_250px] w-full">
      <TodoApp />
      <ToastContainer />
    </div>
  );
}

export default App;
