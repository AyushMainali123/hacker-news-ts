import ClipLoader from "react-spinners/ClipLoader";
import colors from "src/styles/colors";
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
`

const Spinner = () => {
    return (
        <Container>
            <ClipLoader color={ colors.primary }/>
        </Container>
    )
}

export default Spinner
