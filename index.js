
let tbody = document.getElementById("tbody");
var sel_status = document.getElementById("select-status").value;
var sel_role = document.getElementById("select-role").value;

function myStatus(){
    sel_status = document.getElementById("select-status").value;
    gitpages();
}

function myRole(){
    sel_role = document.getElementById("select-role").value;
    gitpages();
}

// ------------> fetch function to get data from GitHub pages
async function gitpages(){   
    var response; 
    if(sel_status=='0' && sel_role=='0'){
        response = await fetch(`https://my-json-server.typicode.com/karenpinto1602/JSON_server/user`);
    }else if(sel_status=='0'){
        response = await fetch(`https://my-json-server.typicode.com/karenpinto1602/JSON_server/user?role=${sel_role}`);
    }else if(sel_role=='0'){
        response = await fetch(`https://my-json-server.typicode.com/karenpinto1602/JSON_server/user?status=${sel_status}`);
    }else{
        response = await fetch(`https://my-json-server.typicode.com/karenpinto1602/JSON_server/user?status=${sel_status}&role=${sel_role}`);
    }
    var json_data = await response.json();
    var child = tbody.lastElementChild; 
    //removing all the tr elements in the tbody
    while (child) {
        tbody.removeChild(child);
        child = tbody.lastElementChild;
    }

    json_data.map(data => {      
        //appending the filtered tr elements
        tbody.append(td_fun(data));
    }) 
}
gitpages();

// ------------> fetch function to get the data locally
/* fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(json => {
        //Add the filtering functions and respective queries
        json.map(data => {
            tbody.append(td_fun(data));
        })
    }) 
*/


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


