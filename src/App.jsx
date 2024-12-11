import Clients from "./components/Clients";
import Faq from "./components/Faq";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mx-auto bg-white">
      <Navbar></Navbar>
      <Header></Header>
      <Featured></Featured>
      <Clients></Clients>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
