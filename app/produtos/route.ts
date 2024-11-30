import { NextResponse } from "next/server";
import pro from "../data/pro.json"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q')?.toLowerCase();

  if (!query) {
    return NextResponse.json(pro)
  }

  const filteredPro = pro.filter (
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query)
  );

  return NextResponse.json(filteredPro);
}