// import { useState } from "react";
import { useState } from "react";
import "./App.css";

import { initialData } from "./initialData";

import GeneralInformationCard from "./components/GeneralInformationCard";
import EducationInformationCard from "./components/EducationInformationCard";

function App() {
  // const [count, setCount] = useState(0)
  const [generalInfo, setGeneralInfo] = useState(initialData.generalInfo);
  const [educationList, setEducationList] = useState(initialData.educationList);

  return (
    <>
      <GeneralInformationCard
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />

      <EducationInformationCard
        educationList={educationList}
        setEducationList={setEducationList}
      />
      {/* <h1>I am working</h1> */}
    </>
  );
}

export default App;
