import React,{useState} from "react";
import validation from './Validation'

const Signup = (submitForm) => {

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleFormSubmit = (event) => {
      event.preventDefault();
      setErrors(validation(values));
   };

   const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      })
   }

    return (
      <>
        <div className="container">
            <div className="app-wrapper">
              <div>
                <h2 className="title">Sign Up</h2>
              </div>
              <form className="form-wrapper">
                <div className="name">
                  <label className="label">Full Name</label>
                  <input type="text" className="input" name="fullname" value={values.fullname} onChange={handleChange} required/>
                  {errors.fullname && <p className ="error">{errors.fullname}</p>}
                </div>
                <div className="email">
                  <label className="label">Email</label>
                  <input type="email" className="input" name="email" value={values.email} onChange={handleChange} required/>
                  {errors.email && <p className ="error">{errors.email}</p>}
                </div>
                <div className="password">
                  <label className="label">Password</label>
                  <input type="password" className="input" name="password" value={values.password} onChange={handleChange} required/>
                  {errors.password && <p className ="error">{errors.password}</p>}
                </div>

                <div className="confirmpassword">
                  <label className="label">Confirm Password</label>
                  <input type="password" className="input" name="confirmpassword" value={values.confirmpassword} onChange={handleChange} required/>
                  {errors.confirmpassword && <p className ="error">{errors.confirmpassword}</p>}
                </div>

                <div className="terms">
                  <input type="checkbox" className="inputcheck" name="checkterms" value={values.checkterms} onChange={handleChange} required/>
                  <span className="spanterms">I accept  &nbsp;
                  <a href="#">Terms & Conditions</a>
                  </span>
                  {errors.checkterms && <p className ="error">{errors.checkterms}</p>}
                </div>

                <div>
                  <button type="submit" className="submit" onClick={handleFormSubmit}>submit</button>
                </div>
              </form>
            </div>
        </div>
      </>
    );
  }

export default Signup;