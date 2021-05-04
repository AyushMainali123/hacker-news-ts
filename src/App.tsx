import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./containers/PageWrapper";
import MainContainer from "./components/MainContainer";
import { useContext } from 'react'
import {ArrayContext} from './Context/HackerNewsResponseArrayContext'
function App() {
  const context = useContext(ArrayContext)
  console.log(context)
  return (
    <PageWrapper>
      <Navbar />
      <MainContainer />
      <Footer />
    </PageWrapper>
  );
}

export default App;
