import { useState } from 'react';
import { useNavigate } from 'react-router';

// import jpIMG from './assets/jp.svg';

import { Container, ContainerLogin, WrapLogin, LoginForm, WrapInput, ContainerLoginFormBtn, TextCenterDiv } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerLogin>
        <WrapLogin>
          <LoginForm>
            <span className='login-form-title'> Bem vindo </span>

            <span className='login-form-title'>
              {/* <img src={jpIMG} alt='Jovem Programador' /> */}
            </span>

            <WrapInput>
              <input
                className={email !== '' ? 'has-val input' : 'input'}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Email'></span>
            </WrapInput>

            <WrapInput>
              <input
                className={password !== '' ? 'has-val input' : 'input'}
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Senha'></span>
            </WrapInput>

            <ContainerLoginFormBtn>
              <button className='login-form-btn'
                onClick={() => navigate('/')}
              >
                Login
              </button>
            </ContainerLoginFormBtn>
            <TextCenterDiv>
              <span className='txt1'>Não possui conta? </span>
              <a className='txt2' href='/login'>
                Criar conta
              </a>
            </TextCenterDiv>
          </LoginForm>
        </WrapLogin>
      </ContainerLogin>
    </Container>
  );
}
