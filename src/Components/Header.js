import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-top: 50px;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #374044;
    text-align: center;
`

const Header = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Header
