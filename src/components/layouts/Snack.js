import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';

/**
 * 
 * @param {*} props 
 * 
 * 
 */
export default function Snack(props) {
    return (
        <div>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
         /** Open - Boolean: True/False */
        open={props.open}
        autoHideDuration={3000}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
         /** Close - Boolean: True/False */
        onClose={() => props.close}
         /** Message - Text */
        message={<span id="message-id">{props.message}</span>}
      />
        </div>
    )
}
