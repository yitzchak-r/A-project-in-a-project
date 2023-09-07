import "./App.css";
import Router from "./components/Router";
import DataProvider from "./providers/DataProvider";
import IdProvider from "./providers/IdProvider";
import PageProvider from "./providers/RouterProvider";
// import HomePage from "./components/Home";

function App() {
  return (
    <IdProvider>
      <DataProvider>
        <PageProvider>
          <Router />
        </PageProvider>
      </DataProvider>
    </IdProvider>
  );
}

export default App;
