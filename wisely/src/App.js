import GlobalRouter from "./global/GlobalRouter";
// import Header from "./global/Header";
// import Footer from "./global/Footer";
import Globalstyle from"./global/Globalstyle";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
     <GlobalRouter/>
     <Globalstyle/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
