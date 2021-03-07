import React          from 'react';
import { ITrack }     from '../../types/track';
import { MainLayout } from '../../layouts/MainLayout';
import { Button }     from '@material-ui/core';
import { useRouter }  from 'next/router';

const TrackPage = () => {
  const router = useRouter();
  const track: ITrack = {
    _id: 'id1',
    name: 'Track 1',
    artist: 'Artist 1',
    audio: 'http://localhost:5000/audio/3d2f7cb6-bfca-44cd-84d0-1b29bd79ae6e.mp3',
    picture: 'http://localhost:5000/image/85e627e1-b345-434b-9ccb-3243084be9f0.jpg',
    comments: [],
    listens: 0,
    text: 'Text 1',
  };

  return (
    <MainLayout>
      <Button onClick={() => router.push('/tracks')}>К списку</Button>
    </MainLayout>
  );
};

export default TrackPage;

