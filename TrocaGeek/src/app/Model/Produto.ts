import { Usuario } from './usuario';
import { Categoria } from './Categoria';

export class Produto {
    public codigo: number;
    public nome: string;
    public descricao: string;
    public preco: number;
    public categoria: string;
    public urlImg: string;
    public ativo: boolean;
    public data: Date;
    public idUsuario: Usuario;
    public idCategoria: Categoria
}