import { Autocomplete, TextField } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const SearchInput = () => {
    const navigate = useNavigate();
    let {data: playlists} = useStoreState(state => state.playlists);

    playlists = Object.keys(playlists).reduce((acc, cur) => {
        acc.push({
            id: playlists[cur].playlistID,
            label: playlists[cur].playlistTitle,
        })
        return acc;
    }, []);

    const options = playlists.map((option) => {
        const firstLetter = option.label[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
    });

    return (
        <Search>
            <Autocomplete
                placeholder="Search…"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                // getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField {...params} placeholder='Search' />}
                renderOption={(props, option) => {
                    return (
                      <li {...props}>
                        {option.label}
                      </li>
                    )
                  }}
                sx={{width: '30ch'}}
                onChange={(_event, value) => {
                    if(!value) return;
                    navigate(`/player/${value.id}`);
                }}
            />
        </Search>
    )
};

export default SearchInput;