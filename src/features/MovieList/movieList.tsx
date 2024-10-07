import React, { useState, useEffect } from 'react';
import { Header, CardImage, MovieTile, MoviesList, Title, Wrapper, Informations, MovieTitle, InputWrapper, Image, Input } from './styledMovieList';
import bg from '../../common/Images/moviesListBg.jpg';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../common/Loader/loader';
import { Error } from '../../common/Error/error';
import search from '../../common/Images/search.svg';

interface Movie {
    Title: string,
    Poster: string,
};

export const MovieList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [type, setType] = useState('movie');

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['movie', searchTerm, type],
        queryFn: () => fetch(`http://www.omdbapi.com/?s=${searchTerm}&type=${type}&apikey=2d646814`)
            .then((response: Response) => response.json()),
    });

    useEffect(() => {
        if (searchTerm.length > 1) {
            refetch();
        }
    }, [searchTerm, type, refetch]);


    return (
        <Wrapper>
            <Header>
                <Title>Movies List</Title>
                <div>

                    <InputWrapper>
                        <Image src={search} alt="search" />
                        <Input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            placeholder="Enter movie title"

                        />
                    </InputWrapper>

                    <label>
                        Type:
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="movie">Film</option>
                            <option value="series">Serial</option>
                            <option value="episode">Episode</option>
                        </select>
                    </label>
                </div>
            </Header>

            {isLoading ? <Loader /> : error ? <Error /> : (
                <MoviesList>
                    {data?.Search?.map((movie: Movie) => (
                        <MovieTile key={movie.Title}>
                            <CardImage src={movie.Poster !== "N/A" ? movie.Poster : bg} />
                            <Informations>
                                <MovieTitle>{movie.Title}</MovieTitle>
                            </Informations>
                        </MovieTile>
                    ))}
                </MoviesList>
            )}
        </Wrapper>
    );
};
