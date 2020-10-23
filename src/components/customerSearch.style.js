import styled from 'styled-components'

const StyledCustomerSearch = styled.div`
    font-size: 0.8rem;
    text-align: center;
`
StyledCustomerSearch.Input = styled.input`
    margin: 3rem 0;
    padding: 0.6rem 4rem;
`
StyledCustomerSearch.block = styled.div`
    display: flex;
    justify-content: center;
`

StyledCustomerSearch.Container = styled.div`
    border: solid 1px black;
    width: 21rem;
    height: 23rem;
    border-radius: 0.4rem;
`
StyledCustomerSearch.Image = styled.img`
    width: 100%;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
`
StyledCustomerSearch.ContainerText = styled.div`
    display: block;
    margin-bottom: 2rem;
    margin-top: 1.2rem;
`

StyledCustomerSearch.ContainerTextSearch = styled.div`
    display: flex;
    justify-content: center;
`

StyledCustomerSearch.Text = styled.p`
    
`

StyledCustomerSearch.TextSearch = styled.p`
    margin: 0 1rem;
`

export default StyledCustomerSearch;