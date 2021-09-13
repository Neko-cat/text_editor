import React from 'react'
import styled from 'styled-components'

const Contributions = ({allValues}) => {

    const addContribution = (item, index) => {
        return (
            <Wrapper key={index}>
                <ContributionsContainer>
                    <ContributionsHeader>
                        <Score>★ Score : {Math.round(item.score * 10)/10}</Score>
                        <div>{item.prediction <= 0.5 ? <StatusAccepted>Accepté</StatusAccepted> : <StatusDenied>Refusé</StatusDenied>}</div>
                    </ContributionsHeader>
                    <Text>{item.text}</Text>
                </ContributionsContainer>
            </Wrapper>
        )
    }

    return (
        <>
            {
                allValues.map((item, index) => addContribution(item, index))
            }
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    padding: 10px;
    background: #fff;
    border-radius: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const ContributionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 25px;
    text-align: justify;
`

const ContributionsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`

const Score = styled.div`
    background: #e9c46a;
    color: white;
    padding: 10px 20px;
    text-align: center;
    border-radius: 50px;
    font-weight: bold;
`

const StatusAccepted = styled(Score)`
    background: #2a9d8f;
`

const StatusDenied = styled(Score)`
    background: #e76f51;
`

const Text = styled.div`
    white-space: pre-line;
`

export default Contributions
