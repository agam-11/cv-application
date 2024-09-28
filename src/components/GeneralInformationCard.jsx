/* eslint-disable react/prop-types */
import { useState } from "react";
import GeneralInformationForm from "./GeneralInformationForm";

function GeneralInformationCard({ generalInfo, setGeneralInfo }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        General Information
      </button>

      {isExpanded && (
        <GeneralInformationForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
      )}
    </div>
  );
}

export default GeneralInformationCard;
