import { Produto } from './Produto';
import { Usuario } from './usuario';

export class Negociacao {
    public numero: number;
    public idVendedor: Usuario;
    public idComprador: Usuario;
    public idProduto: Produto;
    public venda: boolean;
    public dataInicioNegociacao: Date;
    public dataFinalNegociacao: Date;
    public status: number
}