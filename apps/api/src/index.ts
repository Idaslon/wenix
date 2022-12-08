import prisma from "./prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Darlon',
      email: 'darlon@example.com'
    }
  })

  console.log(user);
}

main()
