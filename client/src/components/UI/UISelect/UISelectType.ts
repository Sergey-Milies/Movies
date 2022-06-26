import {SelectChangeEvent} from "@mui/material";

interface IOptions {
    value: string | number;
    name: string;
}

export interface IUISelect {
    label: string;
    value: any;
    onChangeSelect: (e: SelectChangeEvent<HTMLSelectElement>) => void;
    options: IOptions[];
}