import React                       from 'react';
import { MainLayout }              from '../../layouts/MainLayout';
import { Box, Grid, Button, Card } from '@material-ui/core';
import { useRouter }               from 'next/router';
import { ITrack }                  from '../../types/track';
import { TrackList }               from '../../components/TrackList';

const Index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {
      _id: "id1",
      name: "Track 1",
      artist: "Artist 1",
      audio: 'http://localhost:5000/audio/3d2f7cb6-bfca-44cd-84d0-1b29bd79ae6e.mp3',
      picture: 'http://localhost:5000/image/85e627e1-b345-434b-9ccb-3243084be9f0.jpg',
      comments: [],
      listens: 0,
      text: 'Text 1'
    },
    {
      _id: "id1",
      name: "Track 2",
      artist: "Artist 2",
      audio: 'http://localhost:5000/audio/63634207-6cc8-4b54-8b91-0f42f6d55384.mp3',
      picture: 'http://localhost:5000/image/35f1a9d4-db50-4342-8d2b-14b2d79460da.jpg',
      comments: [],
      listens: 1,
      text: 'Text 2'
    }
  ]

  return (
    <>
      <MainLayout>
        <Grid  container justifyContent="center">
          <Card style={{width: 900}}>
            <Box p={3}>
              <Grid container justifyContent="space-between">
                <h1>Список треков</h1>
                <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
              </Grid>
            </Box>

            <TrackList tracks={tracks}/>
          </Card>
        </Grid>
      </MainLayout>
    </>
  );
};


export default Index;
