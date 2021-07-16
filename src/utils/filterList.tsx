import babyNames from "../data/babyNamesData.json";

interface filterListProps {
  search: string;
}

interface babyNameProps {
  id: number;
  name: string;
  sex: string;
}

function filterList({ search }: filterListProps): babyNameProps[] {
  const filteredList = babyNames.filter((babyname: babyNameProps) => {
    const emptyString = "";
    const nameContainsSearch = babyname.name
      .toLowerCase()
      .includes(search.toLowerCase());

    if (emptyString || nameContainsSearch) {
      return true;
    } else {
      return false;
    }
  });
  return filteredList;
}

export default filterList;
