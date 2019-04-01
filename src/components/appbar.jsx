import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import history from '../history'
const styles = theme => ({
  root: {
    // height: "100vh",
    // overflow: "hidden",
  },
  appbar: {
    backgroundColor: "#24292E",
  },
  issues: {
    color: "white",
    flexGrow: 1,
  },
  button: {
    backgroundColor: "#24292E"
  }
});

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handlelogout = this.handlelogout.bind(this)
  }
  handlelogout() {
    history.push('/')
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar className={this.props.classes.appbar} position="static">
          <Toolbar>
            <Typography variant="h6" className={this.props.classes.issues}>
              Issues
            </Typography>
            <Button color="inherit" variant="outlined" onClick={this.handlelogout}
              className={this.props.classes.button}>Logout</Button>
          </Toolbar>
        </AppBar>
        
      </div>
    )
  }
}

export default withStyles(styles)(Appbar)