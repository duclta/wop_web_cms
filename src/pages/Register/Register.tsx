import { MainLogo } from "@/components/app";
import { Wrapper } from "@/components/base/Wrapper";
import { routerPaths } from "@/routers";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useRegister } from "./hooks";

export const Register = (props: any) => {
  const {
    form: { registerForm },
  } = useRegister();

  return (
    <>
      <Helmet>
        <title>Register - WOP CMS</title>
      </Helmet>
      <Wrapper>
        <Box mt={"100px"} mb="50px">
          <Center
            mt="15px"
            fontSize="35px"
            fontWeight="600"
            mb="50px"
            letterSpacing="2px"
          >
            <span>Join the</span>
            <MainLogo fontSize="35px" />
            <span>Community</span>
          </Center>
          <Center w="100%">
            <Box w="100%" maxW="450px" mb="30px">
              <form onSubmit={registerForm.methods.handleSubmitRegisterForm()}>
                <Box mb="30px">
                  <FormControl mb="20px">
                    <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                      Email
                    </FormLabel>
                    <Input
                      name="username"
                      placeholder="Enter your email"
                      ref={registerForm.hook.register({ required: true })}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                      Password
                    </FormLabel>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      ref={registerForm.hook.register({ required: true })}
                    />
                  </FormControl>
                </Box>
                <Button
                  w="100%"
                  colorScheme="teal"
                  type="submit"
                  isLoading={registerForm.state.isSubmitting}
                >
                  Join
                </Button>
              </form>
            </Box>
          </Center>
          <Center>
            <Text>
              <Link to={routerPaths.login}>
                Already have an account? <b>Sign in now!</b>
              </Link>
            </Text>
          </Center>
        </Box>
      </Wrapper>
    </>
  );
};
