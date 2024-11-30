import { NextResponse } from "next/server";
import pro from "../../data/pro.json"

function normalizeString(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') ?? '';

  if (!query) {
    return NextResponse.json([])
  }

  const normalizedQuery = normalizeString(query);

  const filteredPro = pro.filter(
    (item) =>
      normalizedQuery(item.name).includes(normalizedQuery) ||
      normalizedQuery(item.type).includes(normalizedQuery)
  );

  return NextResponse.json(filteredPro);
}