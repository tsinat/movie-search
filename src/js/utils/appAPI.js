var AppActions = require('../actions/AppActions');

module.exports = {
    searchMovies: function(movie) {
        $.ajax({
            url: 'http://www.omdbapi.com/?s=' +movie.title,
            dataType: 'json',
            cache: false,
            success: function() {
                AppActions.receiveMovieResults(data.search);
            }.bind(this),
            error: function(xhr, status, err) {
                alert(err);
            }.bind(this)
        });
    }
}
