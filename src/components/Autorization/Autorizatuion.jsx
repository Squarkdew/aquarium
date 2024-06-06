import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import cls from "./Autorization.module.scss";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Registration = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={cls.registrationContainer}>
            <form onSubmit={handleSubmit}>
                <div className={cls.box}>
                    <h1>Авторизация</h1>
                    <TextField
                        id="standard-basic"
                        label="Электронная почта"
                        variant="standard"
                        type='email'
                        {...register("email", { required: true })}
                    />
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <button className={cls.registerButton}>Зарегистрироваться</button>
                    <Link to={"/registration"} className={cls.link}>Создать аккаунт</Link>
                </div>
            </form>
            <div>
            </div>
        </div>
    );
};

export default Registration;
