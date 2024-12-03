import { Arquivo } from "../Interfaces/arquivo";
import { ArquivoPDF } from "./arquivoPDF";
import { EditorArquivo } from "./editorArquivo";

export class EditorPDF extends EditorArquivo {
   criarArquivo(): Arquivo {
      return new ArquivoPDF()
   }
}