import DropDownItem from './DropDownItem';
const dropDown: JSX.Element[] = [];
for (let i = 1; i <= 8; i++) {
  dropDown.push(<DropDownItem key={i} />);
}
function Availability(): JSX.Element {
  return <div>{dropDown}</div>;
}

export default Availability;
