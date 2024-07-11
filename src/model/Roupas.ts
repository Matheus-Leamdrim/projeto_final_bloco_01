import { Vestuario } from "./Vestuario";

export class Roupas extends Vestuario{
    
    private _camisa: string;


	constructor(id: number, nome: string, tipo: number, $preco: number, camisa: string) {
        super(id, nome, tipo, $preco);
        this._camisa = camisa;
    }


    /**
     * Getter camisa
     * @return {string}
     */
	public get camisa(): string {
		return this._camisa;
	}

    /**
     * Setter camisa
     * @param {string} value
     */
	public set camisa(value: string) {
		this._camisa = value;
	}
    public visualizar(){
        super.visualizar();
        console.log(`\nCamisa: ${this._camisa}`);
    }
}