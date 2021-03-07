import React          from "react";
import { ITrack }     from "../../types/track";
import { MainLayout } from "../../layouts/MainLayout";
import { Button }     from "@material-ui/core";
import { useRouter }  from "next/router";
import Grid           from '@material-ui/core/Grid';
import TextField      from '@material-ui/core/TextField';

const TrackPage = () => {
  const router = useRouter();
  const track: ITrack = {
    _id: "id1",
    name: "Track 1",
    artist: "Artist 1",
    audio:
      "http://localhost:5000/audio/3d2f7cb6-bfca-44cd-84d0-1b29bd79ae6e.mp3",
    picture:
      "http://localhost:5000/image/85e627e1-b345-434b-9ccb-3243084be9f0.jpg",
    comments: [],
    listens: 0,
    text: "Text 1",
  };

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        К списку
      </Button>
      <Grid container style={{margin: '20px 0'}}>
        <img src={track.picture} width={200} height={200} alt=""/>
        <div style={{marginLeft: 30}}>
          <h1>Название - {track.name}</h1>
          <h1>Испольнитель - {track.artist}</h1>
          <h1>Прослушаваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова трека</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" margin={'normal'} fullWidth/>
        <TextField label="Комментарий" margin={'normal'} fullWidth multiline rows={4}/>
        <Button>
          Отправить
        </Button>
      </Grid>

      <div>
        {track.comments.map(comment =>
          <div key={comment._id}>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
