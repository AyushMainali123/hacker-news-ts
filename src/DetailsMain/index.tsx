import styled from "styled-components";
import { useState, useEffect } from "react";
import { fetchHackerAPIItemsFromID } from "src/utils/fetch-items-from-id";
import { HackerNewsResponseItem } from "src/interfaces/HackerNewsResponseItem";
import Spinner from "src/components/Spinner";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import MainContainerWrapper from '../containers/MainContainerWrapper'
interface IProps {
  id: string;
}

const StyledGoBackButton = styled(Button)`
  padding: 10px 15px;
  margin: 12px 0;
`;

const TopSection = styled.div``;
const MidSection = styled.div``;

const DetailsMain = ({ id }: IProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<HackerNewsResponseItem | null>(null);

  useEffect(() => {
    const fetchFromApi = async () => {
      const result = await fetchHackerAPIItemsFromID(Number(id));
      return result;
    };
    const apiCallerFunction = async () => {
      try {
        const result = await fetchFromApi();
        setLoading(false);
        setData(result.data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    apiCallerFunction();
  }, [id]);

  const returnRequiredJSX = () => {
    if (loading) {
      return <Spinner />;
    }
    if (error.length > 0) {
      return <div>{error}</div>;
    }
    return <div>{data !== null ? data.title : null}</div>;
  };

  return (
    <MainContainerWrapper>
      <TopSection>
        <Link to="/">
          <StyledGoBackButton variant="default">Go Back</StyledGoBackButton>
        </Link>
      </TopSection>
      <MidSection>{returnRequiredJSX()}</MidSection>
    </MainContainerWrapper>
  );
};

export default DetailsMain;
