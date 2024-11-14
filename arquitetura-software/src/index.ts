import { Biblioteca } from "./model/Biblioteca"
import { Livro } from "./model/Livro"

/* Declaração das 3 instancias de livro pedidas no exercicio */
let livro1: Livro = new Livro(1, "João e Maria", "Desconhecido", true)
let livro2: Livro = new Livro(2, "Biblia", "Vários", true)
let livro3: Livro = new Livro(3, "José do Agito", "José", false)

/* Instancia a biblioteca */
let biblioteca: Biblioteca = new Biblioteca()

/* Utiliza a função adicionarLivro para adicionar as 3 instancia de livros criadas na biblioteca */
biblioteca.adicionarLivro(livro1)
biblioteca.adicionarLivro(livro2)
biblioteca.adicionarLivro(livro3)

/* Registra emprestimo no livro com código 2 */
biblioteca.registrarEmprestimo(2)

/* Exibe a disponibilidade dos livro na tela buscando pelo seu código */
console.log(biblioteca.consultarDisponibilidade(2) ? "Disponível" : "Indisponível")
console.log(biblioteca.consultarDisponibilidade(1) ? "Disponível" : "Indisponível")