import React from 'react';
import { useForm } from 'react-hook-form';

export default function Example() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="example" ref={register({ required: true })} />

            {errors.example && <span>This field is required</span>}

            <button type="submit">Submit</button>
        </form>
    );
}
