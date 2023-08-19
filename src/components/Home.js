
import styled from 'styled-components';

import {Animations, English_movies, English_series, Family_movies, Hindi_movies, Hindi_series, Horror_movies, Romantic_movies, Sitcoms} from '../axios/requests'
import Row from './Row';

function Home() {
    //const [movie,setMovie] = useState([]);
    
    // useEffect(() => {
    //     async function fetchData(){
    //         const req = await axios.request(Hindi_movies).then((res) =>{
    //             setMovie(res.data.results);
    //             console.log("Movie Data:",res.data.results);
    //         })
    //         return req;
    //     }
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     async function fetchData1(){
    //         const req = await axios.request(Hindi_series).then((res) =>{
    //             setMovie(res.data.results);
    //             console.log("Series Data:",res.data.results);
    //         })
    //         return req;
    //     }
    //     fetchData1();
    // }, []);


    return (
        <Container>
            <Row
            title='Amazon Original Series'
            options={Hindi_series}
            ></Row>
            <Row
            title='Hindi Movies'
            options={Hindi_movies}
            ></Row>
            <Row
            title='English Movies'
            options={English_movies}
            ></Row>
            <Row
            title='Binge Worthy Series'
            options={English_series}
            ></Row>
            <Row
            title='Animation'
            options={Animations}
            ></Row>
            <Row
            title='Sitcoms'
            options={Sitcoms}
            ></Row>

            <Row
            title='Romantic Movies'
            options={Romantic_movies}
            ></Row>
            <Row
            title='Horror Movies'
            options={Horror_movies}
            ></Row>
            <Row
            title='Family Movies'
            options={Family_movies}
            ></Row>
            <Row
            title='Binge Worthy Series'
            options={English_series}
            ></Row>

            
        </Container>
    )
}

export default Home;


const Container = styled.div`

`
