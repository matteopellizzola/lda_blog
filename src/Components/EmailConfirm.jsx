import React from "react";
export const EmailConfirm = (
  {
    /* formData,  totals */
  }
) => {
  // console.log(formData); // This will print the form data when the user submits it.
  const formData = {
    paymentMethod: "satispay",
    name: "matteo",
    surname: "pellizzola",
    address: "via croce dorata",
    addressNumber: "17",
    city: "rivoli",
    cap: "10095",
    province: "Torino",
    mail: "matteo.pellizzola@gmail.com",
    phone: "331 708 6141",
    "671d4d924b6ca3c5f64d1b6c": "7.50",
    "671d57bc5d56ca38ccbed06b": "4.50",
    "671d4dd44b6ca3c5f64d1b6d": "9.00",
    "671e16ddc15a1f174c0a2417": "15.00",
  };

  const totals = {
    "671d4d924b6ca3c5f64d1b6c": {
      name: "Pane 1kg",
      price: 7.5,
      quantity: "1",
    },
    "671d57bc5d56ca38ccbed06b": {
      name: "Pane 500gr",
      price: 4.5,
      quantity: "1",
    },
    "671d4dd44b6ca3c5f64d1b6d": {
      name: "Grissini 200gr",
      price: 4.5,
      quantity: "1",
    },
    "671e16ddc15a1f174c0a2417": {
      name: "Focaccia",
      price: 15,
      quantity: "1",
    },
  };

  return (
    <>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <div style={{ textAlign: "center" }}>
          <a href="https://www.laboratoriodiantonella.it" target="_blank">
            <img
              height={"100px"}
              width={"auto"}
              src="https://www.laboratoriodiantonella.it/assets/logo-Cm_8sKOm.png"
              alt="logo"
            />
          </a>
          <h1>Conferma prenotazione</h1>
          <h4>La tua prenotazione e' stata accettata</h4>
        </div>
        <hr></hr>
        <div>
          Ciao {formData.name}, <br /> ho ricevuto la tua prenotazione e
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
          <div style={{ marginTop: "20px" }}>
            <h4>Pagamento</h4>
          </div>
        </div>
      </div>
    </>
  );
};

/* const qrcode = new QRCode(document.getElementById('qrcode'), {
  text: 'http://jindo.dev.naver.com/collie',
  width: 128,
  height: 128,
  colorDark : '#000',
  colorLight : '#fff',
  correctLevel : QRCode.CorrectLevel.H
});
<script src="https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs/qrcode.min.js"></script>

<div id="qrcode"></div> */
