import { ParamsType } from "@/types/index";

const BASE_URL = "wine-back-test.herokuapp.com";

export async function httpRequest(
  httpVerb: "GET" | "POST",
  endpoint: string,
  params: ParamsType
) {
  let queryString = "";

  let key: keyof ParamsType;

  for (key in params) {
    if (params[key]) {
      const value = params[key];

      if (queryString === "" && params[key]) {
        queryString += `${key}=${value}`;
      } else {
        queryString += `&${key}=${value}`;
      }
    }
  }

  let data = undefined;

  try {
    if (httpVerb === "GET") {
      data = await fetch(`https://${BASE_URL}/${endpoint}?${queryString}`);
      data = await data.json();
    }

    if (httpVerb === "POST") {
      data = await fetch(`https://${BASE_URL}/${endpoint}`, {
        method: "POST",
        body: JSON.stringify(params),
      });
      data = await data.json();
    }
  } catch (error) {
    data = error;
  } finally {
    return data;
  }
}
