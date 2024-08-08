import { FC } from 'react';
import './HomePage.scss';
import { Container } from '@components/Container';
import { MainScreen } from '@components/MainScreen';
import { About } from '@components/About';
import { Services } from '@components/Services';

export const HomePage: FC = () => {
  return (
    <div className="HomePage">
      <Container>
        <MainScreen />
        <About />
        <Services />
      </Container>
    </div>
  );
};