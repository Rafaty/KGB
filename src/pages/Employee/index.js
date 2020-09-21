import React from 'react';
import { styles } from './styles.js';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CardEmployee from'../../components/Cards';


const Employees = () => {

    const classes = styles();

    return (
        <div className='page'>
            <div className='headerPage'>
            </div>

            <div className='components'>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Pesquisar..."
                        inputProps={{ 'aria-label': 'Pesquisar funcionário' }}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>

                <div className='cards'>
                    <CardEmployee/>
                    <CardEmployee/>
                    <CardEmployee/>
                </div>
            </div>
        </div>
    )
}

export default Employees