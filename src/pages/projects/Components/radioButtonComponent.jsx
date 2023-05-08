import React from 'react'
import RadioGroupContext from '@mui/material/RadioGroup/RadioGroupContext'
import { FormControlLabel, RadioGroup } from '@mui/material'
const radioButtonComponent = () => {
  return (
<>
<RadioGroup 
    aria-labelledby="demo-radio-buttons-group-label"
    // defaultValue="Natural Resource"
    name="radio-buttons-group"
    value={climateffort}
    onChange={handleclimateffort}
  >
             <FormControlLabel value="Yes" control={<Radio style={{color:"#595959"}} />} label="Yes" />
              <FormControlLabel value="No" control={<Radio style={{color:"#595959"}} />} label="No" />
              <FormControlLabel value="Maybe" control={<Radio style={{color:"#595959"}} />} label="Maybe" />
            </RadioGroup>
            </>
  )
}

export default radioButtonComponent