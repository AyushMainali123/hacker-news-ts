import {HackerNewsResponseItem} from '../../interfaces/HackerNewsResponseItem'
import Card from '../Card'

interface IProps {
    data: HackerNewsResponseItem[]
}

const ItemsCardContainer = ({data}: IProps) => {
    console.log(data)
    return (
        <div>
          {
                data.map(item => <Card item={ item }/>)
          }
        </div>
    )
}

export default ItemsCardContainer
