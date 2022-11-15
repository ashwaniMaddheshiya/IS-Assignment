import "./App.css";
import BalanceCard from "./components/Card/BalanceCard";
import ReferalCard from "./components/Card/ReferalCard";
import NavBar from "./components/NavBar/NavBar";
import Procedures from "./components/BodyTexts/Procedures";
import Footer from "./components/Footer/Footer";
import OpenedPage from "./components/OpenedPage/OpenedPage";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <div className="App__mid">
        <OpenedPage/>
        <section>
          <BalanceCard />
          <ReferalCard />
        </section>
        <Procedures />
      <Footer />

      </div>
      
    </div>
  );
}

export default App;
