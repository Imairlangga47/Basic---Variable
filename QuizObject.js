let enterkosong = '';

const employeeDB = [
    {
      id: 1,
      Nama: "Alice Johnson",
      position: "Software Engineer",
      department: "Development",
      contactInfo: {
        email: "alice.johnson@example.com",
        phone: "123-456-7890"
      },
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      id: 2,
      Nama: "Bob Smith",
      position: "Marketing Manager",
      department: "Marketing",
      contactInfo: {
        email: "bob.smith@example.com",
        phone: "234-567-8901"
      },
      skills: ["SEO", "Content Marketing", "Social Media", "Email Marketing", "Google Analytics", "Brand Strategy"]
    },  
    {
      id: 3,
      Nama: "Carol Martinez",
      position: "Product Designer",
      department: "Marketing",
      contactInfo: {
        email: "carol.martinez@example.com",
        phone: "345-678-9012"
      },
      skills: ["UX Design", "Photoshop", "Illustrator"]
    },
    {
      id: 4,
      Nama: "David Brown",
      position: "Data Analyst",
      department: "IT",
      contactInfo: {
        email: "david.brown@example.com",
        phone: "456-789-0123"
      },
      skills: ["Python", "SQL", "Data Visualization"]
    },
    {
      id: 5,
      Nama: "Eva Green",
      position: "HR Specialist",
      department: "Management",
      contactInfo: {
        email: "eva.green@example.com",
        phone: "567-890-1234"
      },
      skills: ["Recruitment", "Employee Relations", "HR Policies"]
    },
    {
      id: 6,
      Nama: "Frank White",
      position: "IT Support",
      department: "IT",
      contactInfo: {
        email: "frank.white@example.com",
        phone: "678-901-2345"
      },
      skills: ["Hardware Support", "Networking", "Technical Support"]
    },
    {
      id: 7,
      Nama: "Grace Lee",
      position: "Project Manager",
      department: "Management",
      contactInfo: {
        email: "grace.lee@example.com",
        phone: "789-012-3456"
      },
      skills: ["Project Planning", "Team Leadership", "Agile Methodologies"]
    },
    {
      id: 8,
      Nama: "Hannah Kim",
      position: "Quality Assurance",
      department: "Management",
      contactInfo: {
        email: "hannah.kim@example.com",
        phone: "890-123-4567"
      },
      skills: ["Test Automation", "Manual Testing", "Bug Tracking"]
    },
    {
      id: 9,
      Nama: "Ian Black",
      position: "Financial Analyst",
      department: "Management",
      contactInfo: {
        email: "ian.black@example.com",
        phone: "901-234-5678"
      },
      skills: ["Financial Analysis", "Excel", "Budgeting"]
    },
    {
      id: 10,
      Nama: "Jasmine Patel",
      position: "Content Writer",
      department: "Marketing",
      contactInfo: {
        email: "jasmine.patel@example.com",
        phone: "012-345-6789"
      },
      skills: ["Copywriting", "Creative Writing", "Editing", "Content Marketing"]
    }
  ];

  // Quiz 1 : Extract All of Email from the EmployeeDB Array of Object
  // Quiz 2 : Extract All of Skills from the EmployeeDB Array of Object


function ExpectedArrayForDBSkillsByDepartement (ArrayPenampungExpectedDBEmpeloye, ExpectedDataBaseEmployee ) {
    ArrayPenampungExpectedDBEmpeloye.push(`${ExpectedDataBaseEmployee.Nama} | ${ExpectedDataBaseEmployee.position} | Skill : ${ExpectedDataBaseEmployee.skills.join(', ')}`)
};


let EmployeeEmail = [];
let EmployeeSkillsByDepartment = [];
let EmployeeSkillsByDepartementDevelopment= [];
let EmployeeSkillsByDepartementMarketing = [];
let EmployeeSkillByDepartementIT = [];
let EmployeeSkillsByDepartementManagement = [];

let EmployeeSelectedSkillsArray = [];



for (let i = 0; i < employeeDB.length; i++) {
    const EmployeeDBLooping = employeeDB[i];
    const EmployeeEmailRAW = EmployeeDBLooping.contactInfo.email;
    const EmployeeDBSkillsRaw = EmployeeDBLooping.skills;
    const EmployeeDBPositionRAW = EmployeeDBLooping.position;
    const EmployeeDBDepartementRaw = EmployeeDBLooping.department;

    if (EmployeeEmailRAW) {
        EmployeeEmail.push(EmployeeEmailRAW);
    };

    if (EmployeeDBDepartementRaw === "Development") {
        ExpectedArrayForDBSkillsByDepartement(EmployeeSkillsByDepartementDevelopment, EmployeeDBLooping);
    } else if (EmployeeDBDepartementRaw === "Marketing") {
        ExpectedArrayForDBSkillsByDepartement(EmployeeSkillsByDepartementMarketing, EmployeeDBLooping);
    } else if (EmployeeDBDepartementRaw === "IT") {
        ExpectedArrayForDBSkillsByDepartement(EmployeeSkillByDepartementIT, EmployeeDBLooping);
    } else if (EmployeeDBDepartementRaw === "Management") {
        ExpectedArrayForDBSkillsByDepartement(EmployeeSkillsByDepartementManagement, EmployeeDBLooping);
    } else {
        console.log('Departement Not Found')
    };

    
};

// ????????????


function MenampilakanDatabaseSkillsByDepartement (NamaDepartement, ArrayPenampungFinalDatabaseSkillsPerDepartement) {
    if (ArrayPenampungFinalDatabaseSkillsPerDepartement.length > 0) {
        EmployeeSkillsByDepartment.push(`${NamaDepartement} :`);
            ArrayPenampungFinalDatabaseSkillsPerDepartement.forEach(SetiapArraySkills => {
            EmployeeSkillsByDepartment.push(`- ${SetiapArraySkills}`)   
        });
        EmployeeSkillsByDepartment.push("");
    };
};

// Quiz 3
function SelectedSkills(SkillNama, DatabaseSkills) {
  const skillNamaLower = SkillNama.toLowerCase(); // Untuk membandingkan tanpa memperhatikan kapitalisasi
  const skillsLower = DatabaseSkills.skills.map(skill => skill.toLowerCase()); // Membuat seluruh array menjadi lowercase

  if (skillsLower.includes(skillNamaLower)) {
      EmployeeSelectedSkillsArray.push(`${SkillNama} :`);
      EmployeeSelectedSkillsArray.push(`- ${DatabaseSkills.Nama}`);
  }
  EmployeeSelectedSkillsArray.push("");
};


for (let x = 0; x < employeeDB.length; x++) {
  const employeeDBLoop = employeeDB[x];
  
  SelectedSkills('JavaScript', employeeDBLoop);
  SelectedSkills('Networking', employeeDBLoop);
  SelectedSkills('Excel', employeeDBLoop);
  SelectedSkills("Content Marketing", employeeDBLoop);
};

// Quiz 2
MenampilakanDatabaseSkillsByDepartement('Development', EmployeeSkillsByDepartementDevelopment);
MenampilakanDatabaseSkillsByDepartement('Marketing', EmployeeSkillsByDepartementMarketing);
MenampilakanDatabaseSkillsByDepartement('IT', EmployeeSkillByDepartementIT);
MenampilakanDatabaseSkillsByDepartement('Management', EmployeeSkillsByDepartementManagement);

// Quiz 3


// Quiz 4: How many unique skills are present in the "Marketing" department?

// Expected Output:
// // ("SEO", "Content Marketing", "Social Media", "Email Marketing", "Google Analytics", "Brand Strategy", "Copywriting", "Creative Writing", "Editing")
// */

let RequiredSkillsSummary = [];

function KriteriaSkillsPerDivsi(NamaDivisi, DatabaseLooping) {
  if (NamaDivisi === DatabaseLooping.department) {
    RequiredSkillsSummary.push(`${NamaDivisi}`);
    DatabaseLooping.skill.forEach(DBSkillsLoop => {
      RequiredSkillsSummary.push(`- ${DBSkillsLoop}`)
    });
  };
  RequiredSkillsSummary.push("");
};

for (let a = 0; a < employeeDB.length; a++) {
  const LoopingEmployeeDBforQuiz4 = employeeDB[a];

  KriteriaSkillsPerDivsi('Marketing', LoopingEmployeeDBforQuiz4);
  KriteriaSkillsPerDivsi('Management', LoopingEmployeeDBforQuiz4);

  console.log(RequiredSkillsSummary("\n"));
};
// katanya disini ada unexpected token '}' di 229, itu gimana ya mas? Terus kenapa Console.log warna Biru?

// Quiz 5: For each employee, combine their Nama and contactInfo into a new object with properties Nama and contact. The contact property should include both email and phone.

  // Expected Output:
  // [
  //   {
  //     Nama: "Alice Johnson",
  //     contact: {
  //       email: "alice.johnson@example.com",
  //       phone: "123-456-7890"
  //     }
  //   }

let NewArrayofObjectQuiz5 = [];

  for (let i = 0; i < employeeDB.length; i++) {
    const EmployeeDBforQuiz5 = employeeDB[i];
    const NewObjectQuiz5 = {
      NamaEmployee: EmployeeDBforQuiz5.Nama,
      contact: {
        email: EmployeeDBforQuiz5.contactInfo.email,
        phone: EmployeeDBforQuiz5.contactInfo.phone,
      };
    };
    NewArrayofObjectQuiz5.push(NewObjectQuiz5);
  };


console.log(enterkosong);
console.log('Jawaban Quiz 1 :');
console.log(enterkosong);

EmployeeEmail.push("")

EmployeeEmail.join("\n");

console.log(EmployeeEmail);
console.log(enterkosong);

console.log('Jawaban Quiz 2 :')
console.log(enterkosong);

console.log(EmployeeSkillsByDepartment.join("\n"));
console.log(enterkosong);

console.log('Jawaban Quiz 3 :');
console.log(enterkosong);

console.log(EmployeeSelectedSkillsArray.join("\n"));
console.log(enterkosong);

console.log('Jawaban Quiz 5 :');
console.log(enterkosong);
console.log(NewArrayofObjectQuiz5);
console.log(enterkosong);





// Quiz 2: List the Namas of all employees who have the skill "JavaScript".

// Quiz 2

// function MenampilkanKeputusanPenilaianKandidat (UrutanPrioritas, ArrayPenampungFinalKandidat) {
//     if (ArrayPenampungFinalKandidat.length > 0) {
//         FinalResultForCandidate.push(`${UrutanPrioritas} :`);
//             ArrayPenampungFinalKandidat.forEach(SetiapArrayPrioritas => {
//             FinalResultForCandidate.push(`- ${SetiapArrayPrioritas}`)   
//         });
//         FinalResultForCandidate.push("");
//     };
// };

