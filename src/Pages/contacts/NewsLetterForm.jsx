import { Col, Row } from "react-bootstrap";
import MailChimpForm from "./MailChimpForm";
import { Link } from "react-router-dom";

function NewsLetterForm(props) {
  return (
    <div className="newsletter-form-wrapper">
      <h3>Ogni giorno un forno nuovo</h3>
      <Row>
        <Col sm={6} xs={12} className="newsletter-image-col">
          <div className="newsletter-image">
            <img src="https://picsum.photos/300/200" alt="img_newsletter" />
          </div>
        </Col>
        <Col sm={6} xs={12}>
          <div className="newsletter-description">
            In base alla stagionalità e al giorno della settimana preparo nuove
            proposte, le puoi trovare nella scheda{" "}
            <Link className="link_" to={"/products"}>
              prodotti
            </Link>{" "}
            oppure puoi iscriverti alla newsletter per ricevere aggiornamenti
            via mail
          </div>
          <MailChimpForm />
        </Col>
      </Row>
    </div>
  );
}

export default NewsLetterForm;
