import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPMovies } from '../features/movie/movieSlice';
//import { Hindi_movies } from '../axios/requests';

function Row({title,options}) {
    const dispatch = useDispatch();
    const [movies,setMovie] = useState([]);
    const [param2,setParam2] = useState()

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData(){
            if(title.includes("Movies")){
                setParam2("movie");
            }else{
                setParam2("tv");
            }
            const req = await axios.request(options).then((res) =>{
                setMovie(res.data.results);
                dispatch(setPMovies({
                    movie:res.data.results,
                }));
                console.log("Movie Data:",res.data.results);
            })
            return req;
        }
        fetchData();
    }, [options]);

    return (
        <Container>
            <h3>{title}</h3>
            <RowPoster className="row1">
                {movies.map((movie,i) => (
                    //(movie?.posterPath)||(movie?.backdropPath) &&
                    (movie?.posterPath || movie?.backdropPath)?
                    (  
                    
                    <Main key={movie.imdbID}>
                        <Link to={`/details/${movie.tmdbID}/${param2}`}>
                        <img
                            
                            src={`${movie?.posterPath ? movie?.posterURLs["342"] : movie?.backdropURLs["300"]}`} 
                            alt={movie.title}
                        />
                        </Link>
                        </Main>
                    ):(
                        <span></span>
                    )
                ))}
                {/* <Main>
                       
                        <img
                            
                            src="https://image.tmdb.org/t/p/original/cj9OkR52208ZNmtQMpa0q4vicol.jpg" 
                            alt="hello"
                        />
                    
                           
                        
                    
                </Main> */}
               
               
                
            </RowPoster>

        </Container>
    )
}

const Container = styled.div`
    width:100%;
    color:rgba(249,249,249,0.8);
    padding:4px 4px;
    padding-right:6px;
    margin-left:20px;
`;

const RowPoster = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    overflow-y:scroll;
    padding:4px 8px;
    border-radius:3px;
    
`

const Main = styled.div`
 position:relative;
 transition: all 0.5s ease-out;    
 max-width:350px;
 max-height:400px;
 margin:0px 4px;
 border-radius:4px;
 img{
    max-width:350px;
    max-height:300px;
    padding:0px 4px;
    border-radius:3px;
    z-index:4;
    top:0;
    left:0;
    object-position:center;
    object-fit:contain;
}

.videotag{
    max-width:300px;
    max-height:200px;
    padding:0px 4px;
    object-fit:cover;
    border-radius:3px;
    position:absolute;
    z-index:-1;
    top:0;
    left:0;
}
 
 
`

export default Row;
