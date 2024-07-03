import * as React from 'react'; // Import React library
import Box from '@mui/material/Box'; // Import Box component from Material-UI
import Checkbox from '@mui/material/Checkbox'; // Import Checkbox component from Material-UI
import FormControlLabel from '@mui/material/FormControlLabel'; // Import FormControlLabel component from Material-UI

export default function IndeterminateCheckbox() { // Define a functional component named IndeterminateCheckbox
  const [checked, setChecked] = React.useState([true, false]); // Initialize state variable checked with array [true, false]
  const [expanded, setExpanded] = React.useState(true); // Initialize state variable expanded with true

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => { // Define a function handleChange1 that takes an event parameter
    setChecked([event.target.checked, event.target.checked]); // Update checked state with both values set to event.target.checked
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => { // Define a function handleChange2 that takes an event parameter
    setChecked([event.target.checked, checked[1]]); // Update checked state with first value set to event.target.checked and second value unchanged
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => { // Define a function handleChange3 that takes an event parameter
    setChecked([checked[0], event.target.checked]); // Update checked state with first value unchanged and second value set to event.target.checked
  };

  const toggleExpand = () => { // Define a function toggleExpand to toggle the expanded state
    setExpanded(!expanded); // Toggle the expanded state
  };

  const children = ( // Define a variable children with JSX content
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel // Render a FormControlLabel component
        label="Agriculture" // Set label for the FormControlLabel
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />} // Render a Checkbox component with specific props
      />
      <FormControlLabel // Render another FormControlLabel component
        label="Crops" // Set label for the FormControlLabel
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />} // Render a Checkbox component with specific props
      />
    </Box>
  );


  return (
  <>
    <Box sx={{ p: 2 }}>
      <FormControlLabel // Render a FormControlLabel component
        label="Agriculture & Fishing (2)"
        control={
          <div className="checkbox-container"> {/* Replace inline styles with a class name */}
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
            <div className="expand-button"> {/* Replace inline styles with a class name */}
              <button onClick={toggleExpand}>{expanded ? '▼' : '►'}</button>
            </div>
          </div>
        }
      />
      {expanded && (
        <div>{children}</div>
      )}
    </Box>
  </>
  );
}
