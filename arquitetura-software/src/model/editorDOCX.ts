import { Arquivo } from "../Interfaces/arquivo";
import { ArquivoDOCX } from "./arquivoDOCX";
import { EditorArquivo } from "./editorArquivo";

export class EditorDOCX extends EditorArquivo {
   criarArquivo(): Arquivo {
      return new ArquivoDOCX()
   }
}