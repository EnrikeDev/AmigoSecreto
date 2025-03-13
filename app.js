// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
        let amigos = []; // Array para almacenar los nombres

        function agregarAmigo() {
            const input = document.getElementById("amigo");
            const nombre = input.value.trim();

            if (nombre === "") {
                alert("Por favor, inserte un nombre.");
                return;
            }

            amigos.push(nombre);
            actualizarListaAmigos();
            input.value = ""; // Limpiar el campo de entrada
        }

        function actualizarListaAmigos() {
            const lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            amigos.forEach((amigo, index) => {
                const li = document.createElement("li");
                li.textContent = amigo;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length === 0) {
                alert("No hay amigos en la lista para sortear.");
                return;
            }
            const indiceAleatorio = Math.floor(Math.random() * amigos.length);
            const amigoSorteado = amigos[indiceAleatorio];

            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<li>🎉 ${amigoSorteado} es el amigo secreto 🎉</li>`;
        }
