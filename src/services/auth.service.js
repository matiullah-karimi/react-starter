export const login = async (email, password) => {
    // const response = await fetch('https://fakestoreapi.com/auth/login', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         username: "mor_2314",
    //         password: "83r5^_"
    //     })
    // })

    // const { token } = await response.json();

    
    await new Promise(resolve => setTimeout(resolve, 3000));

    localStorage.setItem('token', email);

    return email;
}