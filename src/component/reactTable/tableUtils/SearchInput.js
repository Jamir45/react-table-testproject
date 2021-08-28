import React from "react";
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { styled } from '@material-ui/core/styles'

const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
  padding: '15px 20px 0px 20px',
  borderBottom: '1px solid black'
})

const useStyles = makeStyles(theme => ({
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: '35px',
    backgroundColor: 'lightgrey',
    height: '45px',
    '&:hover': {
      backgroundColor: '#e6e6e6',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}))

const SearchInput = ({ inputValue, setInputValue }) => {
  const classes = useStyles()

  return (
    <Header>
      <h3>React Data Table</h3>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          value={inputValue || ''}
          onChange={e => setInputValue(e.target.value)}
          placeholder={`records...`}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </Header>
  );
};

export default SearchInput;
