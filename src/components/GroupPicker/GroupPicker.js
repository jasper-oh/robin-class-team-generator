import React from 'react';
import { Button, Chip, Grid, Link, Paper, TextField, Typography, withStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  form: {
    marginTop: '1rem'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    backgroundColor: '#30e3ca',
    color: theme.palette.text.secondary
  },
  margin: {
    margin: theme.spacing.unit
  },
  chip: {
    color: '#e4f9f5',
    backgroundColor: '#11999e',
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  }
});

const GroupPicker = ({ onDelete, onSubmit, onChange, values, groups, classes }) => {
  const { groupName } = values;

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={24}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography component="h5" variant="h5" gutterBottom>
              {groups.length === 0 ? 'Create a group' : 'Select a group'}
            </Typography>

            {groups.map(group => (
              <Link component={RouterLink} key={group.id} to={`/group/${group.id}`}>
                <Chip
                  key={group.id}
                  label={group.name}
                  color="primary"
                  className={classes.chip}
                  onDelete={onDelete(group.id, group.members.length)}
                />
              </Link>
            ))}
            <div className={classes.form}>
              <form onSubmit={onSubmit}>
                <TextField
                  value={groupName}
                  onChange={onChange}
                  placeholder="Enter group name"
                  type="text"
                  name="groupName"
                  required
                />
                <Button size="small" type="submit" className={classes.margin}>
                  Add
                </Button>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(GroupPicker);
