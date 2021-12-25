import './Contact.css'  
const InputField = (props) => {
     const { handleChange, label, name, type, value } = props;
     return (
       <div className="mar">
         <label className="names" htmlFor={name}>{label}</label><br></br><br></br>
          <br></br>
         <input className="bors" type={type} onChange={handleChange} value={value} name={name} required />
       </div>
     )
   }
   
   export default InputField