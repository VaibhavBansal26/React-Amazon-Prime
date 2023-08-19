import React, { useState } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {PlayIcon, PlusIcon} from '@heroicons/react/solid';


function DetailsPage() {
    const {id} = useParams();
    const {par} = useParams();
    const [movie,setMovie] = useState()
    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/get/basic',
        params: {country: 'in', tmdb_id: `${par}/${id}`},
        headers: {
          'x-rapidapi-key': 'af5a7781bbmshde9bd3c4f418eedp1b149cjsn5ea2de11d049',
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (res) {
          setMovie(res.data);
          console.log("res data",res.data);
          console.log("res data results",res.data.results)

      }).catch(function (error) {
          console.error(error);
      });
    return (
        <Container>
            <Cover>
                <InfoSection>
                    <div style={{marginLeft:"20px",padding:"8px",maxWidth:"728px",fontWeight:'300',lineHeight:"24px"}}>
                        <h2 style={{fontWeight:"400"}}>{movie?.title}</h2>
                        <SubField>
                            {/* <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFf5Qs3IIu0Awv9nRnVWre5uxPm2-SUC7mHQ&usqp=CAU" alt="name"/></span> */}
                        </SubField>
                        <h5 style={{fontWeight:"400",fontSize:"17px"}}>{movie?.overview}</h5>
                    </div>
                    <div style={{marginLeft:"20px",padding:"8px",maxWidth:"728px",fontWeight:'400',lineHeight:"24px",display:"flex",alignItems:"center"}}>
                        <div style={{display:"flex",flexDirection:"column",padding:"14px",color:"#8197a4",whiteSpace:"nowrap",fontWeight:"700"}}>
                            <span>Directors</span>
                            <span>Cast</span>
                            <span>Genre</span>
                            <span>Subtitle</span>
                            <span>Language</span>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",padding:"14px",whiteSpace:"nowrap"}}>
                            <span style={{color:"#79b8f3"}}>{movie?.significants[0] ? movie.significants[0]:"Unknown"}</span>
                            <span style={{color:"#79b8f3"}}>{movie?.cast.map((item,i) => <span key={i}> {item},</span>) }</span>
                            <span style={{color:"#79b8f3"}}>Drama</span>
                            <span style={{color:"#8197a4"}}>English</span>
                            <span style={{color:"#8197a4"}}>हिन्दी</span>
                        </div>
                    </div>
                    <div style={{marginLeft:"20px",padding:"8px",maxWidth:"728px",fontWeight:'300',lineHeight:"24px",display:"flex",alignItems:"center"}}>
                        <Button>
                            <img src="/images/play.svg" style={{width:"30px",height:"30px"}}/>
                            <span>Play</span>
                        </Button>
                        <SecButton>
                        <img src="/images/play1.svg" style={{width:"25px",height:"25px"}}/>
                        </SecButton>
                        <SecButton>
                            <span style={{width:"30px",height:"30px"}}><PlusIcon/></span>
                            
                        </SecButton>
                        <SecButton>
                            <img src="/images/confetti.png" style={{width:"25px",height:"25px"}}/>
                        </SecButton>
                    </div>
                </InfoSection>
                <VideoSection>
                    <FadeSection/>
                    {movie?.video ?
                    <ReactPlayer className="videotag" url={`https://www.youtube.com/watch?v=${movie.video}`}  playing muted width="100%" height="568px" style={{float:"right"}}/>
                    :
                    <img 
                    src={`${movie?.backdropPath ? movie?.backdropURLs["780"] : movie?.posterURLs["342"]}`} 
                    alt="hello"
                    width="100%"
                    height="568px"
                    style={{float:"right"}}
                    />
                }
                    <FadeSection/>
                </VideoSection>
            </Cover>
            
            <EpisodeSection>


            </EpisodeSection>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    margin-top:80px;
    position:relative;
`;

const Cover = styled.div`
    display:flex;
    align-items:center;
`;

const InfoSection = styled.div`
    flex:1;
    text-align:left;
    width:100%;
    color:white;
    height:580px;
    z-index:2;
    opacity:1;
    //background: black;
    //background: linear-gradient(90deg, rgba(0,0,0,1) 25%, rgba(2,0,36,0.02984943977591037) 68%, rgba(17,17,17,1) 78%);
    //background: rgb(1,47,64);
    //background: linear-gradient(90deg, rgba(1,47,64,0.9934348739495799) 20%, rgba(9,48,62,0.500437675070028) 32%, rgba(53,82,94,0) 76%, rgba(28,64,77,1) 94%);
    //background: linear-gradient(90deg, rgba(1,47,64,0.9934348739495799) 20%, rgba(9,48,62,0.500437675070028) 32%, rgba(53,82,94,0) 87%, rgba(28,64,77,1) 98%);
    background: rgb(16,23,30);
    background: linear-gradient(90deg, rgba(16,23,30,1) 20%, rgba(9,48,62,0.500437675070028) 32%, rgba(53,82,94,0) 87%, rgba(16,23,30,1) 98%);
`;

const VideoSection = styled.div`
    flex:0.6;
    width:100%;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    background-color:black;
    position:absolute;
    z-index:-1;
    .videotag{
        opacity:0.8;
        overflow:hidden;
        border:none;
        z-index:-20;
        object-fit:contain;
    }
`;


const FadeSection = styled.div`
    z-index:20;
    height:7.4rem;
    border:none;
    background: rgb(16,23,30);
    //background: linear-gradient(180deg, rgba(0,0,0,1) 25%, rgba(2,0,36,0.02984943977591037) 68%, rgba(17,17,17,1) 78%);
    background-image:linear-gradient(180deg,transparent,rgba(16,23,30,1),#111);
    //background: linear-gradient(180deg, rgba(1,47,64,0.9934348739495799) 20%, rgba(9,48,62,0.500437675070028) 32%, rgba(53,82,94,0) 76%, rgba(28,64,77,1) 94%);
    position:relative;
    // background-image:linear-gradient(
    //     180deg,
    //     transparent,
    //     rgba(37,37,37,0.81),
    //     #111
    // );
    //margin-top:15px;
`;

const FadeSectionI = styled.div`
    z-index:19;
    flex:0.1;
    width:7.4rem;
    background-image:linear-gradient(
        180deg,
        transparent,
        rgba(37,37,37,0.81),
        black
    );
    position:absolute;
    margin-left:314px;
    height:570px;
    background-color:black;
    opacity:0.9;
`;


const SubField = styled.div`
        z-index:12;
        span{
            img{
                width:60px;
                background-color:white;
                object-fit:contain;
            }
        }
        
`

const Button = styled.button`
    background-color:#0f79af;
    color:white;
    width:120px;
    height:60px;
    font-size:16px;
    display:flex;
    align-items:center;
    border:none;
    border-radius:5px;
    margin-right:10px;
    span{
        margin-left:15px;
    }
    &:hover{
        opacity:0.9;
    }
    img{
        padding-left:10px;
    }
`

const SecButton = styled.button`
    border-radius:50%;
    height:50px;
    color:white;
    background-color:#425265;
    border:none;
    width:50px;
    margin-left:15px;
    padding:5px;
`

const EpisodeSection = styled.div``;


export default DetailsPage
