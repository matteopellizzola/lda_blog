import { executeQuery } from "@datocms/cda-client";
import { buildClient } from "@datocms/cma-client-browser";
import { heroQuery, heroQuery2 } from "./graphQL/home";

const options = {
  token: "6f3365cf386a2ee3f6936678d38237",
};

const home = {
  getHomePage: async () => {
    //TODO; sistemare il salvataggio!
    if (localStorage.getItem("homepageData")) {
      console.log("esco rpima");
      return JSON.parse(localStorage.getItem("homepageData"));
    }
    // const result = await executeQuery(heroQuery, options);
    const result = await executeQuery(heroQuery2, options);
    localStorage.setItem("homepageData", JSON.stringify(result));
    return result;
  },
};

export default home;
