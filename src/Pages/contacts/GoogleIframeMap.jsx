function GoogleIframeMap(props) {
  return (
    <>
      <iframe
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.62762329637!2d7.530451415966546!3d45.07306447909824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886a9768034791%3A0xb737f5b8fff5828!2sVia%20Croce%20Dorata%2C%2010098%20Rivoli%20TO!5e0!3m2!1sit!2sit!4v1675362857790!5m2!1sit!2sit"
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.009015934512!2d7.55177039200969!3d45.0653281853787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886adc2e3a8cc5%3A0x1722fb80a21e80f6!2sVia%20Asti%2C%2082%2C%2010098%20Rivoli%20TO!5e0!3m2!1sit!2sit!4v1723494763342!5m2!1sit!2sit"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.0090122637584!2d7.554061012236092!3d45.06532825984249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886bf39e3115f3%3A0xa1bdfed778c2c604!2sLaboratorio%20di%20Antonella!5e0!3m2!1sit!2sit!4v1734286222219!5m2!1sit!2sit"
        width={props.width}
        height={props.height}
        style={{ border: 0 }}
        allowFullScreen={true}
        // loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={props.title}
      ></iframe>
    </>
  );
}

export default GoogleIframeMap;
