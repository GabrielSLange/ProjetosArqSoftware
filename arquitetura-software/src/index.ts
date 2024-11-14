import { Empresa } from "./model/Empresa";
import { Funcionario } from "./model/Funcionario";

/* Cria 3 instancias de funcionarios diferentes */
let funcionario1: Funcionario = new Funcionario(123, "João", "Recepcionista", 1412.00)
let funcionario2: Funcionario = new Funcionario(456, "Vilmar", "Gerente", 14120.00)
let funcionario3: Funcionario = new Funcionario(789, "Agner", "Estágiario", 1200.00)

/* Instancia uma empresa */
let empresa: Empresa = new Empresa()

/* Executa a função adicionar funcionario na empresa para as 3 instancias de funcionarios criadas  */
empresa.adicionarFuncionario(funcionario1)
empresa.adicionarFuncionario(funcionario2)
empresa.adicionarFuncionario(funcionario3)

/* Atualiza o salário do estágiario para R$ 900 */
empresa.atualizarSalario(789, 900)

/* Imprime as informações de um funcionario na tela */
console.log(empresa.consultarFuncionario(789))
/* Se não for possível encontrar o funcionario, mostra undefined */
console.log(empresa.consultarFuncionario(78))