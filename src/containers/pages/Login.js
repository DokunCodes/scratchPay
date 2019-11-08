import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snack from '../../components/layouts/Snack'

/**
 * Copyright for scratchpay
 *
 * @return {component} 
 * @public
 */

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://scratchpay.com/">
        Scratchpay
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/**
 * Material UI theme style settings
 * @param {*} theme 
 * {@link https://material-ui.com/}
 */
const styles = theme => ({

    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logo: {
      margin: theme.spacing(1),
      width: 100,
      height: 100,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });




/**
 * Login Component
 */
class Login extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      email:'',
      password: '',
      opensnack: false,
      message: ''
     }
  }

  /**
   * @param {event}
   * Set email & password state
   */
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /**
   * @param {e}
   * Validate login
   * Email: admin@scratchpay.com
   * Password: Secret
   */

  login = (e) =>{
    e.preventDefault();
    this.setState({ loading: true })
    if(this.state.email !== 'admin@scratchpay.com' && this.state.password !== 'secret'){
      this.setState({opensnack:true, message: 'Invalid email & password combination', loading: false})

      setTimeout (()=>{ this.setState({opensnack:false})},3000);
    }
    else{
      window.localStorage.setItem('loggedIn', true);
      window.location.href = '/users';
    }
  

  }


        render(){
          const { classes } = this.props;
        return (
    
            <Container maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
              <img alt="scratch pay logo" src="/paw_symbol.png" className={classes.logo} />
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
        
                <form className={classes.form} onSubmit={this.login} >
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.handleChange}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >

                  { this.state.loading ?
                    <CircularProgress color="light" size={16}  /> : 
                    <Typography>Sign In</Typography>}
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>

                  <Snack open={this.state.opensnack} message={this.state.message} />
                </form>
              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Container>
          
          );

        }
  
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login)

