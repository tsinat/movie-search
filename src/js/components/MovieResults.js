var React = require('react');
var Move = require('./Movie.js');

var MovieResults = React.createClass({
    render: function() {
        return (
            <div>
                <h3 className='text-center'> Results</h3>
                {this.props.movies.map(function(movie, index){
                    return (
                        <Movie movie={movie} key={index} />
                    )
                })
            }
            </div>
        )
    }
});

module.exports = MovieResults;
