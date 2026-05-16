import { useState, useRef } from "react";
// import { useMultistepForm } from "../utils/useMultistepForm";
// import UserDetails from "./pages/UserDetails";
// import Address from "./pages/Address";
// import AccountDetails from "./pages/AccountDetails";
import { useDebounce } from "../utils/useDebounce";
const MultiSelectForm = () => {
  const { debouncedValue, debouncedSearch } = useDebounce();
  const refVal= useRef(0);
//   const [formData, setFormData] = useState({
//     name: "", //user Details
//     gender: "",
//     address: "", // Address
//     country: "",
//     zipCode: "",
//     email: "", //Account details
//     password: "",
//   });

  // const multiStepForm = useMultistepForm([
  //   <UserDetails />,
  //   <Address />,
  //   <AccountDetails />,
  // ]);

  
  return (
    <>
      {/* <div>
        <div>
          current step: {multiStepForm.currentStepIndex + 1}/
          {multiStepForm.steps.length}
        </div>
        <button onClick={multiStepForm.prev}>Prev</button>
        <button onClick={multiStepForm.next}>Next</button>
      </div> */}
      <input
        placeholder="search"
        onChange={(e) => debouncedSearch(e.target.value, 3000)}
      />
      <div>debounced value: {debouncedValue}</div>
    </>
  );
};

export default MultiSelectForm;
