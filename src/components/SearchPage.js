import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectMovies } from '../features/movie/movieSlice';
import FlipMove from 'react-flip-move';
import {Link, useParams} from 'react-router-dom';


function SearchPage() {
    const {searchTerm} = useParams();
    const movie = useSelector(selectMovies);
    const [mov,setMov] = useState();
    useEffect(() => {
        console.log("Redux",movie);
        console.log(searchTerm)
        if(searchTerm === 'noSearch'){
            setMov(movie)
            
        }else{
            const list = movie.filter(item =>{
                return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
            setMov(list)
        }
    }, [searchTerm])
    return (
        <Container>
            <SearchJar>
                <span>Results for "{searchTerm}"</span>
                <Button>Redifine</Button>
                
            </SearchJar>
            <HLine></HLine>
            <>
            <FlipMove>
            <Cards>
                { 
                    mov?.map((mav,i) =>(
                        (mav?.posterPath || mav?.backdropPath)?
                    (  
                    
                    <Main key={mav.imdbID}>
                        <Link to={`/details/${mav.tmdbID}/${mav.episodes ? "tv":"movie"}`}>
                        <img
                            
                            src={`${mav?.posterPath ? mav?.posterURLs["342"] : mav?.backdropURLs["300"]}`} 
                            alt={mav.title}
                        />
                        </Link>
                        <div>
                        <span>{mav.title}</span>
                        </div>
                        </Main>
                    ):(
                        <Main key={mav.imdbID}>
                        <Link to={`/details/${mav.tmdbID}/${mav.episodes ? "tv":"movie"}`}>
                        <img src="data:image/jpeg;base64,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" alt="hrllo"/>
                        </Link>
                        <div>
                        <span>No Content</span>
                        </div>
                        </Main>
                        
                        
                    )
                    ))
                }
            </Cards>
            </FlipMove>
            </>
            
        </Container>
    )
}

const Container = styled.div`
    margin:40px auto;
`;
const Cards = styled.div`
    margin:20px 40px;
    display:grid;
    grid-gap:8px !important;
    grid-template-columns:repeat(4,1fr);
    
`

const Main = styled.div`
 position:relative;
 transition: all 0.5s ease-out;    
 max-width:333px;
 max-height:420px;
 border-radius:4px;
 background-color:#1b2530;
 color:white;
 img{
    width:330px;
    height:240px;
    padding:0px 4px;
    border-radius:3px;
    z-index:4;
    top:0;
    left:0;
    object-position:center;
    //object-fit:contain;
    }
div{
    padding:8px 3px;
    height:30px;
    span{
        padding:8px 3px
    }
}
&:hover{
    transform:scale(1.08);
    z-index:115;
}
`

const Button = styled.button`
    border:none;
    color:white;
    background-color:#1b2530;
    width:100px;
    height:55px;
    font-weight:700;
    padding:4px 8px;
    font-size:16px;
    color:#6b7f90;
    border-radius:4px;
`

const SearchJar = styled.div`
    margin:20px 40px;
    margin-top:100px;
    display:flex;
    align-items:center;
    font-size:18px;
    justify-content:space-between;
    font-weight:700;
    padding:4px;
    span{
        color:#6b7f90 !important;
    }
   
`
const HLine = styled.hr`
    color:#6b7f90;
    margin:20px 40px;
    margin-bottm:40px;
    background:#6b7f90;
    border-top:1px solid #6b7f90 !important;

`



export default SearchPage
