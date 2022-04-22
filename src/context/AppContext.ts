import { createContext } from "react";
import { IUser } from "../types/user";


export const AppContext = createContext<IUser[]>([])