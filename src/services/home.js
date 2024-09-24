import { executeQuery } from "@datocms/cda-client";
import { buildClient } from "@datocms/cma-client-browser";
import { heroQuery, heroQuery2 } from "./graphQL/home";

const options = {
  token: "6f3365cf386a2ee3f6936678d38237",
};

const home = {
  getHomeHeroes: async () => {
    console.log("1111");

    // const result = await executeQuery(heroQuery, options);
    const result = await executeQuery(heroQuery2, options);
    localStorage.setItem("homeHeroes", JSON.stringify(result.allHeroImages));
    return result;
  },
};

export default home;
