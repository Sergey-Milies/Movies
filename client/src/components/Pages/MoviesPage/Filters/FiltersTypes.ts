import {SelectChangeEvent} from "@mui/material";

export interface IFilters {
    date: string;
    popularity: string | number;
    onChangeDate: (e: SelectChangeEvent<HTMLSelectElement>) => void;
    onChangePopularity: (e: SelectChangeEvent<HTMLSelectElement>) => void;
}