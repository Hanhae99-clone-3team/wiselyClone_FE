
import ItemList from "../components/main/ItemList";
import Header from "../global/Header";
import GlobalLayout from "../global/GlobalLayout";

function MainPage() {
  return (
    <div>
      <Header />
      <GlobalLayout>
        <ItemList />
      </GlobalLayout>
    </div>
  );
  }
  
  export default MainPage;
  