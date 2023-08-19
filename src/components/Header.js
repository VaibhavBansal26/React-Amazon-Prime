import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {SearchIcon} from '@heroicons/react/outline';
import {ChevronDownIcon} from '@heroicons/react/outline';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, setSignOut, setUserLogin } from '../features/user/userSlice';
import { auth, provider } from '../firebase';

function Header() {
    const dispatch = useDispatch();
    const Iuser = useSelector(selectUserName);
    const [user,setUser] = useState(Iuser);
    const history = useHistory();
    const [val,setValue] = useState("");
    

    useEffect(() =>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                })) 
                setUser(user);
                history.push('/');
            }else{
                console.log(Iuser)
            }
        })
    },[user]);

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user;
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            }))
            setUser(user);
            history.push('/');
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            history.push('/login');
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(val)
        if(val){
            history.push(`/search/${val}`)
        }else{
            history.push(`/search/noSearch`)
        }
        
    }


    function handleChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        setValue(e.target.value);
    }
    return (
        <Container>
            <Nav>
                <LeftComponent>
                <NavComponent>
                    <Link to="/">
                    <img src="https://logodownload.org/wp-content/uploads/2018/07/prime-video-7.png" alt=""/>
                    </Link>
                </NavComponent>
                {Iuser ? 
                <ListComponent>
                    <List>
                        Home
                    </List>
                    <List>
                        TV Shows
                    </List>
                    <List>
                        Movies
                    </List>
                    <List>
                        Kids
                    </List>
                </ListComponent>
                :""
                }
                </LeftComponent>
                <RightComponent>
                    {Iuser ?
                    <>
                <SearchComponent>
                    <form style={{display:"flex",alignItems:"center"}} onSubmit={handleSubmit}>
                    <SearchIcon style={{color:"rgba(249,249,249,0.9)",height:"20px",padding:"6px 4px"}}/>
                    <input type="text" placeholder="Search" value={val} name="search" onChange={(e) => handleChange(e)}/>
                    <input type="submit" name="submit" style={{display:"none"}}/>
                    </form>
                </SearchComponent>
               
                <Avatar onClick={signOut} style={{cursor:"pointer"}}>
                {user?.photoURL ?
                     <img src={user.photoURL} alt=""/>:
                    <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt=""/>}
                    <span>{user?.displayName}</span>
                    <ChevronDownIcon style={{height:"10px",width:"10px",color:"rgba(249,249,249,0.6)"}}/>
                </Avatar>
                </>
                :
    
                <span style={{color:"rgba(249,249,249,0.8)",cursor:"pointer"}} onClick={signIn}>Sign In</span>
                    }
                    
                </RightComponent>

            </Nav>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    background: linear-gradient(180deg,#1b2530 0,rgba(27,37,48,.85));
    position:fixed;
    top:0;
    left:0;
    right:0;
    padding:2px 0px;
    z-index:100;
`

const Nav = styled.div`
    flex-grow:1;
    display:flex;
    align-items:center;
    max-width:95%;
    margin:0px auto;
    justify-content:space-between;
`

const NavComponent = styled.div`
    padding:6px 14px;
    img{
        width:120px;
        height:48px;
        z-index:1;
        object-fit:contain;
    }    

`

const ListComponent = styled.div`
    display:flex;
    align-items:center;
    flex-wrap:nowrap;
    color:rgba(249,249,249,0.8);
    &:first-child{
        font-weight:700 !important;
        color:red !important;
    }
`

const List = styled.div`
    padding:8px 8px;
    font-weight:600;
    position:relative;
    &:first-child{
        color:white;
        font-weight:700;
    }
    &:first-child:after{
        content:"";
        border-bottom:1px solid white;
        left:0px;
        right:0px;
        bottom:0;
        width:70%;
        margin:0 auto;
        color:white;
        position:absolute;
    }
    
`

const SearchComponent = styled.div`
    border:.5px solid rgba(249,249,249,0.5);
    display:flex;
    align-aitems:center;
    height:35px;
    margin-right:10px;
    input{
        outline:none;
        background:transparent;
        border:none;
        color:rgba(249,249,249,0.7);
        height:30px;
        font-size:18px;
        padding:2px 3px;
        font-weight:500;
    }
`

const Avatar = styled.div`
    display:flex;
    align-items:center;
    img{
        width:30px;
        height:30px;
        border-radius:50%;
        margin-right:5px;
    }
    span{
        flex-wrap:nowrap;
        color:rgba(249,249,249,0.6);
        margin-right:5px;
    }
`
const LeftComponent = styled.div`
    display:flex;
    align-items:center;
`;

const RightComponent = styled.div`
    display:flex;
    align-items:center;
`;