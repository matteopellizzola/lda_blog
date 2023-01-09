import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

function ReactMailForm (props) {

    const url = "https://gmail.us21.list-manage.com/subscribe/post?u=826bab7f1724ea57b39191195&amp;id=b72406d1cd&amp;f_id=0038cfe1f0";

    // simplest form (only email)
    //const SimpleForm = () => <MailchimpSubscribe url={url} />

    //return <MailchimpSubscribe url={url} />


    return <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
        <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
            />
        )}
    />

}

export default ReactMailForm;