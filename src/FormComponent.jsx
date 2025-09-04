import React from "react";
const FormComponet =() =>{

    const SubmitClick = (event) => {
    console.log(`First Name: Your entered first name is `);
    console.log(`Last Name: Your entered last name is `);
    console.log(`Email: Your entered email is `);
    console.log(`Phone: Your entered phone number is `);
    console.log(`Date of Birth: Your entered DOB is `);
    console.log(`Gender: You selected `);
    console.log(`Skills: You selected `);
  };

    return(
        <>
        <center>
            <h1>FORM</h1>
        <form>
            <label> FirstName </label>
            <input type="text" placeholder="Enter First Name" />
            <br /><br />
            <label> LastName </label>
            <input type="text" placeholder="Enter Last Name" />
            <br/><br />
            <label> Email </label>
            <input type="email" placeholder="Enter Your email" />
            <br/><br />
            <label> Phone Number </label>
            <input type="number" placeholder="Enter ph number" />
            <br/><br />
            <label> DateOfBirth </label>
            <input type="date" placeholder="Enter your DOB" />
            <br/><br />
            <label> Gender </label>
            <input type="radio" name="gender" />
            <label> Male </label>
            <input type="radio" name="gender" />
            <label> Female </label>
            <br/><br />
            <label> Skills: </label>
            <input type="checkbox" />
            <label> HTML </label>
            <input type="checkbox" />
            <label> CSS </label>
            <input type="checkbox" />
            <label> JavaScript </label>
            <input type="checkbox" />
            <label> React </label>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
        </center>
        </>
    )
}
export default FormComponet;