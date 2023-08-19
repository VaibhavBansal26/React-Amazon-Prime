import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <TopFrame>
                <div>
                <h1>Welcome to Prime Video</h1>
                <h3>Join Prime to watch the lates TV shows, Movies and Award wining Talk Shows</h3>
                <Button>Join Prime</Button>
                </div>
            </TopFrame>
            <MidFrame>

            </MidFrame>
        </Container>
    )
}


const Container = styled.div`
    width:100%;
    background-color:black;
    z-index:110;
    height:600px;
`

const TopFrame = styled.div`
    width:100%;
    height:600px;
    background-color: #000;
    background-image: linear-gradient(to right, #000 40%, transparent 58%), url(https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3.jpg);
    background-position: right top;
    z-index:111;
    margin-top:69px;
    color:white;
    div{
        padding:40px;
        max-width:600px;
        line-height:1.8rem;
        h1{
            padding-top:100px;
            padding-left:30px;
            font-weight:600;
        }
        h3{
            font-weight:300;
            padding-left:30px;
        }
    }
`
const MidFrame = styled.div`
    width:100%;
    height:600px;
    background-color: #000;
    background-image: linear-gradient(to left, #000 40%, transparent 58%), url(https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-Living-Room-V2._CB524587855_.jpg);
    background-position: left top;
    z-index:111;
`

const Button = styled.button`
    border:none;
    width:300px;
    height:60px;
    color:white;
    background-color:#0f79af;
    margin-left:30px;
    margin-top:30px;
    font-size:18px;
    font-weight:600;
`

export default Login
