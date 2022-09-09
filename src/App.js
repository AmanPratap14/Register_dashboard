import "./App.css";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";
import TopStepper from "./components/Stepper";
import Logo from "./components/Logo";
import { USER_TYPE } from "./constants";
import { useEffect, useState } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    userType: USER_TYPE.ME,
  });

  useEffect(() => {}, [currentStep]);

  return (
    <div className="App">
      <Logo />
      <TopStepper steps={[0, 1, 2, 3]} currentStep={currentStep} />
      <div>
        {currentStep === 0 && (
          <Screen1
            userDetails={userDetails}
            setUserDetails={(updatedData) =>
              setUserDetails((userDetails) => ({
                ...userDetails,
                ...updatedData,
              }))
            }
            next={() => setCurrentStep(1)}
          />
        )}
        {currentStep === 1 && (
          <Screen2
            userDetails={userDetails}
            setUserDetails={(updatedData) =>
              setUserDetails((userDetails) => ({
                ...userDetails,
                ...updatedData,
              }))
            }
            next={() => setCurrentStep(2)}
          />
        )}
        {currentStep === 2 && (
          <Screen3
            userDetails={userDetails}
            setUserDetails={(updatedData) =>
              setUserDetails((userDetails) => ({
                ...userDetails,
                ...updatedData,
              }))
            }
            next={() => setCurrentStep(3)}
          />
        )}
        {currentStep === 3 && <Screen4 userDetails={userDetails} />}
      </div>
    </div>
  );
}

export default App;
