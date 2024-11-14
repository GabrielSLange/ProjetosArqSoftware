export class Livro {
   public codigo: number
   private titulo: String
   private autor: String
   public disponivel: boolean


   constructor(codigo: number, titulo: String, autor: String, disponivel: boolean) {
      this.codigo = codigo
      this.titulo = titulo
      this.autor = autor
      this.disponivel = disponivel
   }
}