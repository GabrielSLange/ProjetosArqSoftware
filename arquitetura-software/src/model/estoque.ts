import { Produto } from "./produto"



export class Estoque {

   listaProduto: Produto[] = []

   

   adicionarProduto(produto: Produto): void {
      this.listaProduto.push(produto)
   }

   atualizarQuantidade(id: number, quantidade: number) {
      const indie = this.listaProduto.findIndex(tb => tb.id == id)

      if (indie < 0) {
         console.log("Produto não localizado...")
      }
      else
         this.listaProduto[indie].quantidade = quantidade
   }
};