import { Produto } from './Produto';
import { Usuario } from './usuario';

export class Negociacao {
    public idNegociacao: number;
    public idVendedor: Usuario;
    public idComprador: Usuario;
    public idProduto: Produto;
    public dataInicioNegociacao: Date;
    public dataFinalNegociacao: Date;
    public statusNegociacao: any;
}