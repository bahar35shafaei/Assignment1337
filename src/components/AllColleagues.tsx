import { useState, useEffect } from 'react';
import { SortType } from '../enums';
import { IColleague, IFilterValue } from '../interfaces';
import Colleague from './Colleague';
import ColleaguesTable from './ColleaguesTable';
import Toolbar from './Toolbar';
import * as Api from '../services/index';

const AllColleagues = () => {
  const [colleaguesApiData, setColleaguesApiData] = useState<
    Array<IColleague> | []
  >([]);
  const [colleaguesData, setColleaguesData] = useState<Array<IColleague> | []>(
    [],
  );
  const [fetchLoading, setFetchLoading] = useState(true);
  const [showlistView, setShowlistView] = useState(false);

  useEffect(() => {
    fetchAllColleagues();
  }, []);

  const fetchAllColleagues = () => {
    Api.getEmployees()
      .then((response) => {
        if (response.status === 200) {
          setColleaguesData(response.data);
          setColleaguesApiData(response.data);
          setFetchLoading(false);
        }
        setFetchLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const filterColleaguesData = (
    filterValues: IFilterValue,
    resetFlag?: boolean,
  ) => {
    if (resetFlag) {
      setColleaguesData(colleaguesApiData);
      return;
    }

    const {
      name, office, sortByName, sortByOffice,
    } = filterValues;

    const filteredColleagues = colleaguesApiData.filter(
      (colleague: IColleague) =>
        colleague?.name.toLowerCase().includes(name.toLowerCase())
        && colleague?.office && colleague.office.toLowerCase().includes(office.toLowerCase()),
    );

    const sortedColleaguesByName = filteredColleagues.sort(
      (a: IColleague, b: IColleague) =>
        (sortByName === SortType.ASCENDING
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)),
    );

    const sortedColleaguesByOffice = sortedColleaguesByName.sort(
      (a: IColleague, b: IColleague) =>
        (sortByOffice === SortType.ASCENDING
          ? a.office.localeCompare(b.office)
          : b.office.localeCompare(a.office)),
    );
    setColleaguesData(sortedColleaguesByOffice);
  };

  return (
    <div className="w-full bg-stone-100  text-left">
      <div className="container mx-auto pt-10 ">
        <span className="font-semibold text-3xl">
          The fellowship of the tretthon37
        </span>
        <Toolbar
          filterColleaguesData={filterColleaguesData}
          showListView={showlistView}
          setShowlistView={setShowlistView}
        />
        {fetchLoading && (
        <div className="w-full flex justify-center items-center">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900" />
        </div>
        )}
        <div className="grid w-full gap-x-10 gap-y-10 pb-10  px-4 xsm:grid-col-1 sm:grid-cols-2   md:grid-cols-3 md:px-0   lg:grid-cols-4 ">
          {!fetchLoading
            && !showlistView
            && colleaguesData?.map((colleague: IColleague) => (
              <Colleague key={colleague.name} colleague={colleague} />
            ))}
        </div>
        {!fetchLoading && showlistView && (
          <ColleaguesTable colleaguesData={colleaguesData} />
        )}
      </div>
    </div>
  );
};

export default AllColleagues;
