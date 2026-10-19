const api_url = "https://jsonplaceholder.typicode.com/users";
export async function getUsers(){
    const response = await fetch(
        api_url
    );
    if(!response.ok){
        throw new console.error('failed to fetch data');
        
    }
    return response.json();
}