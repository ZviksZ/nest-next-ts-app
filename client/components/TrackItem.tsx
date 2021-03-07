import React                        from 'react';
import { ITrack }                   from '../types/track';
import { Grid, Card, IconButton }   from '@material-ui/core';
import styles                       from '../styles/TrackItem.module.scss'
import { Delete, Pause, PlayArrow } from '@material-ui/icons';
import { useRouter }                from 'next/router';
interface TrackItemProps {
  track: ITrack
  active?: boolean
}

export const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
  const router = useRouter()

  return (
    <Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton onClick={e => e.stopPropagation()}>
        {
          !active ? <PlayArrow /> : <Pause />
        }
      </IconButton>
      <img width={70} height={70} src={track.picture} alt=""/>
      <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
        <div>{track.name}</div>
        <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
      </Grid>

      {
        active && <div>02:42 / 03:22</div>
      }

      <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
        <Delete />
      </IconButton>
    </Card>
  );
};
