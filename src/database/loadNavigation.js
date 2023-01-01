import { Navigation, NavigationList } from "./navigation";

function loadNavigation () {
    const transcript = new NavigationList();

    transcript.add(new Navigation('Chi Sono', '/about'));
    transcript.add(new Navigation('Contatti', '/contacts'));
    transcript.add(new Navigation('Menu', '/menu'));

    return transcript;
}

export default loadNavigation;