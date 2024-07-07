import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form, Button } from 'react-bootstrap';

const SignupForm = ({ handleModalClose }) => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
            handleModalClose();
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group>
                <Form.Label htmlFor='username'>Username</Form.Label>
                <Form.Control
                    type='text'
                    name='username'
                    placeholder='Your username'
                    value={formState.username}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control
                    type='email'
                    name='email'
                    placeholder='Your email'
                    value={formState.email}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                    type='password'
                    name='password'
                    placeholder='Your password'
                    value={formState.password}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button type='submit'>Sign Up</Button>
        </Form>
    );
};

export default SignupForm;