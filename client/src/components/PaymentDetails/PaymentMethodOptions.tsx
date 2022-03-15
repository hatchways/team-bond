import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { Button, FormHelperText, Typography } from '@mui/material';

const cards: Card[] = [
  { label: 'Visa - 1234', id: 1 },
  { label: 'Master Card - 5678', id: 2 },
  { label: 'America Express - 1234', id: 3 },
];

interface Card {
  id: number;
  label: string;
}

interface Props {
  amount: number;
}

export const PaymentMethodOptions = ({ amount }: Props) => {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Choose a payment method');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(selectedPaymentMethod);
    event.preventDefault();
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(selectedPaymentMethod);
    setSelectedPaymentMethod((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="error-radios">
          <Typography
            sx={{
              color: 'primary.main',
            }}
          >
            Payment Method
          </Typography>
        </FormLabel>
        <RadioGroup
          aria-labelledby="error-radios"
          name="payment"
          value={selectedPaymentMethod}
          onChange={handleRadioChange}
        >
          {cards.map((card: Card) => (
            <FormControlLabel key={card.id} value={card.label} control={<Radio />} label={card.label} />
          ))}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Pay {'$' + amount.toFixed(2).toString()}
        </Button>
      </FormControl>
    </form>
  );
};

export default PaymentMethodOptions;
