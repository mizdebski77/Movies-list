import React from 'react';
import { Header, CardImage, MovieTile, MoviesList, Title, Wrapper, Informations, MovieTitle } from './styledMovieList';
import bg from '../../common/Images/moviesListBg.jpg';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../common/Loader/loader';
import { Error } from '../../common/Error/error';

interface Movie {
    Title: string,
    Poster: string,
};

export const MovieList = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['offers'],
        queryFn: () => fetch("http://www.omdbapi.com/?i=tt3896198&apikey=2d646814")
            .then((response: Response) => response.json())
    });

    console.log(data);

    return (
        <Wrapper>
            {isLoading ? <Loader /> : error ? <Error /> : (
                <>
                    <Header>
                        <Title> Movies List </Title>
                    </Header>

                    <MoviesList>
                        {data.map((movie: Movie) => (
                            <MovieTile key={movie.Title}>
                                <CardImage src={movie.Poster} />
                                <Informations>
                                    <MovieTitle>{movie.Title}</MovieTitle>
                                    {/* Additional information can go here */}
                                </Informations>
                            </MovieTile>
                        ))}
                    </MoviesList>
                </>
            )}
        </Wrapper>
    );
};
