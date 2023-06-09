import prisma from "$lib/db/page.js";

export async function load({}) {
  const orders = await prisma.order.findMany();

  return { orders };
}
