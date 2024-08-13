import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import listpeopleSlice from '../features/ListPeople/listpeopleSlice'
import userSlice from '../features/user/userSlice'
import timetableSlice from '../features/timetable/timetableSlice'

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: "root",
  version: 1, // Increment version when state shape changes
  storage
};

const rootReducer = combineReducers({
  timetable: timetableSlice,
  user: userSlice,
  listpeople: listpeopleSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
