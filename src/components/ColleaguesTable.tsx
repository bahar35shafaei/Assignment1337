import { IColleague } from '../interfaces';

interface IColleaguesTableProps {
  colleaguesData: IColleague[];
}

const ColleaguesTable = (props: IColleaguesTableProps) => {
  const { colleaguesData } = props;

  const tableRowMaker = (colleague: IColleague) => {
    const { name, office } = colleague;

    return (
      <tr
        key={name}
        className="bg-neutral-200 border-neutral-300 font-semibold hover:bg-neutral-400 hover:text-white even:bg-white "
      >
        <td className="p-3 border-2">{name}</td>
        <td className="p-3 border-2">{office}</td>
      </tr>
    );
  };

  return (
    <table className="w-full border-2 shadow-lg mb-4">
      <thead>
        <th className="font-bold py-4 px-2 border-2 border-white bg-neutral-900 text-white">
          Name
        </th>
        <th className="font-bold py-4 px-2 border-2 border-white bg-neutral-900 text-white">
          Office
        </th>
      </thead>
      <tbody>
        {colleaguesData.map((colleague: IColleague) =>
          tableRowMaker(colleague))}
      </tbody>
    </table>
  );
};

export default ColleaguesTable;
