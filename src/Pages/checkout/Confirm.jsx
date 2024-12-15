import React from "react";
import { useLocation } from "react-router-dom";

export const Confirm = () => {
  const location = useLocation();
  const { formData, totals, totalRendered, satispayCode } = location.state;

  return (
    <div className="checkout-page">
      <div className="padding-logo-top checkout-confirm">
        <h1 className="text-center">Grazie!</h1>
        <h4 className="text-center">Il tuo ordine è stato confermato</h4>

        <ConfirmData
          formData={formData}
          totals={totals}
          totalRendered={totalRendered}
          satispayCode={satispayCode}
        />
      </div>
    </div>
  );
};

/**
 * React component to show the confirmation page after the order is sent
 * @param {object} formData The form data
 * @param {object} totals The total of each product
 * @param {function} renderTotals A function to render the total price
 * @param {object} satispayCode The satispay code if the payment method is satispay
 * @returns {ReactElement} The react element to show the confirmation page
 */
export const ConfirmData = ({
  formData,
  totals,
  totalRendered,
  satispayCode,
}) => {
  return (
    <>
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
          <tr style={{ height: "24px" }}>
            <th>Prodotto</th>
            <th>Quantita'</th>
            <th>Prezzo</th>
          </tr>
          {totals &&
            Object?.keys(totals)?.map((key) =>
              totals[key]?.quantity != "-" ? (
                <tr key={key} style={{ height: "24px" }}>
                  <td>{totals[key]?.name}</td>
                  <td>{totals[key]?.quantity}</td>
                  <td>{totals[key]?.price}</td>
                </tr>
              ) : (
                <></>
              )
            )}
          {totalRendered && (
            <>
              <tr
                style={{
                  height: "24px",
                  borderTop: "1px solid grey",
                  width: "auto",
                }}
              >
                <td>Totale</td>
                <td></td>
                <td>{totalRendered} €</td>
              </tr>
            </>
          )}
        </table>
        <div style={{ marginTop: "20px" }}>
          <h4>Pagamento</h4>
          <div>
            Hai scelto il metodo di pagamento:{" "}
            <strong>
              {formData?.paymentMethod === "satispay"
                ? "Satispay"
                : "Bonifico bancario"}
            </strong>
            <br />
          </div>
          {formData?.paymentMethod === "satispay" ? (
            <>
              <div>
                Puoi cliccare il pulsante qui sotto, oppure inquadrare il qrCode
                per effettuare il pagamento. Una volta ricevuto il pagamento
                potrò elaborare il tuo ordine.
              </div>
              <br />
              <div className="satispay-container">
                <img src={satispayCode.qrCode} alt="satispay" />
                <a
                  target="_blank"
                  style={{
                    backgroundColor: "rgb(255, 61, 0)",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    height: "fit-content",
                    textAlign: "center",
                  }}
                  href={satispayCode.link}
                >
                  Paga ora con satispay
                </a>
              </div>
            </>
          ) : (
            <>
              <div>
                Puoi effettuare il bonifico a queste coordinate bancarie:
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
                <tr style={{ height: "24px" }}>
                  <th>Importo</th>
                  <td>{totalRendered} €</td>
                </tr>
                <tr style={{ height: "24px" }}>
                  <th>Nome</th>
                  <td>Matteo Pellizzola</td>
                </tr>
                <tr style={{ height: "24px" }}>
                  <th>IBAN</th>
                  <td>IT86 T036 4601 6005 2627 6429 931</td>
                </tr>
                <tr style={{ height: "24px" }}>
                  <th>BIC</th>
                  <td>NTSBITM1XXX</td>
                </tr>
                <tr style={{ height: "24px" }}>
                  <th>Causale</th>
                  <td>
                    {formData.name +
                      " " +
                      formData.surname +
                      " - " +
                      new Date().toISOString().slice(0, 10)}
                  </td>
                </tr>
              </table>
              <div style={{ marginBlock: "20px" }}>
                Quando riceverò il bonifico potrò elaborare il tuo ordine.
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
