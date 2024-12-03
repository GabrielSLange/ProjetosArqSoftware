import { Tamanho } from "../Enums/Tamanho"
import { TipoMassa } from "../Enums/TipoMassa"
import { Pizza } from "../model/Pizza"

export interface PizzaBuilder {
   Resetar(): PizzaBuilder
   setTamanho(tam: Tamanho): PizzaBuilder
   setMassa(massa: TipoMassa): PizzaBuilder
   adicionarIngrediente(ingredienteAdicional: string): PizzaBuilder
   obterResultado(): Pizza
}