import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const CheckoutIntro = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="checkout-intro padding-logo-top">
        <h1 className="text-center">Ordina i prodotti</h1>
        <h4>Come funziona?</h4>
        <p>
          Per ordinare i miei prodotti in modo semplice e veloce, compila il
          modulo che trovi qua sotto.
          <br />
          {/* spaziare un minimo */}
          Inseirsci i tuoi dati, scegli i prodotti che desideri e come
          preferisci riceverli. Seleziona il metodo di pagamento e clicca sul
          pulsante "ordina".
        </p>
        <h4 className="mt-4">Metodo di pagamento</h4>
        <div>
          Puoi scegliere tra due metodi di pagamento:
          <ul className="mb-2">
            <li>
              <strong>Bonifico bancario:</strong> una volta prenotato l'ordine,
              riceverai una mail di conferma con i dati necessari per procedere.
            </li>
            <li>
              <strong>Satispay:</strong> il metodo più rapido. Una mail ti
              indicherà come effettuare il pagamento tramite l'app.
            </li>
          </ul>
          <p className="mb-0">
            L'ordine verrà preparato al ricevimento del pagamento.
          </p>
        </div>
        <h4 className="mt-4">Consegna</h4>
        <div>
          Puoi scegliere se passare a ritirare in laboratorio o ricevere
          direttamente a casa.
          <ul className="mb-2">
            <li>
              <strong>Ritiro in laboratorio:</strong> specificare giorni e orari
            </li>
            <li>
              <strong>Consegna a domicilio:</strong> al momento sono in grado di
              consegnare nei comuni di: Alpignano, Beinasco, Borgaro, Collegno,
              Grugliasco, Orbassano, Pianezza, Rivalta di Torino, Rivoli,
              Torino, Venaria Reale e Villarbasse.
            </li>
          </ul>
        </div>

        <h4 className="mt-4">Contattami</h4>
        <div className="mb-4">
          Se non sei in uno dei comuni elencati o se hai richieste particolari,
          contattami tramite{" "}
          <a href="tel:+393315620020" className="text-link">
            telefono
          </a>{" "}
          o{" "}
          <a
            href="https://wa.me/+393315620020"
            target="_blank"
            className="text-link"
          >
            whatsapp.
          </a>
          {/* <Link className="text-link" to={"/contacts"}>
            contattami.
          </Link> */}
        </div>
      </div>
    </>
  );
};
