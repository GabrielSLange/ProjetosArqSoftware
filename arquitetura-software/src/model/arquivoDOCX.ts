import { Arquivo } from '../Interfaces/arquivo';

export class ArquivoDOCX implements Arquivo {
   constructor(){}

   abrir(): void {
      console.log("Abrindo arquivo DOCX")
   }

   salvar(): void {
      console.log("Salvando arquivo DOCX")
   }
}