// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Trans } from 'react-i18next';
// import Layout from './Layout';
// import Header from './Header';
// import HelperText from './HelperText';
// import TextBox from '../hoc/TextBox';

// const UserRegistraton = () => {

//     const [user, setUser] = useState({
//         firstName: '',
//         pw: '',
//         id: '',
//     });

//     const navigate = useNavigate();

//     const handleOnSubmit = event => {
//         event.preventDefault();
//         navigate('/success', {
//             state: {
//                 firstName: user.firstName,
//                 id: user.id
//             }
//         });

//     };

//     const handleChange = event => {
//         setUser({
//             ...user,
//             [event.target.name]: event.target.value,
//         });
//     };

//     return (
//         <Layout
//             header={
//                 <Header i18nKey="signUp.heading" />
//             }
//             main={
//                 <form action='/singUp' method='POST'>
//                 <div>
//                     <HelperText helperText1="signUp.helperText" />
                    
//                         <fieldset>
//                             <legend><Trans i18nKey="signUp.registrationFormLegend" /></legend>
//                             <TextBox autoFocus i18nKey="signUp.firstName" label  id="firstName" type="text" name="firstName" value={user.firstName} onChange={handleChange} required aria-required data-testid="firstName" />
//                             <TextBox i18nKey="signUp.emailAddress" label id="email" type="email" name="id" value={user.email} onChange={handleChange} required aria-required data-testid="email" />
//                             <TextBox i18nKey="signUp.password" label id="password" type="password" name="pw" value={user.password} onChange={handleChange} required aria-required data-testid="password" />
//                         </fieldset>
//                         <button type="submit" value="Submit" className="button" data-testid="signUpButton"><Trans i18nKey="signUp.SignUp" /></button>
                    
//                 </div>
//                 </form>
//             }
//         />
//     );
// }

// export default UserRegistraton;

//수정안함 차후 수정예정