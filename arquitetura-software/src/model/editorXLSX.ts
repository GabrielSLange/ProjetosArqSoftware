import { Arquivo } from "../Interfaces/arquivo";
import { ArquivoXLSX } from "./arquivoXLSX";
import { EditorArquivo } from "./editorArquivo";

export class EditorXLSX extends EditorArquivo {
   criarArquivo(): Arquivo {
      return new ArquivoXLSX()
   }
}