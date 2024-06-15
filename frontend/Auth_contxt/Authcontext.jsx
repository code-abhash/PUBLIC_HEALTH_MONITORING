// import {createContext, useState, useEffect} from "react";
// import {jwtDecode} from "jwt-decode";
// import {useHistory} from "react-router-dom";
// const swal = require('sweetalert2')

// export const AuthContext = createContext();


// export const AuthProvider = ({ children }) => {
//     const [authTokens, setAuthTokens] = useState(() =>
//         localStorage.getItem("authTokens")
//             ? JSON.parse(localStorage.getItem("authTokens"))
//             : null
//     );
    

//     const [user, setUser] = useState(() => 
//         localStorage.getItem("authTokens")
//             ? jwtDecode(localStorage.getItem("authTokens"))
//             : null
//     );


//     const [loading, setLoading] = useState(true);

//     const history = useHistory();

//     const loginUser = async (username, password) => {
//         const response = await fetch("http://127.0.0.1:8000/api/token/", {
//             method: "POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify({
//                 username, password
//             })
//         })
//         const data = await response.json()
//         console.log(data);

//         if(response.status === 200){
//             console.log("Logged In");
//             setAuthTokens(data)
//             setUser(jwtDecode(data.access))
//             localStorage.setItem("authTokens", JSON.stringify(data))
//             history.push("/")
//             swal.fire({
//                 title: "Login Successful",
//                 icon: "success",
//                 toast: true,
//                 timer: 6000,
//                 position: 'top-right',
//                 timerProgressBar: true,
//                 showConfirmButton: false,
//             })

//         } else {    
//             console.log(response.status);
//             console.log("there was a server issue");
//             swal.fire({
//                 title: "Username or passowrd does not exists",
//                 icon: "error",
//                 toast: true,
//                 timer: 6000,
//                 position: 'top-right',
//                 timerProgressBar: true,
//                 showConfirmButton: false,
//             })
//         }
//     }

//     const registerUser = async ( username, email, role, password, password2) => {
//         const response = await fetch("http://127.0.0.1:8000/api/register/", {
//             method: "POST",
//             headers: {
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify({
//                 username,email,role, password, password2
//             })
//         })
//         if(response.status === 201){
//             history.push("/login")
//             swal.fire({
//                 title: "Registration Successful, Login Now",
//                 icon: "success",
//                 toast: true,
//                 timer: 6000,
//                 position: 'top-right',
//                 timerProgressBar: true,
//                 showConfirmButton: false,
//             })
//         } else {
//             console.log(response.status);
//             console.log("there was a server issue");
//             swal.fire({
//                 title: "An Error Occured " + response.status,
//                 icon: "error",
//                 toast: true,
//                 timer: 6000,
//                 position: 'top-right',
//                 timerProgressBar: true,
//                 showConfirmButton: false,
//             })
//         }
//     }

//     const logoutUser = () => {
//         setAuthTokens(null)
//         setUser(null)
//         localStorage.removeItem("authTokens")
//         history.push("/login")
//         swal.fire({
//             title: "YOu have been logged out...",
//             icon: "success",
//             toast: true,
//             timer: 6000,
//             position: 'top-right',
//             timerProgressBar: true,
//             showConfirmButton: false,
//         })
//     }

//     const contextData = {
//         user, 
//         setUser,
//         authTokens,
//         setAuthTokens,
//         registerUser,
//         loginUser,
//         logoutUser,
//     }

//     useEffect(() => {
//         if (authTokens) {
//             setUser(jwtDecode(authTokens.access))
//         }
//         setLoading(false)
//     }, [authTokens, loading])

//     return (
//         <AuthContext.Provider value={contextData}>
//             {loading ? null : children}
//         </AuthContext.Provider>
//     )

// }
// // import React, { createContext, useState, useEffect } from "react";
// // import { useHistory } from "react-router-dom";
// // import { decode } from "jwt-decode";
// // import Swal from 'sweetalert2';

// // export const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //     const [authTokens, setAuthTokens] = useState(() =>
// //         localStorage.getItem("authTokens")
// //             ? JSON.parse(localStorage.getItem("authTokens"))
// //             : null
// //     );

// //     const [user, setUser] = useState(() =>
// //         localStorage.getItem("authTokens")
// //             ? decode(localStorage.getItem("authTokens"))
// //             : null
// //     );

// //     const [loading, setLoading] = useState(true);
// //     const history = useHistory();

// //     const loginUser = async (username, password) => {
// //         try {
// //             const response = await fetch("http://127.0.0.1:8000/api/token/", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json"
// //                 },
// //                 body: JSON.stringify({ username, password })
// //             });
// //             const data = await response.json();

// //             if (response.status === 200) {
// //                 setAuthTokens(data);
// //                 setUser(decode(data.access));
// //                 localStorage.setItem("authTokens", JSON.stringify(data));
// //                 history.push("/");
// //                 Swal.fire({
// //                     title: "Login Successful",
// //                     icon: "success",
// //                     toast: true,
// //                     timer: 3000,
// //                     position: 'top-right',
// //                     timerProgressBar: true,
// //                     showConfirmButton: false,
// //                 });
// //             } else {
// //                 throw new Error("Invalid credentials");
// //             }
// //         } catch (error) {
// //             console.error("Login error:", error);
// //             Swal.fire({
// //                 title: "Username or password is incorrect",
// //                 icon: "error",
// //                 toast: true,
// //                 timer: 3000,
// //                 position: 'top-right',
// //                 timerProgressBar: true,
// //                 showConfirmButton: false,
// //             });
// //         }
// //     };

// //     const registerUser = async (username, email, role, password, password2) => {
// //         try {
// //             const response = await fetch("http://127.0.0.1:8000/api/register/", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json"
// //                 },
// //                 body: JSON.stringify({ username, email, role, password, password2 })
// //             });

// //             if (response.status === 201) {
// //                 history.push("/login");
// //                 Swal.fire({
// //                     title: "Registration Successful",
// //                     icon: "success",
// //                     toast: true,
// //                     timer: 3000,
// //                     position: 'top-right',
// //                     timerProgressBar: true,
// //                     showConfirmButton: false,
// //                 });
// //             } else {
// //                 throw new Error(`Registration failed with status ${response.status}`);
// //             }
// //         } catch (error) {
// //             console.error("Registration error:", error);
// //             Swal.fire({
// //                 title: "Registration Error",
// //                 text: error.message,
// //                 icon: "error",
// //                 toast: true,
// //                 timer: 3000,
// //                 position: 'top-right',
// //                 timerProgressBar: true,
// //                 showConfirmButton: false,
// //             });
// //         }
// //     };

// //     const logoutUser = () => {
// //         setAuthTokens(null);
// //         setUser(null);
// //         localStorage.removeItem("authTokens");
// //         history.push("/login");
// //         Swal.fire({
// //             title: "Logged Out Successfully",
// //             icon: "success",
// //             toast: true,
// //             timer: 3000,
// //             position: 'top-right',
// //             timerProgressBar: true,
// //             showConfirmButton: false,
// //         });
// //     };

// //     useEffect(() => {
// //         setLoading(false);
// //     }, []);

// //     const contextData = {
// //         user,
// //         authTokens,
// //         loginUser,
// //         registerUser,
// //         logoutUser,
// //         isAuthenticated: authTokens !== null && user !== null,
// //     };

// //     return (
// //         <AuthContext.Provider value={contextData}>
// //             {loading ? null : children}
// //         </AuthContext.Provider>
// //     );
// // };


import { createContext, useState, useEffect, useContext} from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const AuthContext = createContext();

export default AuthContext;



export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );

    const [user, setUser] = useState(() =>
        localStorage.getItem("authTokens")
            ? jwtDecode(localStorage.getItem("authTokens"))
            : null
    );

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const loginUser = async (username, password) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/token/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();

            if (response.status === 200) {
                setAuthTokens(data);
                setUser(jwtDecode(data.access));
                localStorage.setItem("authTokens", JSON.stringify(data));
                navigate("/home");
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    toast: true,
                    timer: 3000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            } else {
                throw new Error("Invalid credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
            Swal.fire({
                title: "Username or password is incorrect",
                icon: "error",
                toast: true,
                timer: 3000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }
    };

    const registerUser = async (email,username, role, password, password2) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email,username, role, password, password2 })
            });

            if (response.status === 201) {
                navigate("/login");
                Swal.fire({
                    title: "Registration Successful",
                    icon: "success",
                    toast: true,
                    timer: 3000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            } else {
                throw new Error(`Registration failed with status ${response.status}`);
            }
        } catch (error) {
            console.error("Registration error:", error);
            Swal.fire({
                title: "Registration Error",
                text: error.message,
                icon: "error",
                toast: true,
                timer: 3000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate("/login");
        Swal.fire({
            title: "Logged Out Successfully",
            icon: "success",
            toast: true,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        });
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    const contextData = {
        user,
        authTokens,
        loginUser,
        registerUser,
        logoutUser,
        isAuthenticated: authTokens !== null && user !== null,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};

//export const useAuth = () => useContext(AuthContext);