import React from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const transactions = [
        {id: 1, type: 'Income', category: 'Salary', amount: 100, date: new Date()},
        {id: 2, type: 'Expense', category: 'Food', amount: 100, date: new Date()},
        {id: 3, type: 'Income', category: 'Salary', amount: 100, date: new Date()},
        {id: 4, type: 'Expense', category: 'Books', amount: 100, date: new Date()}
    ];
  return (
    <MUIList dense={false} className={classes.list}>
        {transactions?.map((transaction) =>(
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                        <MoneyOff />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label='delete' onClick=''>
                        <Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}

    </MUIList>
  )
}

export default List;