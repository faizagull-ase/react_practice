const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function createUser(newUser){
    const response = await fetch(
        API_URL,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body : JSON.stringify(newUser)
        }
    );
    if(!response.ok){
        throw new Error("Failed to create user");
    }
    console.log("User created");
    return response.json()
}