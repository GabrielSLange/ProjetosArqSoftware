import { EditorDOCX } from "./model/editorDOCX";
import { EditorPDF } from "./model/editorPDF";
import { EditorTXT } from "./model/editorTXT";
import { EditorXLSX } from "./model/editorXLSX";

const editorPDF = new EditorPDF();
const editorDOCX = new EditorDOCX();
const editorXLSX = new EditorXLSX();
const editorTXT = new EditorTXT();

console.log("Gerenciando PDF:");
editorPDF.gerenciarArquivo();

console.log("\nGerenciando DOCX:");
editorDOCX.gerenciarArquivo();

console.log("\nGerenciando XLSX:");
editorXLSX.gerenciarArquivo();

console.log("\nGerenciando TXT:");
editorTXT.gerenciarArquivo();