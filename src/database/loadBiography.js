import { Biography, BiographyObj } from "./biography";

import image from "../static/images/aboutImage.jpg";

function loadBiography() {
  const transcript = new BiographyObj();
  const loremIpsum = `
Sono mamma e ho sentito il bisogno di nutrire i miei figli con alimenti buoni e di cui potessi conoscere il più possibile, dalla provenienza alle mani che lo hanno lavorato. Conoscere il produttore e il suo volto mi rassicura.
Da sempre ho amato condividere con gli amici momenti di gioia tra chiacchiere e risate accompagnate dai miei piatti.<br>
Impastare e combinare acqua e farina, in ogni sua forma, mi fa sentire in connessione con la natura, che con tanta generosità ci soddisfa.<br><br>
Sono nata e vivo in città, ma è nella campagna che, grazie ai suoi paesaggi e ai suoi colori, mi sento a casa. I colori della terra, del giallo e dell'ocra mi trasmettono serenità e tonificano la mia energia.`;

  const loremIpsum2 = `La mia filosofia è quella di ricercare il più possibile materie prime di ottima qualità che possano donare energia, aiutare il nostro organismo a mantenersi in salute e, non ultimo, appagare il gusto.<br>
Questo laboratorio nasce anche con l'intento di creare momenti di socialità in cui condividere nozioni ed esperienze attorno al cibo`;

  transcript.add(new Biography("mainParagraph", loremIpsum));
  transcript.add(new Biography("secondParagraph", loremIpsum2));
  transcript.add(new Biography("mainImage", image));

  return transcript;
}

export default loadBiography;