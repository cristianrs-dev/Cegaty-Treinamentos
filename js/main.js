import cursos  from "./cursos.js";
const container = document.getElementById("cursos-container");

cursos.forEach(curso => {
            const col = document.createElement("div");
            col.className = "col-md-4";

            col.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${curso.titulo}</h5>
                        <p class="card-text">${curso.descricao}</p>
                        <p class="card-text"><strong>Carga Horária:</strong> ${curso.cargaHoraria}</p>
                        <p class="card-text"><strong>Preço:</strong> ${curso.preco}</p>
                        <a href="https://wa.me/5592991191637?text=Tenho%20interesse%20no%20curso%20${encodeURIComponent(curso.titulo)}" target="_blank" class="btn btn-success">Inscreva-se</a>
                    </div>
                </div>
            `;

            container.appendChild(col);
        });