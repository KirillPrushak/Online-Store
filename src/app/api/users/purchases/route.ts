import { getDB } from "../../../../../api-routes";
import { NextResponse } from "next/server";
export const revalidate = 3600;

export async function GET() {
  try {
    const db = await getDB();

    const user = await db.collection("users").findOne({});

    if (!user?.purchases?.length) {
      return NextResponse.json([]);
    }

    const productsIds = user.purchases.map((p: { id: number }) => p.id);

    const products = await db
      .collection("products")
      .find({ id: { $in: productsIds } })
      .toArray();

    return NextResponse.json(
      products.map((product) => {
        const { discountPercent, ...rest } = product;
        void discountPercent;
        return rest;
      })
    );
  } catch (error) {
    console.error("Ошибка сервера:", error);
    return NextResponse.json(
      { message: "Ошибка при загрузке купленных продуктовы" },
      { status: 500 }
    );
  }
}
