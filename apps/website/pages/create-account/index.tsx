import { styled } from '@stitches/react';
import { CreateAccountForm } from '@wenix/account';
import { SEO } from '../../components/seo';

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

const _CreateAccount = () => {
  return (
    <Container>
      <SEO title="Create Account" />
      <CreateAccountForm />
    </Container>
  );
};

export default _CreateAccount;
