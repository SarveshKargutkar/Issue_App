import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Button, Grid, FormControl, InputBase } from '@material-ui/core';
import '../css/app.css';
import history from '../history'

const styles = theme => ({
  root: {
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#2196F3",
  },
  login: {
    marginBottom: "20px",
    color: "#2196F3",
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
  button: {
    height: "45px",
    backgroundColor: "#2196F3",
    width: "100%",
  },
  form: {
    padding: " 0 50px"
  },
  formcontrol: {
    width: "100%",
    height: "45px",
    marginBottom: "20px",
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    height: "45px",
    padding: "0 0 0 10px  ",
    // transition: theme.transitions.create(['border-color', 'box-shadow']),

    '&:focus': {
      borderRadius: 4,
      borderColor: '#2196F3',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
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
      this.setState({ username: '', password: '' })
      // this.setState({ password: '' })
      return history.push('/mainpage')
    }
    alert('Error')
  }

  render() {
    return (
      <div className={this.props.classes.root} >
        <Grid container spacing={24} className={this.props.classes.container}>
          <Grid item xs={3} md={4} >
          </Grid>
          <Grid item xs={6} md={4} >
            <Card className={this.props.classes.card}>
              <CardContent>
                <Typography variant="h5" className={this.props.classes.login}>
                  Account Login
                </Typography>
                <form className={this.props.classes.form} >
                  <FormControl className={this.props.classes.formcontrol}
                    label="Username"
                  >
                    <InputBase
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      id="bootstrap-input"
                      classes={{
                        root: this.props.classes.bootstrapRoot,
                        input: this.props.classes.bootstrapInput,
                      }}
                    />
                  </FormControl>
                  <br />
                  <FormControl className={this.props.classes.formcontrol}                 >
                    <InputBase
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      classes={{
                        root: this.props.classes.bootstrapRoot,
                        input: this.props.classes.bootstrapInput,
                      }}
                    />
                  </FormControl>
                  <br />
                  <Button variant="contained" color="primary" onClick={this.handleSubmit} className={this.props.classes.button} >
                    LOGIN</Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div >
    )
  }
}

export default withStyles(styles)(Login)