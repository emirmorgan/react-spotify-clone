import Content from "./components/Content";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default App;
