import {Button} from '@mui/material';
import {FormWrapper, PageWrapper} from './Login.styled'
import {FormInputText} from '../FormComponents/FormInputText'
import { FormProvider, useForm } from "react-hook-form";

interface FormInputData {
    login: string;
    password: string;
  }
  
  const defaultValues = {
    login: '',
    password: '',
  };

  const onSubmit = (data: FormInputData) => console.log(data);

export function Login() {
    const formMethods = useForm<FormInputData>({ defaultValues: defaultValues });
    const { handleSubmit, reset, control, setValue, watch } = formMethods;

    return (
      <PageWrapper>
            <FormWrapper>
                <FormInputText label="Login" name="login" control={control} type={'email'}/>
                <FormInputText label="Password" name="password" control={control} type={'password'}/>
                <Button variant="contained" size='large' color='success' onClick={handleSubmit(onSubmit)}>Log in</Button>
            </FormWrapper>
       </PageWrapper>
    );
  }
  