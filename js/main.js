let finalres = [];
let sName = document.getElementById("NameID");
async function getMark() {
  name = sName.value;
  let res = await fetch(
    `https://natega-api.onrender.com/student?arabic_name=${name}`
  );
  finalres = await res.json();
  await displayData();
}

function displayData() {
  let temp = "";
  finalres.forEach((element) => {
    temp += `
   
   <tr>
   <td>${element.student_case_desc}</td>
   <td>${element.total_degree}</td>
   <td>${element.arabic_name}</td>
  </tr>
   
   `;

    
  });
  document.getElementById("getData").innerHTML = temp;
}
