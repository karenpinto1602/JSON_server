
let tbody = document.getElementById("tbody");
let sFilter = document.getElementById("select-filter");

// ------------> fetch function to get data from GitHub pages
async function gitpages(){
    var sel_status = document.getElementById("select-status").value;
    console.log(sel_status);
    const response = await fetch(`https://karenpinto1602.github.io/JSON_server/database/db.json ? id=1`);
    var json_data = await response.json();
    json_data.user.map(data => {
        tbody.append(td_fun(data));
    }) 
}
gitpages();

// ------------> fetch function to get the data locally
/* fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            tbody.append(td_fun(data));
        })
    }) */


//create td from the body
function td_fun(data){
    let td = document.createElement('tr');
    td.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                    <img src=${data.profile}
                        class="h-10 w-10 rounded-full" alt="">
                </div>
                <div class="ml-4">
                    <div class="text-sm font-medium text-gray-9">
                        ${data.name}
                    </div>
                    <div class="text-sm text-gray-500">
                        ${data.email}
                    </div>
                </div>
            </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${data.status}</span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="text-sm text-gray-500">${data.role}</span>
        </td>
    `;
    return td;
}


//sFilter.append(select_fun())

function select_fun(){
    let sd = document.createElement('div');
    sd.innerHTML = `
    <select id="select-status" class="px-4 shadow font-semibold border-solid border-2 outline-indigo-500">
                <option value="Status" class="font-semibold">Status</option>
                <option value="Active" class="font-semibold">Active</option>
                <option value="Inactive" class="font-semibold">Inactive</option>
    </select>
    <select id="select-role" class="px-4 mx-3 shadow font-semibold border-solid border-2 outline-indigo-500">
                <option value="Role" class="font-semibold">Role</option>
                <option value="Admin" class="font-semibold">Admin</option>
                <option value="Owner" class="font-semibold">Owner</option>
                <option value="Member" class="font-semibold">Member</option>
    </select>
    `;    
    return sd;
}

