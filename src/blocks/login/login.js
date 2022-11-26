// import './login.scss'
// import * as Yup from 'yup';
// import { useFormik } from "formik";
// import { Formik } from 'formik';

// function Login() {
//     return (
//         <Formik
//             initialValues={{ Email: 'Email' , Password: 'Password'}}
//             onSubmit={(valys) => {
//                 console.log('ДАМИР ТЫ НЕ СЛЕПОЙ?');
//                 console.log(valys);
//             }}
//         >
//             {props => (
//                 <form onSubmit={props.handleSubmit}>
//                     <p>Email</p>
//                     <input
//                         className={`input-form ${Formik.touched.Email && Formik.errors.Email ? 'input-form__invalid' : null}`}
//                         type="text"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         name="Email"
//                         placeholder='Email'
//                     />
//                     <p>Password</p>
//                     <input
//                         type="text"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         name="Password"
//                         placeholder='Password'
//                     />
//                     <br></br>
//                     <br></br>
//                     {props.errors.Email && <div id="feedback">{props.errors.Email}</div>}
//                     {props.errors.Password && <div id="feedback">{props.errors.Password}</div>}
//                     <button type="submit">Войти</button>
//                 </form>
//             )}
//         </Formik>
//     );
// }

// export default Login;