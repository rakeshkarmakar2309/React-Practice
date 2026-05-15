import { useState } from "react";
import {useMultistepForm} from "../utils/useMultistepForm";
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

  const multiStepForm=useMultistepForm([<div>one</div>,<div>two</div>,<div>three</div>]);

  return (
    <>
    <div>hi {multiStepForm.currentStepIndex}</div>
    <button onClick={multiStepForm.prev}>Prev</button>
    <button onClick={multiStepForm.next}>Next</button>
    </>
  )
}

export default MultiSelectForm