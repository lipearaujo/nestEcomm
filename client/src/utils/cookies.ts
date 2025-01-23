"use server";

import { cookies } from "next/headers";

export async function createCookie(data: string) {
  cookies().set("access_token", data);
}

export async function getCookie() {
  const cookie = cookies().get("access_token")?.value;

  if (!cookie) return null;

  return cookie;
}

export async function deleteCookie() {
  cookies().delete("access_token");
}
