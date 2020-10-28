import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Field, Formik } from "formik"
import * as Yup from "yup"

import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/core"

const validateEmailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
})

const NewsletterLandingPageForm = () => {
  const toast = useToast()

  return (
    <Box w="100%">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validateEmailSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const result = await addToMailchimp(values.email)

          if (result.result === "error") {
            // alert(`Sorry ${result.msg}!`)
            // this.setState({ email: "" })

            setSubmitting(false)
            toast({
              title: "An error occurred.",
              description: result.msg,
              status: "error",
              duration: 4000,
              isClosable: true,
            })
            return
          } else {
            // alert(`Thank you for subscribing ${this.state.email}!`)
            // this.setState({ email: "" })

            resetForm()
            toast({
              title: "Success!.",
              description: "Thank you! 🎉 You are now subscribed",
              status: "success",
              duration: 4000,
              isClosable: true,
            })
          }
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email" id="email">
                    Email address:
                  </FormLabel>
                  <Input
                    {...field}
                    type="email"
                    focusBorderColor="teal.200"
                    id="email"
                    aria-label="your email"
                    placeholder="E-mail"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              variantColor="cyan"
              type="submit"
              isLoading={formik.isSubmitting}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default NewsletterLandingPageForm
