import { Dispatch, SetStateAction } from "react";
import { FilmesProps } from "./filmesInterfaces";

export interface CadastraProps {
  setFilmes: Dispatch<SetStateAction<FilmesProps[]>>;
}
