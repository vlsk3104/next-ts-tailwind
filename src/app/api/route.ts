import { NextRequest } from "next/server";

export async function GET(req :NextRequest) {
  console.log(req.nextUrl)
  return new Response('Hello, Next.js!', {
    status: 200,
  });
}
