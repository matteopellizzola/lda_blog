function GoogleIframeMap (props) {
    return <>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.62762329637!2d7.530451415966546!3d45.07306447909824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886a9768034791%3A0xb737f5b8fff5828!2sVia%20Croce%20Dorata%2C%2010098%20Rivoli%20TO!5e0!3m2!1sit!2sit!4v1675362857790!5m2!1sit!2sit"
            width={props.width}
            height={props.height}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={props.title}>
        </iframe>
    </>;
}

export default GoogleIframeMap;