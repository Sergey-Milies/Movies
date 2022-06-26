import {SelectChangeEvent} from "@mui/material";

export interface IFilters {
    date: string;
    popularity: string | number;
    language: string;
    onChangeDate: (e: SelectChangeEvent<HTMLSelectElement>) => void;
    onChangePopularity: (e: SelectChangeEvent<HTMLSelectElement>) => void;
    onChangeLanguage: (e: SelectChangeEvent<HTMLSelectElement>) => void;
}