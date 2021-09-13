import React from 'react'
import styled from 'styled-components'

const User = (user) => {
    return (
        <>
            <Img src="https://i.pravatar.cc/200" alt="avatar"/>
            <Text>{user.user}</Text>
        </>
    )
}

const Img = styled.img`
    margin: 15px;
    border-radius: 50%;
    border: 3px solid #fff;
`

const Text = styled.p`
    font-size: 25px;
    font-weight: bold;
`

export default User
