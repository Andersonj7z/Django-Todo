//Função que pergunta ao usuário se ele quer mesmo excluir a tarefa

document.querySelectorAll(".delete-btn").forEach(
    btn => {
        btn.addEventListener("click", function(e){
            e.preventDefault();

            const delLink = this.getAttribute("href");

            if(delLink && confirm("Quer deleter esta tarefa?"))
            {
                window.location.href = delLink;
            }
        });
    }
)

//Função para Pesquisar
document.getElementById("search-bt").addEventListener("click", function(){
    document.getElementById("search").onsubmit();
});