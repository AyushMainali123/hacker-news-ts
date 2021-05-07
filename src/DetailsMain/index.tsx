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
import ItemsCardContainer from "src/components/ItemsCardContainer";
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
const BottomSection = styled.div`
  margin-bottom: 30px;
`;

const CommentsTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const CommentsBody = styled.div``;

const DetailsMain = ({ id }: IProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<HackerNewsResponseItem | null>(null);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [commentsError, setCommentsError] = useState("");
  const [commentsData, setCommentsData] = useState<
    HackerNewsResponseItem[] | null
  >(null);
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

  useEffect(() => {
    const fetchFromApi = async (id: string | number) => {
      const result = await fetchHackerAPIItemsFromID(Number(id));
      return result;
    };

    const apiCallerFunction = async () => {
      if (data && data.kids && data.kids.length > 0) {
        try {
          const promises = data.kids.map((kid: number) => fetchFromApi(kid));
          const responseArray = await Promise.all([...promises]);
          const result: HackerNewsResponseItem[] = responseArray.map(
            ({ data }) => data
          );
          setCommentsLoading(false);
          setCommentsData(result);
        } catch (error) {
          setCommentsLoading(false);
          setCommentsError(
            error.message ? error.message : "Error Fetching Comments"
          );
        }
      } else {
        setCommentsLoading(false);
      }
    };

    apiCallerFunction();
  }, [data]);

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

  const returnCommentsJSX = () => {
    if (loading || error.length > 0) {
      return;
    }

    if (commentsLoading) {
      return <Spinner />;
    }

    if (data && data.kids && data.kids.length === 0) {
      return <CommentsTitle>No Comments to show</CommentsTitle>;
    }
    if (commentsError.length > 0) {
      return <div>{commentsError}</div>;
    }
    return (
      <>
        {data && data.kids ? (
          <>
            <CommentsTitle>Comments: </CommentsTitle>
            <CommentsBody>
              {commentsData !== null ? (
                <ItemsCardContainer data={commentsData} cardType={"Comment"} />
              ) : null}
            </CommentsBody>
          </>
        ) : (
          <div>No Comments</div>
        )}
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
      <BottomSection>{returnCommentsJSX()}</BottomSection>
    </MainContainerWrapper>
  );
};

export default DetailsMain;
