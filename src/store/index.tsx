import pokemonsArraySLice from "./pokemonSlice";
import { combineReducers, configureStore, ThunkAction, Action } from "@reduxjs/toolkit";


// const rootReducer = combineReducers({
//     pokemonsArraySLice
// })

// export const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer
//     })
// }
export const store = configureStore({
  reducer: {
    pokemonsArraySlice: pokemonsArraySLice,
  },
});

// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch'];
// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
