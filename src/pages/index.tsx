import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      destination: '/login',
      permanent: true,
    },
  };
};

const Home = () => {
  return <h1>Home</h1>;
};

export default Home;
