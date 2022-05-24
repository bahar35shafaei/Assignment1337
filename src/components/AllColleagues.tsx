import React, { useState, useEffect } from 'react';
import { SortType } from '../enums';
import { IColleague, IFilterValue } from '../interfaces';
import Colleague from './Colleague';
import ColleaguesTable from './ColleaguesTable';
import Toolbar from './Toolbar';

const AllColleagues = () => {
  const [colleaguesApiData, setColleaguesApiData] = useState<
    Array<IColleague> | []
  >([
    {
      name: 'Fiserka Cvetkovska',
      email: 'biserka.cvetkovska@1337.tech',
      phoneNumber: '+38640674578',
      office: 'Ljubljana',
      manager: 'ziga.vajdic@1337.tech',
      orgUnit: '/Employees',
      mainText:
        '<p>I am an open minded and eager person that never wants to stop learning and exploring, and my journey is a proof of that.  </p> <p> I was not always interested in tech. Far from it. Actually, I was interested in everything else (sports, art, languages...). However, having an open mind and a desire for new challenges has led me to a group of friends that were already captivated by technology. They introduced me to the world of programming and my mind took the bait immediately. This environment gave me a chance to start growing as a person, mostly by asking a lot of questions, going to tech events and hack labs and doing summer coding challenges. That culminated with me enrolling to the Faculty of Computer and Information Science and getting a degree in Software Engineering.  </p> <p> Since then I have worked in different roles across different industries. From a Software Engineer to a Tech Lead and most recently as a Mentor and an Engineering Manager. What I took from all of these roles and experiences is that the only way to push ourselves and this field forward is to mingle with people (especially, with those from different backgrounds than us), to let them be themselves and learn from them by being supportive of the new ideas and perspectives they bring to the table.  </p> <p> Having a career does not stop my mind from wandering. I am constantly learning new things and exploring new horizons. I believe that unwinding and relaxing your mind helps you grow as a person too. Therefore, I try to feed my brain with different kinds of information and experiences. I do that mostly by traveling, reading non-tech literature, taking walks with my dog, hiking mountains and of course - watching some cheesy Netflix shows. </p>  ',
      gitHub: null,
      twitter: null,
      stackOverflow: null,
      linkedIn: null,
      imagePortraitUrl: 'https://i.1337co.de/profile/biserka-cvetkovska',
      imageWallOfLeetUrl: 'https://i.1337co.de/wallofleet/biserka-cvetkovska',
      highlighted: true,
      published: true,
    },
  ]);
  const [colleaguesData, setColleaguesData] = useState<Array<IColleague> | []>([
    {
      name: 'Fiserka Cvetkovska',
      email: 'biserka.cvetkovska@1337.tech',
      phoneNumber: '+38640674578',
      office: 'Ljubljana',
      manager: 'ziga.vajdic@1337.tech',
      orgUnit: '/Employees',
      mainText:
        '<p>I am an open minded and eager person that never wants to stop learning and exploring, and my journey is a proof of that.  </p> <p> I was not always interested in tech. Far from it. Actually, I was interested in everything else (sports, art, languages...). However, having an open mind and a desire for new challenges has led me to a group of friends that were already captivated by technology. They introduced me to the world of programming and my mind took the bait immediately. This environment gave me a chance to start growing as a person, mostly by asking a lot of questions, going to tech events and hack labs and doing summer coding challenges. That culminated with me enrolling to the Faculty of Computer and Information Science and getting a degree in Software Engineering.  </p> <p> Since then I have worked in different roles across different industries. From a Software Engineer to a Tech Lead and most recently as a Mentor and an Engineering Manager. What I took from all of these roles and experiences is that the only way to push ourselves and this field forward is to mingle with people (especially, with those from different backgrounds than us), to let them be themselves and learn from them by being supportive of the new ideas and perspectives they bring to the table.  </p> <p> Having a career does not stop my mind from wandering. I am constantly learning new things and exploring new horizons. I believe that unwinding and relaxing your mind helps you grow as a person too. Therefore, I try to feed my brain with different kinds of information and experiences. I do that mostly by traveling, reading non-tech literature, taking walks with my dog, hiking mountains and of course - watching some cheesy Netflix shows. </p>  ',
      gitHub: null,
      twitter: null,
      stackOverflow: null,
      linkedIn: null,
      imagePortraitUrl: 'https://i.1337co.de/profile/biserka-cvetkovska',
      imageWallOfLeetUrl: 'https://i.1337co.de/wallofleet/biserka-cvetkovska',
      highlighted: true,
      published: true,
    },
  ]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [showlistView, setShowlistView] = useState(false);

  useEffect(() => {
    setColleaguesData([...colleaguesData]);
    setColleaguesApiData([...colleaguesApiData]);
    setTimeout(() => {
      setFetchLoading(false);
    }, 2500);
  }, []);

  const filterColleaguesData = (
    filterValues: IFilterValue,
    resetFlag?: boolean,
  ) => {
    if (resetFlag) {
      setColleaguesData(colleaguesApiData);
      return;
    }

    const { name, office, sortByName, sortByOffice } = filterValues;

    const filteredColleagues = colleaguesApiData.filter(
      (colleague: IColleague) =>
        colleague.name.toLowerCase().includes(name.toLowerCase()) &&
        colleague.office.toLowerCase().includes(office.toLowerCase()),
    );

    const sortedColleaguesByName = filteredColleagues.sort(
      (a: IColleague, b: IColleague) =>
        sortByName === SortType.ASCENDING
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name),
    );

    const sortedColleaguesByOffice = sortedColleaguesByName.sort(
      (a: IColleague, b: IColleague) =>
        sortByOffice === SortType.ASCENDING
          ? a.office.localeCompare(b.office)
          : b.office.localeCompare(a.office),
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
        <div className="grid w-full gap-x-10 gap-y-10 pb-10  px-4 xsm:grid-col-1 sm:grid-cols-2   md:grid-cols-3 md:px-0   lg:grid-cols-4 ">
          {fetchLoading && (
            <div className=" flex justify-center items-center">
              <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900" />
            </div>
          )}
          {!fetchLoading &&
            !showlistView &&
            colleaguesData.map((colleague: IColleague) => (
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
