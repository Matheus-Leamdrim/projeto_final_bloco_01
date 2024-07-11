import { Vestuario } from "../model/Vestuario";

export interface VestuarioRepository{

    // Métodos do CRUD

    procurarPorId(id: number): void;
    listarTodas(): void;
    cadastrar(Vestuario: Vestuario): void;
    atualizar(Vestuario: Vestuario): void;
    deletar(id: number): void;

}