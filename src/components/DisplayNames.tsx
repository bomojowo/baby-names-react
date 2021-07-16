import babyNames from "../data/babyNamesData.json";
import "./DisplayNames.css";
interface IName {
  id: number;
  name: string;
  sex: string;
}
function DisplayNames(): JSX.Element {
  return (
    <div>
      <div className="names-container">
        {babyNames.map((babyName: IName) => (
          <div key={babyName.id} className="each-name">
            {babyName.name} ({babyName.sex})
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayNames;
