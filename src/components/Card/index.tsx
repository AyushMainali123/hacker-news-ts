import { HackerNewsResponseItem } from "../../interfaces/HackerNewsResponseItem";
import styled from "styled-components";
import colors from "src/styles/colors";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";
import { CardType } from "src/interfaces/CardType";
interface IProps {
  item: HackerNewsResponseItem;
  className?: string;
  type?: CardType;
}

const CardContainer = styled.div`
  border-radius: 12px;
  box-shadow: 0px 3px 28px rgba(0, 0, 0, 0.08);
  padding: 16px;
  word-wrap: break-word;

  & pre {
    word-wrap: break-word;
    overflow: auto;
    padding: 10px;
    background: ${colors.grey};
    border-radius: 12px;
  }
`;

const CardTop = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  color: ${colors.textBlack};
`;

const CardMid = styled.div`
  font-size: 10px;
  line-height: 14px;
  color: ${colors.textBlack};
  margin-top: 4px;
  margin-bottom: 12px;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.textGrey};
  font-size: 8px;
`;
const CardTime = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const HorizontalLine = styled.div`
  height: 12px;
  width: 1px;
  background-color: ${colors.textGrey};
  margin: 0px 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CardComments = styled.div``;

const dummyText = `
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
`;

const returnCardTopContent = (type: CardType, item: HackerNewsResponseItem) => {
  if (type === "Story") {
    return item.title ? item.title : "Lorem Ipsum";
  }
  if (type === "Comment") {
    return item.by ? item.by : "Lorem Ipsum";
  }
};

const Card = ({ item, className, type = "Story" }: IProps) => {
  const clockImage = `${process.env.PUBLIC_URL}/assets/images/clock.png`;
  return item.deleted === false ||
    (item.deleted === undefined && item.dead === false) ||
    item.dead === undefined ? (
    <CardContainer className={className}>
      <StyledLink to={`/detail/${item.id}`}>
        <CardTop>{returnCardTopContent(type, item)}</CardTop>
      </StyledLink>
      <CardMid>
        {item.text ? (
          <div dangerouslySetInnerHTML={{ __html: item.text }} />
        ) : (
          dummyText
        )}
      </CardMid>
      <CardBottom>
        <CardTime>
          <img src={clockImage} alt={"clock"} width={10} height={10} />
          {item.time ? (
            <span>
              <TimeAgo date={item.time * 1000} />
            </span>
          ) : null}
        </CardTime>
        <HorizontalLine />
        <CardComments>
          <span>{item.kids ? item.kids.length : 0} comments</span>
        </CardComments>
      </CardBottom>
    </CardContainer>
  ) : <CardContainer>Dead Or Deleted { type }</CardContainer>;
};

export default Card;
