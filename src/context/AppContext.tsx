import { createContext } from "react";
import { AppState } from "../interface/interfaces";

type State = {
    state: AppState
}
export const context = createContext<State>({} as State);