


export default function pedirToken () {
    const url = "https://fakestoreapi.com/auth/login"
    const data = {
        username: "mor_2314",
        password: "83r5^_"
    };
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la autenticación: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Token obtenido:", data.token);
            setToken(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
