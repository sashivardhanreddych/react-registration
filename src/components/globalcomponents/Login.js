import React from 'react';
import validation from '../globalcomponents/signup/Validation';

const Login = () => {
  
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
        <div className="container">
            <div className="app-wrapper">
              <div>
                <h2 className="title">Login</h2>
              </div>
              <form className="form-wrapper">
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
                <div>
                  <button type="submit" className="submit" onClick={handleFormSubmit}>submit</button>
                </div>
              </form>
            </div>
        </div>
    )
}
export default Login;