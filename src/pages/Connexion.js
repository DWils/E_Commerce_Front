import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link , useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import TextError from '../components/TextError';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

const initialValues = {
    password: '',
    rememberMe: 'false',
    username: ''
}



const validationSchema = Yup.object({
    password: Yup.string().required('Required'),
    username: Yup.string().required('Required')
})

export default function Connexion() {
    const classes = useStyles();
    const history = useHistory();

    const onSubmit = values => {
        console.log('Form data', values);
        axios
            .post("http://localhost:8080/api/authenticate", {
                password: values.password,
                rememberMe: values.rememberMe,
                username: values.username
            }).then(res => {
                console.log(res.data.id_token);
                localStorage.setItem("JWT",res.data.id_token);
                history.push("/");
                window.location.reload();
            })
    }

    return (

        <Container component="main" maxWidth="xs">
            <Card className={classes.root}>
                <CardContent>
                    <div>
                        <Typography component="h1" variant="h5">
                            Connexion
                        </Typography>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            <Form>
                                <div className="form-control">
                                    <label htmlFor="username">Identifiant</label>
                                    <Field type="text" id="username" name="username" />
                                    <ErrorMessage name='username' component={TextError} />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="password">Mot de passe</label>
                                    <Field type="password" id="password" name="password" />
                                    <ErrorMessage name='password' component={TextError} />
                                </div>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Se souvenir de moi"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Se connecter
                                </Button>
                            </Form>
                        </Formik>
                        <Grid container>
                            {/* <Grid item xs>
                                <Link to="./createaccount">
                                    mot de passe oublié ?
                                </Link>
                            </Grid> */}
                            <Grid item>
                                <Link to="#">
                                    {"Pas encore de compte ? Inscription"}
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
            </Card> </Container>
    );
}
