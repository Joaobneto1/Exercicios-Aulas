import { Dispatch, SetStateAction } from "react";
import { FilmesProps } from "./filmesInterfaces";

export interface ListaProps {
  itens: FilmesProps[];
  setItens: Dispatch<SetStateAction<FilmesProps[]>>;
  lidarComOAlterar: (filme: FilmesProps) => void;
}
