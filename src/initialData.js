const initialData = {
  generalInfo: {
    personName: "Ram Lakhan",
    email: "ramlakhan@haha.com",
    phone: "+91 66948539",
    address: "Ram Lakhan ka Ghar, 110069",
  },
  educationList: [
    {
      school: "DAV Pitamputa",
      startDate: "08/2018",
      endDate: "05/2022",
      degree: "Highschool",
      location: "India",
      id: crypto.randomUUID(),
    },
    {
      school: "Manipal Jaipur",
      startDate: "07/2022",
      endDate: "09/2024",
      degree: "B. Tech",
      location: "India",
      id: crypto.randomUUID(),
    },
  ],
  workList: [
    {
      company: "Google",
      position: "CEO",
      startDate: "09/2024",
      endDate: "GOING STRONG",
      location: "Netherlands",
      description: "I run google hwahha",
      id: crypto.randomUUID(),
    },
    {
      company: "Miscrosoft",
      position: "CEO",
      startDate: "10/2024",
      endDate: "GOING STRONG",
      location: "Germany",
      description: "I run miscrosoft hwahha",
      id: crypto.randomUUID(),
    },
  ],
};

export { initialData };
