import GlobalRouter from "./global/GlobalRouter";
import Globalstyle from"./global/Globalstyle";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
       <Helmet>
        <title>와이즐리</title>
        <link rel="icon" href="https://www.wiselycompany.com/favicon.ico" />
      
      </Helmet>
     <GlobalRouter/>
     <Globalstyle/>
    
    </div>
  );
}

export default App;
