import React, { useMemo } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import styled, { keyframes } from 'styled-components'
import Button from './Button'

const TextEditor = ({value, OnChange, OnClick, screenStatus}) => {

    const editor = useMemo(() => withReact(createEditor()), [])

    const notEmpty = value[0].children[0].text
    
    return (
        <>
            <TextWrapper>
                <Slate
                    editor={editor}
                    value={value}
                    onChange={(newValue) => OnChange(newValue)}
                    >
                    <Editable placeholder="Entrez du texte par ici..."/>
                </Slate>
            </TextWrapper>
            <Button onClick={() => OnClick()} disabled={screenStatus === 'loading' || notEmpty === ''}>
                {screenStatus === 'loading' ? <Loader><Circle></Circle><Circle></Circle><Circle></Circle></Loader> : 'Envoyer'}
            </Button>
            {notEmpty === '' ? <Warning>Vous ne pouvez pas envoyer un champ vide !</Warning> : <Warning></Warning>}
        </>
    )
}

const TextWrapper = styled.div`
    margin-bottom: 30px;
    padding: 35px;
    background: #fff;
    border-radius: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const loader = keyframes`
    0% {
        opacity: .4;
        transform: scale(1, 1);
    }

    50% {
        opacity: 1;
        transform: scale(1.2, 1.2);
    }

    100% {
        opacity: .4;
        transform: scale(1, 1);
    }
`

const Loader = styled.div`
    text-align: center;
    width: 100%;
`

const Circle = styled.div`
    animation: ${loader} 1.5s infinite ease-in-out;
    background-color: #fff;
    border-radius: 10px;
    display: inline-block;
    height: 10px;
    width: 10px;
    margin-right: 10px;

    &:nth-child(2) {
      animation-delay: .5s;
    }

    &:nth-child(3) {
      animation-delay: 1s;
    }
`

const Warning = styled.p`
    min-height: 16px;
    margin: 0;
    padding-left: 5px;
    font-size: 12px;
    color: #e76f51;
`

export default TextEditor
