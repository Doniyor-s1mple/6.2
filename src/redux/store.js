import logger from "redux-logger";
import { Reducer } from "./Reducer";
import { applyMiddleware, createStore } from "redux";

export const store =createStore(Reducer, applyMiddleware(logger))