const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);