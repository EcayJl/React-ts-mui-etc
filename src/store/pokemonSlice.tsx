import { createSlice } from "@reduxjs/toolkit";
import pokemonsArray from "../pokemons/pokemons";
import { IpokeArray } from "../models/commonModels";

interface IpokeArrayState {
    pokemons: Array<IpokeArray>
}

const initialState: IpokeArrayState = {
    pokemons: pokemonsArray
}

export const pokemonsArraySLice = createSlice({
    name: 'pokemonsArraySLice',
    initialState: {
        initialState
    },
    reducers: {
        
    },
});

export default pokemonsArraySLice.reducer;