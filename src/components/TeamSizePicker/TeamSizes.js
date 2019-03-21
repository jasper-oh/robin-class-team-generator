import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import shuffle from '../../utils/shuffle';
import chunkArray from '../../utils/chunckArray';

const styles = {
  card: {
    margin: '1rem'
    // minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const TeamSizes = ({ size, members, classes }) => {
  const teams = chunkArray(shuffle(members), size);
  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={24}>
      {teams.map((team, index) => (
        <Card key={index} className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Team {index + 1}
            </Typography>
            <Divider />
            <List dense={true}>
              {team.map(member => (
                <ListItem key={member.id}>
                  <ListItemText primary={member.name} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(TeamSizes);
