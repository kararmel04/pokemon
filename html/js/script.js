// Fonction exécutée quand le DOM est complètement chargé
$(document).ready(function() {
    // Initialisation des données de base
    Type.fill_types();        // Charger tous les types de Pokémon
    Attack.fill_attacks();    // Charger toutes les attaques
    Pokemon.fill_pokemons();  // Charger tous les Pokémon

    const $table = $('table');
    $('.hover').remove();  // Supprimer la ligne de test

    // Filtrer les doublons de Pokémon (garder un seul par ID)
    const seenIds = new Set();
    const filteredPokemons = Pokemon.all_pokemons.filter(pokemon => {
        if (!seenIds.has(pokemon._id)) {
            seenIds.add(pokemon._id);
            return true;  // Conserver si l'ID n'a pas été vu
        }
        return false;     // Ignorer si l'ID est déjà présent
    });

    // Variables de pagination
    let currentPage = 0;  // Page courante (commence à 0)
    const pageSize = 25;  // Nombre de Pokémon par page

    // Fonction pour afficher une page spécifique
    function renderPage(page) {
        // Calculer l'intervalle des Pokémon à afficher
        const start = page * pageSize;
        const end = start + pageSize;
        const pagePokemons = filteredPokemons.slice(start, end);
        
        // Supprimer les lignes existantes
        $('table tr.hover').remove();
        
        // Ajouter les Pokémon de la page courante au tableau
        pagePokemons.forEach(pokemon => {
            const $tr = $('<tr></tr>').addClass('hover');

            // Ajouter les cellules du tableau
            $('<td></td>').text(pokemon._id).appendTo($tr);
            $('<td></td>').text(pokemon._name).appendTo($tr);
            $('<td></td>').text('1').appendTo($tr);
            $('<td></td>').text(pokemon._types.join(', ')).appendTo($tr);
            $('<td></td>').text(pokemon._sta).appendTo($tr);
            $('<td></td>').text(pokemon._atk).appendTo($tr);
            $('<td></td>').text(pokemon._def).appendTo($tr);

            // Ajouter l'image du Pokémon
            const $imgTd = $('<td></td>');
            const idStr = String(pokemon._id).padStart(3, '0');  // Format ID sur 3 chiffres
            $('<img>')
                .attr('src', `webp/images/${idStr}.webp`)
                .attr('alt', `${pokemon._name} image`)
                .attr('title', `${pokemon._name} image`)
                .attr('width', 32)
                .attr('height', 32)
                .appendTo($imgTd);
            $imgTd.appendTo($tr);

            $tr.appendTo($table);
        });

        // Mettre à jour l'indication de page
        $('#page-info').text(`Page ${currentPage + 1} / ${Math.ceil(filteredPokemons.length / pageSize)}`);
        
        // Activer/désactiver les boutons selon la position
        $('#prev-btn').prop('disabled', currentPage === 0);  // Désactiver si première page
        $('#next-btn').prop('disabled', currentPage >= Math.ceil(filteredPokemons.length / pageSize) - 1);  // Désactiver si dernière page
    }

    // Gestion du bouton "Précédent"
    $('#prev-btn').on('click', function() {
        if (currentPage > 0) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    // Gestion du bouton "Suivant"
    $('#next-btn').on('click', function() {
        if (currentPage < Math.ceil(filteredPokemons.length / pageSize) - 1) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    // Afficher la première page au chargement
    renderPage(currentPage);

    // Trie la colonne cliquée par ordre alphabétique 
    function sortCol(){
        
    }

    $('th').on('click', function(){
        sortCol();
    });
});