import React         from 'react';
import { Container } from '@material-ui/core';
import Stepper       from '@material-ui/core/Stepper';
import Step          from '@material-ui/core/Step';
import StepLabel     from '@material-ui/core/StepLabel';
import Grid          from '@material-ui/core/Grid';
import Card          from '@material-ui/core/Card';

interface StepWrapperProps {
  activeStep: number;
}
const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите трек']
export const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
  return (
    <>
      <Container>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) =>
            <Step key={index} completed={activeStep > index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          )}
        </Stepper>
        <Grid container justifyContent="center" style={{margin: '70px 0', height: 270}}>
          <Card style={{width: 600}}>
            {children}
          </Card>
        </Grid>
      </Container>
    </>
  );
};

