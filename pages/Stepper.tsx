import React, { useState } from "react";
import {Stepper} from 'legion-ui';

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep !== steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    {
      label: {
        title:"Step 1",
        description: "Description"
      }
    },
    {
      label: {
        title:"Step 2"
      }
    }, 
    {
      label: {
        title:"Step 3"
      }
    }, 
    {
      label: {
        title:"Step 4"
      },
      icon: 'Check'
    }
  ];

  return (
    <div style={{padding:'40px'}}>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        orientation="vertical"
        borderColor="green"
        backgroundColor="green"
        showBoxShadow={true}
        showTextOn="right"
        variant="warning"
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop:'50px' }}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Home;