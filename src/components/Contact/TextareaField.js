const TextareaField = (props) => {
     const { handleChange, label, name, value } = props;
     return (
          <div>
               <label className="mess" htmlFor={name}>{label}</label>
               <h3 className="msgs">Message</h3>
               <textarea onChange={handleChange} name={name} rows="4" className=" bor" value={value}></textarea>
          </div>
     )
}

export default TextareaField