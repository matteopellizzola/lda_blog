import { executeQuery } from "@datocms/cda-client";
import { heroQuery } from "./graphQL/home";

const options = {
  token: "6f3365cf386a2ee3f6936678d38237",
};

const home = {
  getHomeHeroes: async () => {
    const result = await executeQuery(heroQuery, options);
    localStorage.setItem("homeHeroes", JSON.stringify(result.allHeroImages));
    return result;
  },
};

export default home;
