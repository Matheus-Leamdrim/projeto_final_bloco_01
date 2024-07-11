import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { Roupas} from "./src/model/Roupas";
import {Calçados} from "./src/model/Calçados";
import { VestuarioController } from "./src/controller/VestuarioController";



export function main() {

    let opcao, id, tipo, preco: number;
    let nome, camisa, sapatos: string;
    let tipoProduto = ['Roupas', 'Calçados'];
    
    const vestuarioController: VestuarioController = new VestuarioController(); 
    
    const c1: Roupas = new Roupas(1,"Camisa",1,70,"Poliester")
    c1.visualizar();

    const s1: Calçados= new Calçados(2,"Tenis",2,250,"Couro")
    s1.visualizar();
    
    

    while (true) {

        console.log(colors.bg.black, colors.fg.blue,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                E-Commerce Clothing                  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Listar Produto por ID                ");
        console.log("            4 - Cadastrar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(colors.fg.greenstrong,
                "\nE-Commerce Clothing - As melhores roupas você encontra aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o Preco da Camisa: ");

                switch (tipo) {
                    case 1:
                        camisa = readlinesync.question("Digite a Marca da Camisa: ");
                        vestuarioController.cadastrar(new Roupas(vestuarioController.gerarID(),
                            nome, tipo, preco, camisa));
                        break;
                    case 2:
                        sapatos = readlinesync.question("Digite a Marca do Sapato: ");
                        vestuarioController.cadastrar(new Calçados(vestuarioController.gerarID(),
                            nome, tipo, preco, sapatos));
                        break;


                }
                    keyPress()
                    break;
            
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                vestuarioController.listarTodas();
                
                keyPress()
                break;
            
            case 3:console.log(colors.fg.whitestrong,
                "\n\nListar Produtos por ID\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o ID do Produto: ");
                vestuarioController.procurarPorId(id);
                
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nCadastrar Produto\n\n", colors.reset);
                    id = readlinesync.questionInt("Digite o ID do Produto: ");

                    let produto = vestuarioController.buscarNoArray(id);
    
                    if (produto !== null) {
    
                        nome = readlinesync.question("Digite o Nome do Produto: ");
    
                        tipo = produto.tipo;
    
                        preco = readlinesync.questionFloat("Digite o Preço: ");
    
                        switch (tipo) {
                            case 1:
                                camisa = readlinesync.question("Digite o Tipo da Roupa: ");
                                vestuarioController.atualizar(new Roupas(id,
                                    nome, tipo, preco, camisa));
                                break;
                            case 2:
                                sapatos = readlinesync.question("Digite o tipo do Calçado: ");
                                vestuarioController.atualizar(new Calçados(id,
                                    nome, tipo, preco, sapatos));
                                break;
                        }
    
                    } else
                        console.log("Produto não Encontrado!")
                

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nDeletar Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o ID do Produto: ");
                    vestuarioController.deletar(id);

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