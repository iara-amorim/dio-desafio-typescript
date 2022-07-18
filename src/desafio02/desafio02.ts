enum Profissao {
  A = "Atriz",
  B = "Padeiro",
  C = "Limpador de Chaminé",
}

interface Pessoa {
  nome: String;
  idade: Number;
  profissao: Profissao;
}

const maria: Pessoa = {
  nome: "Maria",
  idade: 29,
  profissao: Profissao.A,
};

const roberto: Pessoa = {
  nome: "Roberto",
  idade: 19,
  profissao: Profissao.B,
};

const laura: Pessoa = {
  nome: "Laura",
  idade: 32,
  profissao: Profissao.C,
};

const carlos: Pessoa = {
  nome: "Roberto",
  idade: 19,
  profissao: Profissao.B,
};
