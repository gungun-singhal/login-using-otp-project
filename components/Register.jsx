import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from './login';


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[confirmpassword, setconfirmpassword]= useState("");
    const [Room, setRoom] = useState("");
    const [Hostel, sethostel] = useState("");
    const[branch, setbranch]= useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);

    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();
            if(!email.includes("@mnit.ac.in") )
            {
               alert("Invalid email! Please check again");
            }
            if(password!= confirmpassword && (password.length)<8 && (confirmpassword.length)<8)
            {
                alert("Confirm your password again");
            }
        if (!name || !email || !password || !Hostel || !Room || !branch || !confirmpassword) {
            setFlag(true);

        }
         else if(email.includes("@mnit.ac.in") && password== confirmpassword){
                setFlag(false);
                localStorage.setItem("gungunSubmissionEmail", JSON.stringify(email));
                localStorage.setItem("gungunSubmissionPassword", JSON.stringify(password));
                console.log("Saved in Local Storage");
    
                setLogin(!login)


        }
    }

    // Directly to the login page
    function handleClick() {
            setLogin(!login)
    }

    return (
        <>
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Type password" onChange={(event) => setconfirmpassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Room</label>
                    <input type="Room" className="form-control" placeholder="Enter room" onChange={(event) => setRoom(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Hostel</label>
                    <input type="Hostel" className="form-control" placeholder="Enter Hostel" onChange={(event) => sethostel(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Branch</label>
                    <input type="branch" className="form-control" placeholder="Enter branch" onChange={(event) => setbranch(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        I got it you are in hurry! But every Field is important!
                </Alert>
                }
            </form> : <Login />}
            </div> : <div>
                    <p><strong>Phone:</strong> XXXXXXXXXX</p>
                    <p><strong>Email:</strong> XXXXXXXX@mnit.ac.in</p>
                </div>}
        </>
    )
            }

export default Registration
