

var AppActions = {
    searchMovies: function(movie) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        });
    }
}

module.exports = AppActions;
