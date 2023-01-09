import { useState } from "react";

function CustomForm (props) {

    const [email, setEmail] = useState('')
    //const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

     console.log(props.status);

    const handleSubmit = (e) =>{
        e.preventDefault();
        email &&
        lastName &&
        email.indexOf("@") > -1 &&
        props.onValidated({
            EMAIL: email,
            //MERGE1: firstName,
            MERGE2: lastName,
        });
    }

    return (
      <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mc__title">Join our email list for future updates.</h3>
        <div className="mc__field-container">
          {/* <input
            label="First Name"
            onChange={setFirstName}
            type="text"
            value={firstName}
            placeholder="Jane"
            isRequired
          /> */}

          <input
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            value={lastName}
            placeholder="Il tuo nome"
            isRequired
          />

          <input
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="la-tua@mail.com"
            isRequired
          />

        </div>

        <button label="subscribe" type="submit" formValues={[email, /* firstName */ lastName]}>submit</button>
      </form>
    );
};

//https://dev.to/gedalyakrycer/create-an-email-list-with-react-mailchimp-965

export default CustomForm;