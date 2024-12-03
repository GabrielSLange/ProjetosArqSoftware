import { Tamanho } from "../Enums/Tamanho"
import { TipoMassa } from '../Enums/TipoMassa';

export class Pizza {
   tamanho: Tamanho = Tamanho.medio
   massa: TipoMassa = TipoMassa.tradicional
   ingredientes: string[] = []

   exibirInformacoes() {
      console.log("\nTamanho da Pizza: ", this.tamanho)
      console.log("Tipo Massa: ", this.massa)
      console.log("Tamanho ingredientes: ", this.ingredientes, "\n")
   }
}