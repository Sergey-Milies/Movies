import {SelectChangeEvent} from "@mui/material";

export interface IFilters {
    date: string;
    popularity: string | number;
    language: string;
    vote_count: string;
    onChangeDate: (e: SelectChangeEvent<HTMLSelectElement>) => void;
    onChangePopularity: (e: SelectChangeEvent<HTMLSelectElement>) => void;
    onChangeLanguage: (e: SelectChangeEvent<HTMLSelectElement>) => void;
    onChangeVoteCount: (e: SelectChangeEvent<HTMLSelectElement>) => void;
}