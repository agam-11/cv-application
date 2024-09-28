/* eslint-disable react/prop-types */
function EducationInformationform({
  educationInfo,
  setEducationInfo,
  handleDelete,
  handleCancel,
  handleSubmit,
}) {
  return (
    <form>
      <label>
        School
        <input
          type="text"
          value={educationInfo.school}
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, school: e.target.value })
          }
        />
      </label>

      <label>
        Start Date
        <input
          type="text"
          value={educationInfo.startDate}
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, startDate: e.target.value })
          }
        />
      </label>

      <label>
        End Date
        <input
          type="text"
          value={educationInfo.endDate}
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, endDate: e.target.value })
          }
        />
      </label>

      <label>
        Degree
        <input
          type="text"
          value={educationInfo.degree}
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, degree: e.target.value })
          }
        />
      </label>

      <label>
        Location
        <input
          type="text"
          value={educationInfo.location}
          onChange={(e) =>
            setEducationInfo({ ...educationInfo, location: e.target.value })
          }
        />
      </label>

      <input type="button" value="delete" onClick={handleDelete} />
      <input type="button" value="Cancel" onClick={handleCancel} />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}

export default EducationInformationform;
