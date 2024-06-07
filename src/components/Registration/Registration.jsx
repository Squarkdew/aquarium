import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import cls from "./Registration.module.scss";
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
    const [mess, setMess] = React.useState()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={cls.registrationContainer}>
            <form onSubmit={handleSubmit()} className={cls.form}>
                <div className={cls.box}>
                    <h1>Йо хо хо зарегайся!</h1>


                    {/* Емайл */}
                    <TextField
                        id="standard-basic"
                        label="Электронная почта"
                        variant="standard"
                        type='email'
                        {...register("email", { required: "Поле не должно быть пустой" })}
                        error={errors.email && <span>{errors.email.message}</span>}
                    />
                    {errors.email && <span className={cls.rem}>{errors.email.message}</span>}



                    {/* Пароль */}
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            {...register("password", {
                                required: "Поле не должно быть пустой",
                                minLength: {
                                    value: "8",
                                    message: "Пароль должен быть не менее 8 символов"
                                },
                                maxLength: {
                                    value: "20",
                                    message: "Пароль не должен превышать 20 символов"
                                }
                            })}
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
                            error={errors.password && (
                                <FormHelperText>
                                    <span className={cls.rem}>{errors.password.message}</span>
                                </FormHelperText>
                            )}
                        />
                    </FormControl>
                    {errors.password && <span className={cls.rem}>{errors.password.message}</span>}

                    {/* Подтвердите пароль */}
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Подтвердите пароль</InputLabel>
                        <Input
                            // {...register("confirmPassword")}
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
                        // error={errors.mess &&
                        //     (
                        //         <FormHelperText>
                        //             <span className={cls.rem}>{mess}</span>
                        //         </FormHelperText>
                        //     )
                        // }
                        />
                    </FormControl>
                    {/* {mess && <span className={cls.rem}>{mess}</span>} */}
                </div>
                <button className={cls.registerButton}>Зарегистрироваться</button>
                <Link to={"/autorization"} className={cls.link}>У вас уже есть аккаунт? Войти</Link>
            </form>
            <div>
            </div>
        </div>
    );
};

export default Registration;
