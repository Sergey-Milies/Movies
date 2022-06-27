import {IMovies} from "../Types/Movies";

export const dateFilterAction = (filtered_movies: IMovies[], date: string) => {
    return filtered_movies.filter(movie => {
        const movie_date = movie.release_date.split('-');
        if(date == movie_date[0]) {
            return movie;
        }
    });
}

export const popularityFilterAction = (filtered_movies: IMovies[], popularity: any) => {
    return filtered_movies.filter(movie => {
        const movie_popularity = popularity.split('-');
        if(movie.popularity >= movie_popularity[0] && movie.popularity <= movie_popularity[1]) {
            return movie;
        }
    });
}

export const languageFilterAction = (filtered_movies: IMovies[], language: string) => {
    return filtered_movies.filter(movie => {
        if(movie.original_language === language) {
            return movie;
        }
    });
}

export const voteCountFilterAction = (filtered_movies: IMovies[], vote_count: any) => {
    return filtered_movies.filter(movie => {
        const movie_vote_count = vote_count.split('-');
        if(movie.vote_count >= movie_vote_count[0] && movie.vote_count <= movie_vote_count[1]) {
            return movie;
        }
    });
}