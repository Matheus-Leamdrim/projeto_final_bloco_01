import { Vestuario} from "../model/Vestuario";
import { VestuarioRepository } from "../repository/VestuarioRepository";

export class VestuarioController implements VestuarioRepository{
    gerarId(): number {
        throw new Error("Method not implemented.");
    }
    
    private listaProdutos: Array<Vestuario> = new Array<Vestuario>()
    
    
    public id: number = 0;
    
    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null)
            buscaProduto.visualizar();
        else
            console.log("\nO Produto não foi encontrado no Vestuario!");
    
    }
    listarTodas(): void {
        for (let vestuario of this.listaProdutos) {
            vestuario.visualizar()
        }
    }
    cadastrar(Vestuario: Vestuario): void {
        this.listaProdutos.push(Vestuario);
        console.log("\nO Produto foi cadastrado!")
    }
    atualizar(Vestuario: Vestuario): void {
        let buscaProduto = this.buscarNoArray(Vestuario.id);

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = Vestuario;
            console.log("\nO Produto foi atualizado!")
        } else
            console.log("\nO Produto não foi encontrado!");
    
    }
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nO Produto foi excluído!")
        } else
            console.log("\nO Produto não foi encontrado!");

        }
        
        public gerarID(): number {
            return ++ this.id;
        }
        
        public buscarNoArray(id: number): Vestuario | null {
    
            for (let produto of this.listaProdutos) {
                if (produto.id === id)
                    return produto;
            }
    
            return null;
        }  
    
    }
    