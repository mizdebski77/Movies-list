import React, { useState, useEffect } from 'react';
import { Wrapper, Header, Title, Table, TableHeader, TableRow, TableCell, SearchWrapper, InputWrapper, Image, Input, Select, TableWrapper } from './styledMovieList';
import bg from '../../common/Images/moviesListBg.jpg';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../../common/Loader/loader';
import { Error } from '../../common/Error/error';
import search from '../../common/Images/search.svg';

interface Movie {
    Title: string,
    Year: string,
    Country: string,
    Type: string,
    Poster: string,
};

export const MovieList = () => {
    const [searchTerm, setSearchTerm] = useState('Guardians');
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
                <SearchWrapper>
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
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                            <option value="episode">Episode</option>
                        </Select>
                    </label>
                </SearchWrapper>
            </Header>

            <TableWrapper>
                {isLoading ? <Loader /> : error ? <Error /> : (
                    <Table>
                        <thead>
                            <TableRow>
                                <TableHeader>Poster</TableHeader>
                                <TableHeader>Title</TableHeader>
                                <TableHeader>Year</TableHeader>
                                <TableHeader>Country</TableHeader>
                                <TableHeader>Type</TableHeader>
                            </TableRow>
                        </thead>
                        <tbody>
                            {data?.Search?.map((movie: Movie) => (
                                <TableRow key={movie.Title}>
                                    <TableCell>
                                        <img
                                            src={movie.Poster !== "N/A" ? movie.Poster : bg}
                                            alt={movie.Title}
                                            style={{ width: '80px', height: '120px', borderRadius: '8px' }}
                                        />
                                    </TableCell>
                                    <TableCell>{movie.Title}</TableCell>
                                    <TableCell>{movie.Year}</TableCell>
                                    <TableCell>{movie.Country || 'Unknown'}</TableCell>
                                    <TableCell>{movie.Type}</TableCell>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                )}
            </TableWrapper>


        </Wrapper>
    );
};
