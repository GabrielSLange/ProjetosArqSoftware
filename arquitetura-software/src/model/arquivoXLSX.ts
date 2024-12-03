import { Arquivo } from '../Interfaces/arquivo';

export class ArquivoXLSX implements Arquivo {
   constructor(){}

   abrir(): void {
      console.log("Abrindo arquivo XLSX")
   }

   salvar(): void {
      console.log("Salvando arquivo XLSX")
   }
}