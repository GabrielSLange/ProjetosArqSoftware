import { Modelo } from "./modelo"

class Categoria {
   id: number
   tipo: String
   modelo: Modelo[]
   valorLocacao: number

   constructor(
      id: number,
      tipo: String,
      modelo: Modelo[],
      valorLocacao: number
   ) {
      this.id = id
      this.tipo = tipo
      this.modelo = modelo
      this.valorLocacao = valorLocacao
   }
}