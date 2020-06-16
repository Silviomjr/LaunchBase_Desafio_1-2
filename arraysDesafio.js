const listaProgramadores = {
    nome: "Carlos",
    idade: "32",
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${listaProgramadores.nome} tem ${listaProgramadores.idade} anos e usa a tecnologia ${listaProgramadores.tecnologias[0].nome} com especialidade em ${listaProgramadores.tecnologias[0].especialidade}.`);

