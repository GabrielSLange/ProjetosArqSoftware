import { Tamanho } from '../Enums/Tamanho';
import { TipoMassa } from '../Enums/TipoMassa';
import { PizzaBuilder } from '../Interfaces/PizzaBuilder';
import { Pizza } from './Pizza';

export class PizzaDirector {
   builder: PizzaBuilder

   constructor(builder: PizzaBuilder) {
      this.builder = builder
   }

   setBuilder(builder: PizzaBuilder) {
      this.builder = builder
   }

   construirMargherita(): Pizza {
      return this.builder.Resetar()
         .setTamanho(Tamanho.grande)
         .setMassa(TipoMassa.fina)
         .adicionarIngrediente("Queijo")
         .adicionarIngrediente("Tomate")
         .adicionarIngrediente("Manjericão")
         .obterResultado();
   }

   construirPepperoni(): Pizza {
      return this.builder.Resetar()
         .setTamanho(Tamanho.medio)
         .setMassa(TipoMassa.tradicional)
         .adicionarIngrediente("Queijo")
         .adicionarIngrediente("Pepperoni")
         .obterResultado();
   }
}