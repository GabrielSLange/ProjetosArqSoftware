import { Arquivo } from "../Interfaces/arquivo";
import { ArquivoTXT } from "./arquivoTXT";
import { EditorArquivo } from "./editorArquivo";

export class EditorTXT extends EditorArquivo {
   criarArquivo(): Arquivo {
      return new ArquivoTXT()
   }
}