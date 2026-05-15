import {useState} from "react";

export const useMultistepForm = (steps) => {
    const [currentStepIndex, setCurrentStepIndex] =useState(0);

    function prev(){
        if(currentStepIndex <= 0) return;
        setCurrentStepIndex((i) => i - 1);
    }

    function next(){
        if(currentStepIndex >= steps.length - 1) return;
        setCurrentStepIndex((i) => i + 1);
    }
    return{
        prev,
        next,
        currentStepIndex
    }
}
