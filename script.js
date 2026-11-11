const films = [
  { titre: "Matrix", genre: "Science-fiction", vu: true },
  { titre: "Le Voyage de Chihiro", genre: "Animation", vu: false },
  { titre: "Inception", genre: "Science-fiction", vu: false },
  { titre: "Intouchables", genre: "Comédie", vu: true },
  { titre: "Gladiator", genre: "Action", vu: false }
];

const liste = document.querySelector("#liste");

films.forEach((film, key) => {
    // Créer le li général
    const li = document.createElement("li");
    li.classList.add("film");
    
    if(film.vu) {
        li.classList.add("vu");
    }

    // Créer le titre
    const titre = document.createElement("span");
    titre.classList.add("titre");
    titre.textContent = film.titre;

    // Créer le genre
    const genre = document.createElement("span");
    genre.classList.add("genre");
    genre.textContent = film.genre;

    // Bouton de suppression
    const button = document.createElement("button");
    button.textContent = "Supprimer"
    button.addEventListener("click", () => {
        // Suppression de la <li>
        li.remove();

        // Suppression de l'élément dans la liste de film
        // const key = films.indexOf(film) <== Dans le cas où on n'utilise pas key dans le foreach
        films.splice(key, 1)
    })

    // Assemble le li
    li.appendChild(titre);
    li.appendChild(genre);
    li.appendChild(button);

    // Mettre le li dans le ul
    liste.appendChild(li);

})