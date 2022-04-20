import { createContext } from "react";
import { IUser } from "../types/tasks";

export const AppContext = createContext<IUser[]>([])