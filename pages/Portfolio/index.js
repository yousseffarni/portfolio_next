import Portfolio from './Portfolio';
import { DataProvider } from './context/DataProvider';

export default function index(props) {
  return (
    <DataProvider>
      <Portfolio Language={props.Language} />
    </DataProvider>
  )
}
