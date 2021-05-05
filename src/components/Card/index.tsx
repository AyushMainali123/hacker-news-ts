import {HackerNewsResponseItem} from '../../interfaces/HackerNewsResponseItem'
import styled from 'styled-components'

interface IProps {
    item: HackerNewsResponseItem,
    className?: string
}

const CardContainer = styled.div`
    border: 1px solid black;

`

const CardTop = styled.div``

const CardMid = styled.div`
    padding: 10px 0;
`

const CardBottom = styled.div``

const dummyText = `
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
`

const Card = ({item, className}: IProps) => {
    return (
        <CardContainer className = {className}>
            <CardTop>
                {item.title}
            </CardTop>
            <CardMid>
                {item.text ? item.text : dummyText}
            </CardMid>
            <CardBottom>
                {item.time}
            </CardBottom>
        </CardContainer>
    )
}

export default Card
