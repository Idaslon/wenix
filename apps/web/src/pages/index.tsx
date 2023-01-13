import { styled, TextArea } from '@wenix/ui'

const Container = styled('div', {
  width: '100%',
  maxWidth: '600px',

  marginInline: 'auto',
  marginTop: '120px',

  padding: '20px',

  backgroundColor: '$black600',
  borderRadius: '10px',
})

const Home = () => {
  return (
    <Container>
      <TextArea placeholder="Tell what you think..." />
    </Container>
  )
}

export default Home
