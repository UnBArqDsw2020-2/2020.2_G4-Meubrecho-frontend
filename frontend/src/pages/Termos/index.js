import React from 'react';
import { Background, Button, Titulo, Texto, Card, Container } from './styles';
import { useHistory } from 'react-router-dom';
function Termos() {
  const history = useHistory();
  return (
    <Background>
      <h1> Termos de uso</h1>
      <Container>
        <Card>
          <Titulo>SEÇÃO 1 - INFORMAÇÕES GERAIS</Titulo>
          <Texto>
            A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e
            proteção dos dados pessoais dos usuários e visitantes do site meubrechó com a finalidade de demonstrar
            absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são
            coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações
            pessoais.
          </Texto>
        </Card>
        <Card>
          <Titulo>SEÇÃO 2 - COMO RECOLHEMOS OS DADOS PESSOAIS DO USUÁRIO?</Titulo>
          <Texto>
            Quando o usuário cria uma conta/perfil na plataforma, esses dados são os dados de identificação básicos,
            como e-mail, nome completo, CPF . A partir deles, podemos identificar o usuário, além de garantir uma maior
            segurança e bem-estar às suas necessidade. Ficam cientes os usuários e visitantes de que seu perfil na
            plataforma estará acessível a todos demais usuários e visitantes da plataforma. Além disso, para permitir o
            acesso do usuário a determinados conteúdos da plataforma, exclusivo para usuários cadastrados
          </Texto>
        </Card>
        <Card>
          <Titulo>SEÇÃO 3 - DOS SERVIÇOS OFERECIDOS</Titulo>
          <Texto>
            A plataforma meubrechó não se responsabiliza por mal uso da plataforma. O Objetivo do meubrechó é conectar
            possiveis compradores com possiveis vendedores. Qualquer negociação de valores, transporte, reembolso,
            ficará por conta dos usuários finais. Além disso, não nos responsabilizamos por qualquer tipo de transação
            finaceira realizada entre os mesmos.
          </Texto>
        </Card>
      </Container>
      <Button onClick={() => history.push('/register')}>Aceitar</Button>
    </Background>
  );
}

export default Termos;
