import { useEffect, useState } from "react";

function CustomForm (props) {

    const [email, setEmail] = useState('')
    //const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (email && lastName && email.indexOf("@") > -1) {
            props.setStatusCustom('');
            props.onValidated({
                EMAIL: email,
                //MERGE1: firstName,
                MERGE2: lastName,
            });
        } else {
            props.setStatusCustom("warning");
        }
    }

    console.log(props.status);

    useEffect(() => {
        if (props.status === "success") {
            setLastName('');
            setEmail('');
        }
    },[props.status])

    return <>
        <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
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
                    className={props.statusCustom}
                />

                <input
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    value={email}
                    placeholder="la-tua@mail.com"
                    className={props.statusCustom}
                />
            </div>

            {props.status === "error" && <div className="text-danger" dangerouslySetInnerHTML={{ __html: "assicurati che la tua mail non sia già registrata" }} />}
            {props.status === "success" && <div className="mc__alert mc__alert--success" dangerouslySetInnerHTML={{ __html: "registrazione effettuata" }} />}
            {props.statusCustom === "warning" && <div className="text-warning">Inserisci correttamente tutti i campi</div>}

            {props.status === "sending" && <button disabled label="subscribe" type="submit" formValues={[email, /* firstName */ lastName]}>invio...</button>}
            {props.status !== "sending" && <button label="subscribe" type="submit" formValues={[email, /* firstName */ lastName]}>Iscriviti</button>}
        </form>
    </>;
};

export default CustomForm;

//https://dev.to/gedalyakrycer/create-an-email-list-with-react-mailchimp-965