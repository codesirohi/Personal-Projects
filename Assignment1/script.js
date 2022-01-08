//store data to local storage
function submitData() {
  let id_ls, user_ls, age_ls;

  id_ls = document.getElementById("id").value;
  user_ls = document.getElementById("user").value;
  age_ls = document.getElementById("age").value;

  let userRecords = new Array();
  userRecords = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  userRecords.push({
    ID: id_ls,
    Name: user_ls,
    Age: age_ls,
  });

  localStorage.setItem("users", JSON.stringify(userRecords));
  document.getElementById("myForm").reset();
}

//build table function

function buildTable(data) {
  var table = document.getElementById("myTable");
  table.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
        <td>${data[i].ID}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Age}</td>
        <td>
        <span>
          <button class="btn1 list">Edit</button>
          <button class="btn1 list">Remove</button>
        </span>
      </td>

        </tr>`;

    table.innerHTML += row;
  }
}
///search function
function searchTable(value, data) {
  var filteredData = [];

  for (var i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    var name = data[i].ID.toLowerCase();
    if (name.includes(value)) {
      filteredData.push(data[i]);
    }
  }

  return filteredData;
}
