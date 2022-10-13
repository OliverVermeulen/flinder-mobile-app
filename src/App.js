import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/pricing":
      component = <Pricing />;
      break;
    case "/about":
      component = <About />;
      break;
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
