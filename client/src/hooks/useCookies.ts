import { deleteCookie, getCookie } from "@/utils/cookies";
import router from "next/router";

export async function getSession() {
  try {
    const cookie = await getCookie();

    return cookie;
  } catch (error) {
    console.log(error);
  }
}

export async function destroySession() {
  try {
    await deleteCookie();
    localStorage.clear();

    router.push("/");
  } catch (error) {
    console.log(error);
  }
}
