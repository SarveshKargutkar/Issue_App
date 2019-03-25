import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Card, TextField, CardContent, Button, Grid } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete'

const styles = theme => ({
  root: {
    height: "100vh",
    overflow: "hidden",
    position: "relative"
  },
  login: {
    color: "white"
  },
  container: {
    margin: '0',
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)"
  },
  card: {
    textAlign: 'center',
    height: "100%",
    backgroundColor: "white",
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit(event) {
    if (this.state.username === "sarvesh" && this.state.password === "1234") {
      this.setState({ username: '' })
      this.setState({ password: '' })
      return alert('Success')
    }
    alert('Error')
  }

  render() {
    return (
      <div className={this.props.classes.root} >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={this.props.classes.login}  >
              Login
          </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={24} className={this.props.classes.container}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <Card className={this.props.classes.card}>
              <CardContent>
                <form  >
                  <TextField
                    onChange={this.handleChange}
                    label="Username"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                  />
                  <br />
                  <TextField
                    onChange={this.handleChange}
                    label="Password"
                    name="password"
                    placeholder="Password "
                    value={this.state.password}
                  />
                  <br />
                  <Button variant="contained" color="primary" onClick={this.handleSubmit} >
                    Add Todo</Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div >
    )
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login)