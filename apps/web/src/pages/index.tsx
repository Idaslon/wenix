import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/login',
      permanent: true,
    },
  }
}

const Home = () => {
  return <h1>Home</h1>
}

export default Home
