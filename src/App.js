import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Navigation from "./Navigation";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
