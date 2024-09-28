import { useState } from "react";
import EducationInformationform from "./EducationInformationForm";
import "../styles/EducationInformationForm.css";

/* eslint-disable react/prop-types */
function EducationInformationCard({ educationList, setEducationList }) {
  const [educationInfo, setEducationInfo] = useState({});
  const [newEducation, setNewEducation] = useState(false);

  function handleClick(index) {
    setEducationInfo(educationList[index]);
  }

  function handleAdd() {
    setEducationInfo({ id: crypto.randomUUID() });
    setNewEducation(true);
  }

  function handleCancel() {
    setNewEducation(false);
    setEducationInfo({});
  }

  function handleDelete(educationId) {
    const educationToRemoveIndex = educationList.findIndex(
      (education) => education.id == educationId
    );
    const newEducationList = educationList;
    newEducationList.splice(educationToRemoveIndex, 1);
    setEducationList(newEducationList);
    setNewEducation(false);
    setEducationInfo({});
  }

  function handleSubmit(e, educationId) {
    e.preventDefault();
    const newEducationList = educationList;

    if (newEducation) {
      newEducationList.push(educationInfo);
    } else {
      const educationToEditIndex = educationList.findIndex(
        (education) => education.id == educationId
      );
      newEducationList.splice(educationToEditIndex, 1, educationInfo);
    }
    setNewEducation(false);
    setEducationList(newEducationList);
    setEducationInfo({});
  }

  if (Object.keys(educationInfo).length == 0) {
    return (
      <div>
        <h3>Education</h3>
        {educationList.map((education, index) => {
          return (
            <button
              key={education.id}
              onClick={() => {
                handleClick(index);
              }}
            >
              {education.school}
            </button>
          );
        })}
        <button onClick={handleAdd}>Add</button>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Education fuck</h3>
        <EducationInformationform
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          handleDelete={() => handleDelete(educationInfo.id)}
          handleCancel={() => handleCancel()}
          handleSubmit={(e) => handleSubmit(e, educationInfo.id)}
        />
      </div>
    );
  }
}

export default EducationInformationCard;
