$('.delete-link').on('click', function(e) {
    e.preventDefault();
    console.log('delete pressed');
    var element = $(this);
    var pokemonURL = element.attr('href');
    $.ajax({
        method: 'DELETE',
        url: pokemonURL
    }).done(function(data) {
        window.location = '/pokemon';
    });
});
