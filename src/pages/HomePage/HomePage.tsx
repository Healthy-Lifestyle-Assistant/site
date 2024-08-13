import { FC } from 'react';
import './HomePage.scss';
import { Container } from '@components/Container';
import { MainScreen } from '@components/MainScreen';
import { About } from '@components/About';
import { Services } from '@components/Services';
import { TechStack } from '@components/TechStack';
import { Team } from '@components/Team';
import { ContactUs } from '@components/ContactUs';

export const HomePage: FC = () => {
  return (
    <div className="HomePage">
      <Container>
        <MainScreen />
        <About />
        <Services />
        <TechStack />
        <Team />
      </Container>
      <ContactUs />
    </div>
  );
};