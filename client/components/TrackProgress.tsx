import React from 'react';

interface TrackProgressProps {
  left: number
  right: number
  onChange: (e) => void
}

export const TrackProgress: React.FC<TrackProgressProps> = ({left, right, onChange}) => {
  return (
    <div style={{display: 'flex'}}>
      <input type="range" min={0} max={right} value={left} onChange={onChange}/>
      <div style={{minWidth: 75, textAlign: 'center'}}>{left} / {right}</div>
    </div>
  );
};

