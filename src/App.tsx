import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./containers/PageWrapper";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <PageWrapper>
      <Navbar />
      <MainContainer />
      <Footer />
    </PageWrapper>
  );
}

export default App;
