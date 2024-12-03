import { Arquivo } from '../Interfaces/arquivo';

export class ArquivoTXT implements Arquivo {
   constructor(){}

   abrir(): void {
      console.log("Abrindo arquivo TXT")
   }

   salvar(): void {
      console.log("Salvando arquivo TXT")
   }
}