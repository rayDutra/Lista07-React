import AvaliacaoCliente from "./AvaliacaoCliente";

export default function Depoimentos() {

    const avaliacoes = [
        { foto: "foto01.jpg", nome: "Ana Bruck", avaliacao01: "\"Eu recomendo a Letícia,pois o atendimento dela fez toda a diferença\"",
         avaliacao02: "\"A escolha de um imóvel,no caso uma casa,nåo é uma tarefa fácil.A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queriamos\"" },
        { foto: "foto02.jpg", nome: "Dani Shutz", avaliacao01: "\"Eu recomendo a Letícia,pois o atendimento dela fez toda a diferença\"",
        avaliacao02: "\"A escolha de um imóvel,no caso uma casa,nåo é uma tarefa fácil.A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queriamos\"" },
        { foto: "foto03.jpg", nome: "Bia Lobo",avaliacao01: "\"Eu recomendo a Letícia,pois o atendimento dela fez toda a diferença\"",
        avaliacao02: "\"A escolha de um imóvel,no caso uma casa,nåo é uma tarefa fácil.A escolha de um profissional qualificado poupou o nosso tempo e nos ajudou a encontrar o que realmente queriamos\"" },
    ]

    return (
        <section>
            {avaliacoes.map((avaliacao) => (
                <AvaliacaoCliente {...avaliacao} key={avaliacao.id} />  
            ))}
        </section>
    );s

}