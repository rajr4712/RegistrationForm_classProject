import "./App.css";
import { useState } from "react";
import { useRef } from "react";

//CONTROLLED COMPONENT (FORM HANDLING) also loc232 to 260 check
function App() {
  const [formData, setFormData] = useState( {firstName: "", 
  lastName: "", email:"", comments:"", country:"India", streetAddress: "", city:"", state:"", postalCode:"",
  comment:false, candidate:false, offer:false,pushNotification:"" } );
  {/*false give taki checkbox me tick nhi ho at starting*/}


  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value}
  {/*if target name ka input type is checkbox then its checked otherwise value enter by user set into formData*/ }
    });
  }
   
  function submitHandler(event) {
    event.preventDefault();    //by default submit button nothing do
    console.log(formData);
  }

  
  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
     <label for="firstName">First name</label>
      <br/>   {/*break tag coz input tag k left bagal me naa aake uske upar label text aaye*/}
      <input
          type="text"
          placeholder='Rahul'
          id= "firstName"
          name="firstName"
          onChange={changeHandler}  
          value={formData.firstName} />

    <br/> <br/>

    <label for="lastName">last name</label>
    <br/>
    <input
          type="text"
          placeholder='Kumar'
          id= "lastName"
          name="lastName"
          onChange={changeHandler}  
          value={formData.lastName}  />

     <br/> <br/>

     <label for="email">Email Address</label>
     <br/>
     <input
          type="email"
          placeholder='rahul@abc.com'
          id= "email"
          name="email"
          onChange={changeHandler}  
          value={formData.email } />

  <br/><br/>

  <label for="country"> Country</label>
  <br></br>
    <select>             
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler} 

      <option>India</option>
      <option>Usa</option>
      <option>SoutAfrica</option>
      <option>China</option>
    </select>

    <br/><br/>

    
    <label for="streetAddress">Address</label>
    <br/>
      <input
          type="text"
          placeholder='1234 main-street colony'
          id= "streetAddress"
          name="streetAddress"
          onChange={changeHandler}  
          value={formData.streetAddress}  />

 <br/><br/>

   <label for="city">City</label> 
   <br/>
    <input
          type="text"
          placeholder='Patna'
          id= "city"
          name="city"
          onChange={changeHandler}  
          value={formData.city}  />

  <br/><br/>


  <label for="state">State/Province</label>
  <br/>
       <input
          type="text"
          placeholder='Bihar'
          id= "state"
          name="state"
          onChange={changeHandler}  
          value={formData.state}  />

     <br/><br/>
    

    <label for="city"> Zip/Postal code</label> 
    <br/>
    <input
          type="text"
          placeholder='71330'
          id= "postalCode"
          name="postalCode"
          onChange={changeHandler}  
          value={formData.postalCode}  />

    <br/><br/>

     <fieldset>
      <legend>By Email</legend>       
      <input 
      type="checkbox"
      id="comments"
      name="comment"
      checked={formData.comment}  
      onChange={changeHandler} />
{/*At starting not checked in browser and  its intialize in loc 8 comment="false" pass kar k  
loc139:checked used here instead of value , coz we return as a output jo checked hai wo kaun sa Text wala checked hai. if we use
value then its return  true or false as a output. */ }
 
       <label for="comments"> Comments</label>
       <div>
       <p>Get notified when someone post a comment on a posting</p> 
       </div>
  
     <br/>

     <input 
      type="checkbox"
      id="candidates"
      name="candidate"
      checked={formData.candidate}
      onChange={changeHandler} />

  <label for="candidates"> Candidates</label>
     <div>
     <p>Get notified when a candidates applies for a job</p> 
     </div>

     <br/>

     <input 
      type="checkbox"
      id="offers"
      name="offer"
      checked={formData.offer}
      onChange={changeHandler} />


  <label for="offers"> Offers </label>
     <div>
     <p>Get notified when a candidates applies for a job</p> 
     </div>
      </fieldset>
       
      <br/>
 
     {/*for All Radio Tag*/}
    <fieldset>    {/*its use for when you create or group   multiple checkbox and radio tag*/}
      <legend>Push Notification</legend>
      <p>These are delivered via sms to your mobile phone.</p>
    
      <input
     type="radio"
     id="pushEverything"
     name="pushNotification" 
    value="Everything"
    onChange={changeHandler} />
   <label for="pushEverything">Everything</label>

    <br/> 
     
    <input 
    type="radio"
    id="pushEmail"
    name="pushNotification" 
    value="Same as email"
    onChange={changeHandler} />

    <label for="pushEmail">Same as email</label>

    <br/>
    
    <input
    type="radio"
    id="pushNotification"
    name="pushNotification"
    value="No Push Notification"
    onChange={changeHandler} />

    <label for="pushNotification">No Push Notification</label>

    </fieldset>
    <br/>
 
    <button className="bg-blue-500 text-white font-bold rounded 
      py-2 px-4"> Save</button>
    
     </form>
    </div>
    
    

  );
}


// //Ex2:controlled component: handle initial state,update,submit function and contolled value in capital inside input box

// function App() {
//   const [name, setName] = useState('rahul');
  
//   function handleSubmit(event) {
//     event.preventDefault()
//     alert(`Name: ${name}`);
//   }
   
//   function changeHandler(event) {
//     const fname =(event.target.value).toUpperCase();
//     setName(fname)
//   }

//   return (
//     <div className="App">
//       <h3>Controlled Component</h3>
     
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input name="name" value={name} onChange={changeHandler} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
  
// export default App;




// //UNCONTROLLED COMPONENT
// function App() {
//   const inputRef = useRef("");
//   console.log(inputRef)
  
//   function submitHandler(event) {
//     event.preventDefault()
//     alert(`Name: ${inputRef.current.value}`)
//     // console.log(inputRef.current.value)
//     // console.log((inputRef.current.value).toUpperCase())
  
//   }
  
//     return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <label for ="name"> Name:</label>
//         <input type="text" id="name" ref={inputRef}></input>   <br/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )

// }


export default App;
