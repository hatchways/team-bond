interface Props {
  filter: 'CURRENT' | 'PAST_DUE' | 'PAID';
}

const CustomerBookingList = ({ filter }: Props) => {
  return <h1>CustomerBookingList {filter}</h1>;
};

export default CustomerBookingList;
