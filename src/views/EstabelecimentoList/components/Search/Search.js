import { makeStyles } from '@material-ui/styles';
import { SearchInput } from 'components';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce/lib';

const useStyles = makeStyles(theme => ({
  root: {},
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const Search = props => {
  const { onChange, disabled } = props;

  const classes = useStyles();

  const [text, setText] = useState('');
  const [search] = useDebounce(text, 500);

  useEffect(() => {
    onChange(search);
  }, [onChange, search]);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <SearchInput
        className={classes.searchInput}
        disabled={disabled}
        onChange={handleChange}
        placeholder="Localizar empresas"
        value={text}
      />
    </div>
  );

}

export default Search;
