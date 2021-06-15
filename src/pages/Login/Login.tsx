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
import { useLogin } from "./hooks";

export const Login = (props: any) => {
  const {
    form: { loginForm },
  } = useLogin();

  return (
    <>
      <Helmet>
        <title>Login - WOP CMS</title>
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
            <MainLogo fontSize="35px" />
            <span>CMS</span>
          </Center>
          <Center w="100%">
            <Box w="100%" maxW="450px" mb="30px">
              <form onSubmit={loginForm.methods.handleSubmitLoginForm()}>
                <Box mb="30px">
                  <FormControl mb="20px">
                    <FormLabel htmlFor="name" color="#2b6766" fontWeight="300">
                      Username
                    </FormLabel>
                    <Input
                      name="username"
                      placeholder="Enter your username"
                      ref={loginForm.hook.register({ required: true })}
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
                      ref={loginForm.hook.register({ required: true })}
                    />
                  </FormControl>
                </Box>
                <Button
                  w="100%"
                  colorScheme="teal"
                  type="submit"
                  isLoading={loginForm.state.isSubmitting}
                >
                  Continue
                </Button>
              </form>
            </Box>
          </Center>
        </Box>
      </Wrapper>
    </>
  );
};
