import { FC } from "react";
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import {IUISelect} from "./UISelectType";

const UISelect: FC<IUISelect> = ({ label , value, onChangeSelect, options }) => {
    return (
        <FormControl sx={{ minWidth: '100%' }} size="small">
            <InputLabel id="demo-select-small">{ label }</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Date"
                value={value}
                onChange={onChangeSelect}
            >
                {options.map((option) => ( <MenuItem key={option.value} value={ option.value }>{ option.name }</MenuItem> ))}
            </Select>
        </FormControl>
    )
}

export default UISelect;