import { useFormInput } from "./utils";

export const useSignupFields = () => {

  return [
    {
      id: "username",
      label: "Username",
      required: true,
      input: {

        props: {

          type: "text",
          placeholder: "Joe Bloggs"
        },
        state: useFormInput("")
      }
    },
    {
      id: "password",
      label: "Password",
      required: true,
      input: {

        props: {

          type: "password",
          placeholder: "*********"
        },
        state: useFormInput("")
      }
    }
  ];
}

export const useLoginFields = () => {

  return [

    {
      id: "username",
      label: "Username",
      required: true,
      input: {

        props: {
          type: "username",
          placeholder: "username"
        },
        state: useFormInput("")
      }
    },
    {
      id: "password",
      label: "Password",
      required: true,
      input: {

        props: {
          type: "password",
          placeholder: "*******"
        },
        state: useFormInput("")
      }
    }
  ];
}