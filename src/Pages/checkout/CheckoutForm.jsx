import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ProductsStoreContext } from "../../store/products";
import { observer } from "mobx-react";
import api from "../../services/api";
import { renderToString } from "react-dom/server";
import { EmailConfirm } from "../../Components/EmailConfirm";

export const CheckoutForm = observer((props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = React.useRef();
  const onSubmit = (data) => console.log(data);
  const [totals, setTotals] = useState();

  const productStore = useContext(ProductsStoreContext);

  console.log(errors);
  console.log(totals);

  useEffect(() => {
    productStore.fetchProductsToBuy();
  }, []);

  const renderTotals = () => {
    let result = 0;
    if (totals) {
      Object?.keys(totals)?.forEach((key) => {
        const singlePrice = totals[key]?.price;
        result += singlePrice;
      });
    }

    console.log(totals);

    return result.toFixed(2);
  };

  const sendEmail = (formData) => {
    const emailHtml = renderToString(
      <EmailConfirm formData={formData} totals={totals} />
    );

    console.log(totals);

    formData.html = emailHtml; //`<strong>and easy to do anywhere, even with Node.js</strong> ${JSON.stringify(formData)}`;

    api.emails.sendConfirmation(formData);
  };

  // return <EmailConfirm />;

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit(sendEmail)} ref={formRef}>
        <div>
          <label className="rich-label" htmlFor="paymentMethod">
            Metodo di pagamento:{" "}
          </label>
          <select
            {...register("paymentMethod", { required: true })}
            className={errors?.name ? "is-invalid" : ""}
          >
            <option disabled selected value="">
              seleziona...
            </option>
            <option value="satispay">satispay</option>
            <option value="bankTransfer">bankTransfer</option>
          </select>
        </div>

        <div>
          <label className="rich-label" htmlFor="shipping">
            Consegna:
          </label>
          <select
            {...register("shipping", { required: true })}
            className={errors?.name ? "is-invalid" : ""}
          >
            <option disabled selected value="">
              seleziona...
            </option>
            <option value="lab">Ritiro in laboratorio</option>
            <option value="home">Consegna a casa - 2€</option>
          </select>
        </div>

        <div>
          <label className="rich-label">I tuoi dati:</label>
          {/* NAME AND SURNAME */}
          <div className="row">
            <div className="col-12 col-sm-6">
              <input
                className={errors?.name ? "is-invalid" : ""}
                type="text"
                placeholder={errors?.name?.message ?? "Nome"}
                {...register("name", { required: "Il nome è obbligatorio" })}
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                className={errors?.surname ? "is-invalid" : ""}
                type="text"
                placeholder={errors?.surname?.message ?? "Cognome"}
                {...register("surname", {
                  required: "Il cognome è obbligatorio",
                })}
              />
            </div>
          </div>
          {/* ADDRESS */}
          <div className="row">
            <div className="col-7 col-sm-9">
              <input
                className={errors.address ? "is-invalid" : ""}
                type="text"
                placeholder={errors?.address?.message ?? "Indirizzo"}
                {...register("address", {
                  required: "L'indirizzo è obbligatorio",
                })}
              />
            </div>
            <div className="col-5 col-sm-3">
              <input
                className={errors.addressNumber ? "is-invalid" : ""}
                type="text"
                placeholder={errors?.addressNumber?.message ?? "Civico"}
                {...register("addressNumber", { required: "N° richiesto" })}
              />
            </div>
          </div>
          <input
            className={errors.city ? "is-invalid" : ""}
            type="text"
            placeholder="city to be changed to select"
            {...register("city", { required: "Il comune è obbligatorio" })}
          />
          <input
            className={errors.cap ? "is-invalid" : ""}
            type="text"
            placeholder={errors?.cap?.message ?? "Cap"}
            {...register("cap", { required: "Il cap è obbligatorio" })}
          />
          <select {...register("province", { required: true })}>
            <option value="Torino">Torino</option>
            {/* <option value="- - -">- - -</option>
            <option value="Agrigento">Agrigento</option>
            <option value="Alessandria">Alessandria</option>
            <option value="Ancona">Ancona</option>
            <option value="Aosta">Aosta</option>
            <option value="Arezzo">Arezzo</option>
            <option value="Ascoli Piceno">Ascoli Piceno</option>
            <option value="Asti">Asti</option>
            <option value="Avellino">Avellino</option>
            <option value="Bari">Bari</option>
            <option value="Barletta-Andria-Trani">Barletta-Andria-Trani</option>
            <option value="Belluno">Belluno</option>
            <option value="Benevento">Benevento</option>
            <option value="Bergamo">Bergamo</option>
            <option value="Biella">Biella</option>
            <option value="Bologna">Bologna</option>
            <option value="Bolzano">Bolzano</option>
            <option value="Brescia">Brescia</option>
            <option value="Brindisi">Brindisi</option>
            <option value="Cagliari">Cagliari</option>
            <option value="Caltanissetta">Caltanissetta</option>
            <option value="Campobasso">Campobasso</option>
            <option value="Carbonia-Iglesias">Carbonia-Iglesias</option>
            <option value="Caserta">Caserta</option>
            <option value="Catania">Catania</option>
            <option value="Catanzaro">Catanzaro</option>
            <option value="Chieti">Chieti</option>
            <option value="Como">Como</option>
            <option value="Cosenza">Cosenza</option>
            <option value="Cremona">Cremona</option>
            <option value="Crotone">Crotone</option>
            <option value="Cuneo">Cuneo</option>
            <option value="Enna">Enna</option>
            <option value="Fermo">Fermo</option>
            <option value="Ferrara">Ferrara</option>
            <option value="Firenze">Firenze</option>
            <option value="Foggia">Foggia</option>
            <option value="Forlì-Cesena">Forlì-Cesena</option>
            <option value="Frosinone">Frosinone</option>
            <option value="Genova">Genova</option>
            <option value="Gorizia">Gorizia</option>
            <option value="Grosseto">Grosseto</option>
            <option value="Imperia">Imperia</option>
            <option value="Isernia">Isernia</option>
            <option value="La Spezia">La Spezia</option>
            <option value="LAquila">LAquila</option>
            <option value="Latina">Latina</option>
            <option value="Lecce">Lecce</option>
            <option value="Lecco">Lecco</option>
            <option value="Livorno">Livorno</option>
            <option value="Lodi">Lodi</option>
            <option value="Lucca">Lucca</option>
            <option value="Macerata">Macerata</option>
            <option value="Mantova">Mantova</option>
            <option value="Massa e Carrara">Massa e Carrara</option>
            <option value="Matera">Matera</option>
            <option value="Medio Campidano">Medio Campidano</option>
            <option value="Messina">Messina</option>
            <option value="Milano">Milano</option>
            <option value="Modena">Modena</option>
            <option value="Monza e Brianza">Monza e Brianza</option>
            <option value="Napoli">Napoli</option>
            <option value="Novara">Novara</option>
            <option value="Nuoro">Nuoro</option>
            <option value="Ogliastra">Ogliastra</option>
            <option value="Olbia-Tempio">Olbia-Tempio</option>
            <option value="Oristano">Oristano</option>
            <option value="Padova">Padova</option>
            <option value="Palermo">Palermo</option>
            <option value="Parma">Parma</option>
            <option value="Pavia">Pavia</option>
            <option value="Perugia">Perugia</option>
            <option value="Pesaro e Urbino">Pesaro e Urbino</option>
            <option value="Pescara">Pescara</option>
            <option value="Piacenza">Piacenza</option>
            <option value="Pisa">Pisa</option>
            <option value="Pistoia">Pistoia</option>
            <option value="Pordenone">Pordenone</option>
            <option value="Potenza">Potenza</option>
            <option value="Prato">Prato</option>
            <option value="Ravenna">Ravenna</option>
            <option value="Rimini">Rimini</option>
            <option value="Ragusa">Ragusa</option>
            <option value="Reggio Calabria">Reggio Calabria</option>
            <option value="Reggio Emilia">Reggio Emilia</option>
            <option value="Rieti">Rieti</option>
            <option value="Roma">Roma</option>
            <option value="Rovigo">Rovigo</option>
            <option value="Salerno">Salerno</option>
            <option value="Sassari">Sassari</option>
            <option value="Savona">Savona</option>
            <option value="Siena">Siena</option>
            <option value="Siracusa">Siracusa</option>
            <option value="Sondrio">Sondrio</option>
            <option value="Taranto">Taranto</option>
            <option value="Teramo">Teramo</option>
            <option value="Terni">Terni</option>
            <option value="Trapani">Trapani</option>
            <option value="Trento">Trento</option>
            <option value="Treviso">Treviso</option>
            <option value="Trieste">Trieste</option>
            <option value="Udine">Udine</option>
            <option value="Varese">Varese</option>
            <option value="Venezia">Venezia</option>
            <option value="Verbano-Cusio-Ossola">Verbano-Cusio-Ossola</option>
            <option value="Vercelli">Vercelli</option>
            <option value="Verona">Verona</option>
            <option value="Vibo Valentia">Vibo Valentia</option>
            <option value="Vicenza">Vicenza</option>
            <option value="Viterbo">Viterbo</option> */}
          </select>
          <div className="row">
            <div className="col-12 col-sm-6">
              <input
                className={errors.mail ? "is-invalid" : ""}
                type="email"
                placeholder={errors?.mail?.message ?? "Mail"}
                {...register("mail", { required: "La mail è obbligatoria" })}
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                className={errors.phone ? "is-invalid" : ""}
                type="tel"
                placeholder={errors?.phone?.message ?? "Cellulare"}
                {...register("phone", {
                  required: "Il numero di cellulare è obbligatorio",
                })}
              />
            </div>
          </div>
        </div>
        <div>
          <label className="rich-label">Scegli i prodotti:</label>

          {productStore.productsToBuy
            ?.filter((product) => product.online)
            ?.map((product) => (
              <div className="checkout-products">
                <div>
                  {product.image && (
                    <div className="image-wrapper">
                      <img src={product.image} />
                    </div>
                  )}
                  <label>{product.name}</label>
                </div>
                <div>€ {parseFloat(product.price).toFixed(2)} al pezzo</div>
                <select
                  key={product._id}
                  {...register(product.name)}
                  onChange={(e) => {
                    console.log(e.target);
                    setTotals({
                      ...totals,
                      [product._id]: {
                        name: product.name,
                        price: parseFloat(e.target.value),
                        quantity: e.target.selectedOptions[0].text,
                      },
                    });
                  }}
                >
                  <option value={1 * parseFloat("0")}>-</option>
                  <option value={(1 * parseFloat(product.price)).toFixed(2)}>
                    1
                  </option>
                  <option value={(2 * parseFloat(product.price)).toFixed(2)}>
                    2
                  </option>
                </select>
              </div>
            ))}
        </div>
        {/* <input type="hidden" value={parseFloat(pane) + parseFloat(biscotti)} /> */}
        <div className="d-flex align-items-center">
          <span className="w-75 h6">Totale: {renderTotals()} €</span>
          <input type="submit" className="button btn-primary" />
        </div>
      </form>
      <div className="checkout-recap">
        <div>
          recap:
          {totals &&
            Object?.keys(totals)?.map((key) =>
              totals[key]?.quantity != "-" ? (
                <div key={key}>
                  {totals[key]?.name}: {totals[key]?.quantity} -{" "}
                  {totals[key]?.price}
                </div>
              ) : (
                <></>
              )
            )}
        </div>
      </div>
    </div>
  );
});
