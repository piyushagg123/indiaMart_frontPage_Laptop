import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import MegaMenu from "./pages/MegaMenu";
import Dummy from "dummyjs";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Goods from "./pages/Goods";
import More from "./pages/More";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="bg-[#F3F3F3]">
      <Navbar />
      <Header />
      <MegaMenu />
      <Products />
      <Categories />
      <Goods />
      <More />
      <Footer />
    </div>
  );
}

export default App;
