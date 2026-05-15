import { useState } from "react";
import {useMultistepForm} from "../utils/useMultistepForm";
import UserDetails from "./pages/UserDetails";
import Address from "./pages/Address";
import AccountDetails from "./pages/AccountDetails";
const MultiSelectForm = () => {

  const [formData, setFormData]= useState({
    name: "", //user Details
    gender: "",
    address: "", // Address
    country: "",
    zipCode: "",
    email: "", //Account details
    password: "",
  })

  const multiStepForm=useMultistepForm([<UserDetails />,<Address />,<AccountDetails />]);

  return (
    <>
    <div>current step: {multiStepForm.currentStepIndex +1}/{multiStepForm.steps.length}</div>
    <button onClick={multiStepForm.prev}>Prev</button>
    <button onClick={multiStepForm.next}>Next</button>
    </>
  )
}

export default MultiSelectForm