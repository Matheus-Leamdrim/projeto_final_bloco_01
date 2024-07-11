import { Vestuario} from "./Vestuario";

export class Calçados extends Vestuario{

	private _sapatos: string;
    
    constructor(id: number, nome: string, tipo: number, $preco: number, sapatos: string) {
        super(id, nome, tipo, $preco);
		this._sapatos = sapatos;
	}

    /**
     * Getter sapatos
     * @return {string}
     */
	public get sapatos(): string {
		return this._sapatos;
	}

    /**
     * Setter sapatos
     * @param {string} value
     */
	public set sapatos(value: string) {
		this._sapatos = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nSapatos: ${this._sapatos}`);
    }
}