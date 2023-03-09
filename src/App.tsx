import Routers from "./routes";
import Global from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Global />
      <div className="App">
        <Routers />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
