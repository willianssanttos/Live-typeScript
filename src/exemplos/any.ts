// O any é uma notação que diz que a propriedade pode ter qualquer tipo
let cpf: any;
// Aqui ela recebe uma string
cpf = '01620445000';
// Aqui recebe um boolean
cpf = true;
// E agora um número
cpf = 10;
// O uso de any faz com que typescript trate suas variáveis como JS

// Essa função abaixo espera uma string
function apresentarCPF(cpf: string) {
    console.log(cpf)
}

// E aqui passamos a variável cpf que contém um number, mas como ela é um any, o TS não reclama porque ela pode conter qualquer atributo, inclusive uma string
apresentarCPF(cpf); 
