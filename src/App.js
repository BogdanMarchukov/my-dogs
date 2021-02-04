import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from "./hoc/Layout";
import Banner from "./Banner/Banner";

function App() {
  return (
    <Layout>
        <Banner/>
        <div style={{height: '100vh'}} ></div>
    </Layout>
  );
}

export default App;
