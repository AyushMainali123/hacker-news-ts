import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import { useParams } from "react-router-dom";
import DetailsMain from "src/DetailsMain";

interface ParamTypes {
    id: string
}

const Details = () => {
  const {id} = useParams<ParamTypes>();
  
  return (
    <>
      <Navbar />
          <DetailsMain id={ id }/>
      <Footer />
    </>
  );
};

export default Details;
