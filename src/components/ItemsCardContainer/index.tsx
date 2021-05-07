import {HackerNewsResponseItem} from '../../interfaces/HackerNewsResponseItem'
import Card from '../Card'
import styled from 'styled-components' 
import { CardType } from 'src/interfaces/CardType'



interface IProps {
    data: HackerNewsResponseItem[],
    cardType?: CardType
}

const ItemsCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const ItemsCardContainer = ({data, cardType="Story"}: IProps) => {
    console.log(data)
    return (
        <ItemsCardWrapper>
          {
                data.map(item => item ? <Card item={item} key={item.id} type={ cardType }/> : null)
          }
        </ItemsCardWrapper>
    )
}

export default ItemsCardContainer
