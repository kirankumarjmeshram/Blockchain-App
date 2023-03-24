import { Navbar, Welcome, Footer, Service, Transactions } from "./components";

function App() {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Service/>
      <Transactions/>
      <Footer/>
    </div>
  );
}

export default App;
