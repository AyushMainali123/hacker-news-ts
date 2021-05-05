import {HackerNewsResponseItem} from '../../interfaces/HackerNewsResponseItem'
import Card from '../Card'
import styled from 'styled-components' 

interface IProps {
    data: HackerNewsResponseItem[]
}

const ItemsCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const ItemsCardContainer = ({data}: IProps) => {
    console.log(data)
    return (
        <ItemsCardWrapper>
          {
                data.map(item => <Card item={item} key={ item.id }/>)
          }
        </ItemsCardWrapper>
    )
}

export default ItemsCardContainer
