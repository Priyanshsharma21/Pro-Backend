import React, { useState } from 'react'


const formData = {
  fName : '',
  lName : '',
  email : '',
  photo : '',
}
const Back = () => {
  const [form, setForm] = useState(formData)


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form)
  }

  const handleChange = (e)=>{
    const {name, value} = e.target
    setForm({...form, [name] : value})
  }


  return (
    <div className="backend">
        <div className="main_form_box">
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="fName" className="form_input text_inp" onChange={handleChange} placeholder="Enter your First Name" />
                <input type="text" name="lName" className="form_input text_inp" onChange={handleChange} placeholder="Enter your Last Name" />
                <input type="email" name="email" className="form_input text_inp" onChange={handleChange} placeholder="Enter your email Name" />
                <input type="file" name="photo" className="form_input file_choose" onChange={handleChange} />

                <button type='submit' className="submit_btn">
                  Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Back