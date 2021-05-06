import styled from "styled-components";
import { useState, useEffect } from "react";
import { fetchHackerAPIItemsFromID } from "src/utils/fetch-items-from-id";
import { HackerNewsResponseItem } from "src/interfaces/HackerNewsResponseItem";
import Spinner from "src/components/Spinner";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import MainContainerWrapper from "../containers/MainContainerWrapper";
import colors from "src/styles/colors";
import TimeAgo from "react-timeago";
interface IProps {
  id: string;
}

const StyledGoBackButton = styled(Button)`
  padding: 10px 15px;
  margin: 12px 0 18px;
`;
const Title = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  margin: 8px 0 18px;
  color: ${colors.textBlack};
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.textBlack};
  margin-top: 4px;
  margin-bottom: 12px;
`;

const TimeContainer = styled.div``;

const dummyText = `
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
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
    return (
      <>
        {data !== null ? (
          <>
            <TimeContainer>
              <TimeAgo date={data.time ? data.time * 1000 : 0} />
            </TimeContainer>
            <Title>{data.title ? data.title : "Lorem Ipsum"}</Title>
            <Description>
              {data.text ? (
                <div dangerouslySetInnerHTML={{ __html: data.text }} />
              ) : (
                dummyText
              )}
            </Description>
          </>
        ) : null}
      </>
    );
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
