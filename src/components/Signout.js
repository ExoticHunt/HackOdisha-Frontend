import React from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const Signout = () => {
  return (
    <div className="fs-3 text-success">
      <CheckCircleRoundedIcon sx = {{ mx: 1, fontSize: 30}} />
        Sign out successful!
    </div>
  )
}

export default Signout;