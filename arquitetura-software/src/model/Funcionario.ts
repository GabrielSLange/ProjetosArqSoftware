export class Funcionario {
   public matricula: number
   public nome: String
   public cargo: String
   public salario: number

   constructor(
      matricula: number,
      nome: String,
      cargo: String,
      salario: number
   ) {
      this.matricula = matricula
      this.nome = nome
      this.cargo = cargo
      this.salario = salario
   }
}