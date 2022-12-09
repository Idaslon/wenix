import prisma from "./prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Darlon',
      email: 'darlon@example.com',
      password: '123'
    }
  })

  console.log(user);
}

main()
