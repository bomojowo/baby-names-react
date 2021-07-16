import "./DisplayNames.css";
import filterList from "../utils/filterList";

interface IName {
  id: number;
  name: string;
  sex: string;
}

interface DisplayNamesProps {
  search: string;
}

function DisplayNames({ search }: DisplayNamesProps): JSX.Element {
  const filteredList = filterList({ search });
  return (
    <div>
      <div className="names-container">
        <>
          {filteredList.map((babyName: IName) => (
            <div key={babyName.id} className="each-name">
              {babyName.name} ({babyName.sex})
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

export default DisplayNames;
