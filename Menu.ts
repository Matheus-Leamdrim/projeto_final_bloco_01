import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";


export function main() {

    let opcao, id, tipo, preco: number;
    
    let tipoProduto = ['Roupas', 'Calçados'];

    while (true) {

        console.log(colors.bg.black, colors.fg.blue,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                E-Commerce Clothing                  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar todos os Produtos             ");
        console.log("            2 - Listar Produto por ID                ");
        console.log("            3 - Cadastrar Produto                    ");
        console.log("            4 - Deletar Produto                      ");
        console.log("            5 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 5) {
            console.log(colors.fg.greenstrong,
                "\nE-Commerce Clothing - As melhores roupas você encontra aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                keyPress()
                break;
            case 2:console.log(colors.fg.whitestrong,
                "\n\nListar Produtos por ID\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nCadastrar Produto\n\n", colors.reset);


                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nDeletar Produto\n\n", colors.reset);


                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Matheus Alves");
    console.log("Generation Brasil - matheusalves.art@outlook.com");
    console.log("github.com/Matheus-Leamdrim");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();