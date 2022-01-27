
let tbody = document.getElementById("tbody");
//tbody.append(td_fun());

//fetch function
fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            tbody.append(td_fun(data));
        })
    })

    /* filter 
    http://localhost:3000/user?id=1&id=2 */


//create td
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