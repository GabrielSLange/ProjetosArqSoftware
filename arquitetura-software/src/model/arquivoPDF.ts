import { Arquivo } from "../Interfaces/arquivo";

export class ArquivoPDF implements Arquivo {
   constructor(){}

   abrir(): void {
      console.log("Abrindo arquivo PDF")
   }

   salvar(): void {
      console.log("Salvando arquivo PDF")
   }
}