import React, { useEffect, useState } from "react";

/**
 * React component to show the confirmation page after the order is sent
 * @param {object} formData The form data
 * @param {object} totals The total of each product
 * @param {function} renderTotals A function to render the total price
 * @param {object} satispayCode The satispay code if the payment method is satispay
 * @returns {ReactElement} The react element to show the confirmation page
 */
export const EmailConfirm = ({
  formData,
  totals,
  renderTotals,
  satispayCode,
}) => {
  return (
    <>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <div style={{ textAlign: "center" }}>
          <a href="https://www.laboratoriodiantonella.it" target="_blank">
            <img
              height={"100px"}
              width={"auto"}
              src="https://www.laboratoriodiantonella.it/assets/logo-Cm_8sKOm.png"
              alt="laboratorio di antonella"
            />
          </a>
          <h1>Conferma prenotazione</h1>
          <h4>La tua prenotazione e' stata accettata</h4>
        </div>
        <hr></hr>
        <div>
          Ciao {formData?.name}, <br /> ho ricevuto la tua prenotazione e
          provvederò a preparare l'ordine il prima possibile.
        </div>
        <div style={{ marginTop: "20px" }}>
          <h4>Riepilogo del tuo ordine</h4>
          <table
            style={{
              marginTop: "20px",
              borderCollapse: "collapse",
              width: "100%",
              height: "48px;",
            }}
            // border="1"
          >
            <tr style={{ textAlign: "center", height: "24px" }}>
              <th>Prodotto</th>
              <th>Quantita'</th>
              <th>Prezzo</th>
            </tr>
            {totals &&
              Object?.keys(totals)?.map((key) =>
                totals[key]?.quantity != "-" ? (
                  <tr key={key} style={{ textAlign: "center", height: "24px" }}>
                    <td>{totals[key]?.name}</td>
                    <td>{totals[key]?.quantity}</td>
                    <td>{totals[key]?.price}</td>
                  </tr>
                ) : (
                  <></>
                )
              )}
          </table>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h4>Pagamento</h4>
            <div>
              Hai scelto il metodo di pagamento{" "}
              <strong>{formData?.paymentMethod}</strong>
              <br />
              Puoi cliccare il pulsante qui sotto per poter effettuare il
              pagamento. Una volta pagato potrò elaborare il tuo ordine.
            </div>
            {formData?.paymentMethod === "satispay" ? (
              <>
                <br />
                <a
                  target="_blank"
                  style={{
                    backgroundColor: "rgb(255, 61, 0)",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                  href={satispayCode.link}
                >
                  Paga ora con satispay
                </a>
              </>
            ) : (
              <>
                <div>
                  Puoi effettuare il bonifico a queste coordinate bancarie --
                  totale {renderTotals()}
                </div>
                <table
                  style={{
                    marginTop: "20px",
                    borderCollapse: "collapse",
                    width: "100%",
                    height: "48px;",
                  }}
                  // border="1"
                >
                  <tr style={{ textAlign: "center", height: "24px" }}>
                    <th>Nome</th>
                    <td>Matteo Pellizzola</td>
                  </tr>
                  <tr style={{ textAlign: "center", height: "24px" }}>
                    <th>IBAN</th>
                    <td>IT86 T036 4601 6005 2627 6429 931</td>
                  </tr>
                  <tr style={{ textAlign: "center", height: "24px" }}>
                    <th>BIC</th>
                    <td>NTSBITM1XXX</td>
                  </tr>
                </table>
                <div>
                  Quando riceverò il bonifico potrò elaborare il tuo ordine.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
