import { Funcionario } from './Funcionario';

export class Empresa {
   funcionarios: Funcionario[] = []
   constructor() {
   }

   public adicionarFuncionario(funcionario: Funcionario): void {
      /* O professor vai ser gentil e vai me livrar de explicar essa */
      this.funcionarios.push(funcionario)
   }

   public atualizarSalario(matricula: number, salario: number): void {
      /* Busca um funcionario pela sua matricula
         se econtrar, atualiza o salario e mostra uma mensagem na tela, informando que o salario foi atualizado
         se não encontra, exibe uma mensagem na tela, informando que o Funcionario não foi encontrado */
      let funcionario = this.funcionarios.find(tb => tb.matricula === matricula)

      if (funcionario) {
         funcionario.salario = salario
         console.log("Salario atualizado com sucesso!")
      }
      else
         console.log("Funcionario não encontrado!")
   }

   public consultarFuncionario(matricula: number): Funcionario | undefined {
      /* Busca um funcinoario pelo seu numero de matricula
         se encontrar retorna as infomações do funcionario
         se não encontrar retorna undefined */

      let funcionario = this.funcionarios.find(tb => tb.matricula === matricula)
      return funcionario ? funcionario : undefined
   }
}