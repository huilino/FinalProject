const USERINPUT_ENDPOINT = "https://628b9e377886bbbb37bc3770.mockapi.io/api/v1/userinput"

const getFetchOptions = (method, data) => ({
    method : method,
    headers : 
    {
        "Content-Type": "application/json"
    },
    body : JSON.stringify(data)
})

// Get userInput Created
export const getUserInput = async() => {
    try{
        const response = await fetch(USERINPUT_ENDPOINT);
        return await response.json();
        

    }
    catch (e) {
        console.log(e);
        return null;
    }
}

// Create userInput
export const createUserInput = async(userInput) => {
    try{
        const response = await fetch(USERINPUT_ENDPOINT, getFetchOptions("POST", userInput));
        return await response.json();
        
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

// Update userInput
export const updateUserInput = async(userInput) => {
    try{
        console.log("edit", userInput)
        let updatedWithoutId = {
            name : userInput.name,
            recipe : userInput.recipe,
            suggestion : userInput.suggestion,
        }
        
        const response = await fetch(USERINPUT_ENDPOINT + "/" + userInput._id, getFetchOptions("PUT", updatedWithoutId));  
        return response;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

export const deleteUserInput = async(userInput) => {
    try{
        console.log("delete", userInput)
        const response = await fetch(USERINPUT_ENDPOINT + "/" + userInput, {method: "DELETE"});
        return response;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}