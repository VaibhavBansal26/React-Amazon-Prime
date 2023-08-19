import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movie:[]
}

const userMovie = createSlice({
    name:"movie",
    initialState,
    reducers:{
        setPMovies:(state,action) => {
            state.movie = [...state.movie,...action.payload.movie];
        },
    }
})


export const {setPMovies} = userMovie.actions;

export const selectMovies = (state) => state.movie.movie;

export default userMovie.reducer;