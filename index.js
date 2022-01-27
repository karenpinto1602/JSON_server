
let tbody = document.getElementById("tbody");


// ------------> fetch function to get data from GitHub pages
async function gitpages(){
    const response = await fetch("https://karenpinto1602.github.io/JSON_server/database/db.json");
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