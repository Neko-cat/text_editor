import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    width: 20%;
    min-width: 130px;
    margin-bottom: 10px;
    padding: 10px 20px;
    background: #58bae8;
    border: none;
    border-radius: 30px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.5s ease-out, background 0.5s ease-out;
    &:hover {
        background: #4aa9d6;
        color: white;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    &:disabled:hover {
        background: #58bae8;
    }
`

const Button = ({children, onClick, disabled}) => {
    return (
        <Btn onClick={onClick} disabled={disabled}>{children}</Btn>
    )
}

export default Button
