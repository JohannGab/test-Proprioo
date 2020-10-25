import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {data} from '../data/data'
import kitchen from '../images/kitchen.jpg'

import StyledCustomerSearch from './customerSearch.style'


const list = Object.values(data)

const defaultState = [
    {
        lastName: '...',
        firstName: '...',
        phone: '...',
        email: '...'
    }
]

const defaultStateSearch = ['...','...','...']

const CustomerSearch = () => {
    const [display, setDisplay] = useState(defaultState[0]);
    const [displaySearch, setDisplaySearch] = useState(defaultStateSearch);

    const searchIndex = ({ listName = [], value = '' }) => listName
    .filter(name => name.lastName.toLowerCase().indexOf(value.toLowerCase()) !== -1
                    || name.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1);

    const handleSearch = (value) => {
        try {
        const res = searchIndex({
            listName: list,
            value
        })
        const searchList = Object.values(res[0].search)
            setDisplay(res[0]);
            setDisplaySearch(searchList)
            console.log(res[0], searchList);
        }catch(err) {
            return null;
        }
    }

    return (
        <StyledCustomerSearch>
            <StyledCustomerSearch.Input
                type="text"
                onChange={(e) => (handleSearch(e.target.value))}
                placeholder='Recherche...'
            />
            <StyledCustomerSearch.block>
            <StyledCustomerSearch.Container>
                <StyledCustomerSearch.Image src={kitchen} alt='kitchen' />
                <StyledCustomerSearch.ContainerText>
                    <StyledCustomerSearch.Text>LastName : {display.lastName}</StyledCustomerSearch.Text>
                    <StyledCustomerSearch.Text>FirstName : {display.firstName}</StyledCustomerSearch.Text>
                    <StyledCustomerSearch.Text>Phone : {display.phone}</StyledCustomerSearch.Text>
                    <StyledCustomerSearch.Text>Email : {display.email}</StyledCustomerSearch.Text>    
                </StyledCustomerSearch.ContainerText>
                <StyledCustomerSearch.ContainerTextSearch>
                    <StyledCustomerSearch.TextSearch>surface : {displaySearch[0]}</StyledCustomerSearch.TextSearch>
                    <StyledCustomerSearch.TextSearch>budget : {displaySearch[1]}</StyledCustomerSearch.TextSearch>
                    <StyledCustomerSearch.TextSearch>rooms : {displaySearch[2]}</StyledCustomerSearch.TextSearch>
                </StyledCustomerSearch.ContainerTextSearch>
            </StyledCustomerSearch.Container>
            </StyledCustomerSearch.block>
        </StyledCustomerSearch>
    )
}

CustomerSearch.propTypes = {
    display: PropTypes.array,
    displaySearch: PropTypes.array
}

CustomerSearch.defaultProps = {
    display: [defaultState],
    displaySearch: [defaultStateSearch],
};

export default CustomerSearch