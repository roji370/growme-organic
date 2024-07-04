import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function IndeterminateCheckbox() { // Define a functional component named IndeterminateCheckbox
  const [checkedAgriculture, setCheckedAgriculture] = React.useState([false, false]);
  const [checkedFinance, setCheckedFinance] = React.useState([false, false]); // New state for Finance checkboxes

    // Separate state for each section's expansion
    const [isAgricultureExpanded, setIsAgricultureExpanded] = React.useState(false);
    const [isFinanceExpanded, setIsFinanceExpanded] = React.useState(false);

  const handleChangeAgriculture1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedAgriculture([event.target.checked, event.target.checked]);
  };

  const handleChangeAgriculture2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedAgriculture([event.target.checked, checkedAgriculture[1]]);
  };

  const handleChangeAgriculture3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedAgriculture([checkedAgriculture[0], event.target.checked]);
  };

  const handleChangeFinance1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedFinance([event.target.checked, event.target.checked]); // New handler for Finance checkboxes
  };

  const handleChangeFinance2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedFinance([event.target.checked, checkedFinance[1]]);
  };

  const handleChangeFinance3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedFinance([checkedFinance[0], event.target.checked]);
  };

  // Adjusted toggle functions
  const toggleAgricultureExpand = () => setIsAgricultureExpanded(!isAgricultureExpanded);
  const toggleFinanceExpand = () => setIsFinanceExpanded(!isFinanceExpanded);

  const childrenAgriculture = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 6 }}>
      <FormControlLabel
        label="Agriculture"
        control={<Checkbox checked={checkedAgriculture[0]} onChange={handleChangeAgriculture2} />}
      />
      <FormControlLabel
        label="Crops"
        control={<Checkbox checked={checkedAgriculture[1]} onChange={handleChangeAgriculture3} />}
      />
    </Box>
  );
    
  const childrenFinance = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 6 }}>
      <FormControlLabel
        label="Finance"
        control={<Checkbox checked={checkedFinance[0]} onChange={handleChangeFinance2} />}
      />
      <FormControlLabel
        label="Accountant"
        control={<Checkbox checked={checkedFinance[1]} onChange={handleChangeFinance3} />} 
      />
    </Box>
  );


  return (
    <>
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <FormControlLabel
          label="Agriculture & Fishing (2)"
          control={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <div className="expand-button">
                <button onClick={toggleAgricultureExpand}>{isAgricultureExpanded ? '▼' : '►'}</button>
              </div>
              <Checkbox
                checked={checkedAgriculture[0] && checkedAgriculture[1]}
                indeterminate={checkedAgriculture[0] !== checkedAgriculture[1]}
                onChange={handleChangeAgriculture1}
              />
            </Box>
          }
        />
        {isAgricultureExpanded && (
          <div>{childrenAgriculture}</div>
      )}

      {/* New section for Finance */}
      <FormControlLabel
          label="Business (2)"
          control={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <div className="expand-button">
                <button onClick={toggleFinanceExpand}>{isFinanceExpanded ? '▼' : '►'}</button>
              </div>
              <Checkbox
                checked={checkedFinance[0] && checkedFinance[1]}
                indeterminate={checkedFinance[0] !== checkedFinance[1]}
                onChange={handleChangeFinance1}
              />
            </Box>
          }
        />
        {isFinanceExpanded && (
          <div>{childrenFinance}</div>
        )}
    </Box> 
  </>
  );
}
