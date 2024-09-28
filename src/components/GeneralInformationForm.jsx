/* eslint-disable react/prop-types */
function GeneralInformationForm({ generalInfo, setGeneralInfo }) {
  return (
    <form action="">
      <label>
        Name:
        <input
          type="text"
          value={generalInfo.personName}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, personName: e.target.value })
          }
        />
      </label>

      <label>
        Email
        <input
          type="text"
          value={generalInfo.email}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, email: e.target.value })
          }
        />
      </label>

      <label>
        Phone
        <input
          type="text"
          value={generalInfo.phone}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, phone: e.target.value })
          }
        />
      </label>

      <label>
        Address
        <input
          type="text"
          value={generalInfo.address}
          onChange={(e) =>
            setGeneralInfo({ ...generalInfo, address: e.target.value })
          }
        />
      </label>
    </form>
  );
}

export default GeneralInformationForm;
