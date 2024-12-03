import { Tamanho } from "../Enums/Tamanho";
import { TipoMassa } from "../Enums/TipoMassa";
import { PizzaBuilder } from "../Interfaces/PizzaBuilder";
import { Pizza } from "./Pizza";

export class PeperoniPizzaBuilder implements PizzaBuilder {
   pizza: Pizza

   constructor() {
      this.pizza = new Pizza();
   }

   Resetar(): PizzaBuilder {
      this.pizza = new Pizza();
      return this
   }


   setTamanho(tam: Tamanho): PizzaBuilder {
      this.pizza.tamanho = tam
      return this
   }
   setMassa(massa: TipoMassa): PizzaBuilder {
      this.pizza.massa = massa
      return this
   }
   adicionarIngrediente(ingredienteAdicional: string): PizzaBuilder {
      this.pizza.ingredientes.push(ingredienteAdicional)
      return this
   }

   obterResultado(): Pizza {
      return this.pizza
   }
}