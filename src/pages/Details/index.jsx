import { Container } from "./style"
import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
      <h1>Carlos Felipe</h1>
      <p>Meu nome aqui</p>

      <Button tittle='Iniciar' loading/>
      <Button tittle='Ativar'/>
      <Button tittle='Voltar'/>
    </Container>
  )
}
