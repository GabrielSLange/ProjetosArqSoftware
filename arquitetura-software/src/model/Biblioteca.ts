import { Livro } from "./Livro";

export class Biblioteca {
   public acervo: Livro[] = []

   constructor() {
   }

   adicionarLivro(livro: Livro): void {
      /* Aqui eu nem preciso explicar né prof */
      this.acervo.push(livro)
   }

   registrarEmprestimo(codigo: number): void {
      /* Busca o livro pelo código no acervo
         verifica se foi encontrado
         Utiliza a funçao consultarDisponibilidade
         Se o livro existe e está disponivel realiza o emprestimo setando a variavel disponibilidade para falso
         imprimi uma mensagem de confirmação do empréstimo na tela
         caso contrario exibe uma mensagem informando que o livro não foi encontrado ou não está disponivel */

      let livro = this.acervo.find(tb => tb.codigo === codigo)
      if (livro && this.consultarDisponibilidade(livro.codigo)) {
         livro.disponivel = false
         console.log("Emprestimo registrado com sucesso!")
      }
      else
         console.log("Livro não disponível ou não encontrado!")
   }

   consultarDisponibilidade(codigo: number): boolean {
      /* busca o livro pelo código
      se encontrar o livro retorna a disponibilidade dele
      se não encontrar retorna falso por padrão */
      const livroEncontrado = this.acervo.find(tb => tb.codigo === codigo);
      return livroEncontrado ? livroEncontrado.disponivel : false;
   }
}