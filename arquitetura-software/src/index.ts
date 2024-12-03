import { Tamanho } from "./Enums/Tamanho";
import { TipoMassa } from "./Enums/TipoMassa";
import { MargheritaPizzaBuilder } from "./model/MargheritaPizzaBuilder";
import { PeperoniPizzaBuilder } from "./model/PeperoniPizzaBuilder";
import { PizzaDirector } from "./model/PizzaDirector";

let director = new PizzaDirector(new MargheritaPizzaBuilder)

let pizzaMargherita = director.construirMargherita()
pizzaMargherita.exibirInformacoes()

director.setBuilder(new PeperoniPizzaBuilder)

let pepperoniPizza = director.construirPepperoni()
pepperoniPizza.exibirInformacoes()

let customPizzaBuilder = new MargheritaPizzaBuilder()
let CustomPizza = customPizzaBuilder.Resetar()
   .setTamanho(Tamanho.pequeno)
   .setMassa(TipoMassa.recheada)
   .adicionarIngrediente("Queijo")
   .adicionarIngrediente("Tomate")
   .adicionarIngrediente("Azeitona")
   .obterResultado()

CustomPizza.exibirInformacoes()