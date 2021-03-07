import React           from 'react';
import { MainLayout }  from '../../layouts/MainLayout';
import { StepWrapper } from '../../components/StepWrapper';
import { Grid }        from '@material-ui/core';
import Button          from '@material-ui/core/Button';

const Create = () => {
  const next = () => {

  }
  const back = () => {

  }

  return (
    <MainLayout>
      <StepWrapper activeStep={1}>
        <h1></h1>
      </StepWrapper>
      <Grid>
        <Button onClick={back}>Назад</Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create

