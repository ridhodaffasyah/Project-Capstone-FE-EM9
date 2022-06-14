import { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { login as _login } from '../store/actions/auth';
import { connect } from 'react-redux';

const Signup = ({ login }: any) => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () => setShow(!show);

  const onSubmit = (data: any) => login(data);
  return (
    <div>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>
      <div className="main">
        <div className="left-side">
          <img className="img-left" src="/assets/images/img.png" alt="images" />
        </div>
        <div className="right-side">
          <div className="form-control">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl marginBottom={4} isRequired>
                <FormLabel htmlFor="name" fontWeight={600} fontSize={16}>
                  Nama Lengkap
                </FormLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter Name"
                  {...register('name')}
                  height="37"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="email" fontWeight={600} fontSize={16}>
                  Email
                </FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  {...register('email')}
                  height="37"
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel
                  htmlFor="password"
                  marginTop={4}
                  fontWeight={600}
                  fontSize={16}
                >
                  Password
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? 'text' : 'password'}
                    {...register('password')}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel
                  htmlFor="password"
                  marginTop={4}
                  fontWeight={600}
                  fontSize={16}
                >
                  Konfirmasi Password
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? 'text' : 'password'}
                    {...register('confirmPassword')}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                width="100%"
                textTransform={'uppercase'}
                marginTop={5}
                backgroundColor="#39A2DB"
                color="white"
                variant="solid"
                type="submit"
              >
                Daftar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, {
  login: _login,
})(Signup);
