import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { products } from "@next/utils/products";

const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(
  request: NextApiRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;

  const product = products.find((product) => product.id == id);
  await sleep(3000);
  try {
    return new NextResponse(JSON.stringify(product), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err, {
      status: 500,
    });
  }
}
