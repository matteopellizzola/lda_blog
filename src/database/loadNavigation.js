import { Navigation, NavigationList } from "./navigation";

function loadNavigation () {
    const transcript = new NavigationList();

    transcript.add(new Navigation('Home', '/'));
    transcript.add(new Navigation('Chi Sono', '/about'));
    transcript.add(new Navigation('Contatti', '/contacts'));
    transcript.add(new Navigation('Prodotti', '/products'));
    transcript.add(new Navigation('Ordina Online', '/checkout'));

    return transcript;
}

export default loadNavigation;