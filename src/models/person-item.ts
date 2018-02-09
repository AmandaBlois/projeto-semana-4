export class Person{
    nome:string;
    telefone:string;
    local;
    reputacao:number;
    itens:Array<Item>;
    foto;
    cpf:string;
    user:string;

    constructor(user, nome, telefone, local, reputacao, foto, cpf, itens){ 
        this.user = user;
        this.nome = nome;
        this.telefone = telefone;
        this.local = local;
        this.reputacao = reputacao;
        this.foto = foto;
        this.cpf = cpf;
        this.itens = itens;
    }
}

export class Item{
    nome:string;
    desc:string;
    img;
    imagem;
    descricao;
    tempoInicio;
    tempoFim;
    preco:number;
    locador;
    dono;
    multa:number;
    disp:boolean;

    constructor(nome, desc, img, tempoInicio, tempoFim, preco, dono, multa, disp, locador){
        this.nome=nome;
        this.desc = desc;
        this.img = img;
        this.tempoInicio = tempoInicio;
        this.tempoFim = tempoFim;
        this.preco = preco;
        this.dono = dono;
        this.multa = multa;
        this.disp = disp;
        this.locador = locador;
    }
}