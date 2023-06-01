import { Container } from "./style";

export function Button({ tittle, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >

      {loading ? 'Carregando...' : tittle}
    </Container>
  )
}