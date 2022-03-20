import { useCallback } from "react";
import { Button, Form } from "wbox-forms";
import { TextField, PasswordField, SelectField, RadioButton, TextArea, Checkbox, DateField } from "wbox-forms-tailwindcss";

export function RegistrationForm() {
    const countries = [
        { text: 'Iraq', value: 1 },
        { text: 'Palestine', value: 2 },
        { text: 'Ukraine', value: 3 },
        { text: 'Italy', value: 4 },
        { text: 'Japan', value: 5 }
    ];
    const genders = [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ];

    const submitOptions = {
        url: 'http://localhost:8080/users',
        onSuccess: res => console.log(res),
        onFail: res => console.log(res)
    };

    return <Form serviceOptions={{
        submit: submitOptions
    }}>
        <TextField name='name' placeholder="Name" />
        <PasswordField name='password' placeholder="Password" />
        <TextField name='email' placeholder="Email" />
        <DateField name='birthDate' placeholder="Birth Date" />
        <SelectField name='country' options={countries} />
        <RadioButton name='gender' options={genders} />
        <TextArea name='bio' rows={5} placeholder="Tell us about your self" />
        <Checkbox name='agreeToPolicy' text="Agree to policy" />
        <br /><br />
        <Button render={serviceFactory => {
            const onClick = () => serviceFactory.createSubmitService().submit();
            return <button onClick={onClick} className="p-4 bg-orange-500 rounded text-white">
                Create Account
            </button>
        }} />
    </Form>
}