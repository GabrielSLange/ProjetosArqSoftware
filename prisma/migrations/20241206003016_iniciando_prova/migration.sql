-- CreateTable
CREATE TABLE "Livro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "anoPublicacao" DATETIME NOT NULL,
    "genero" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Livro_titulo_key" ON "Livro"("titulo");
