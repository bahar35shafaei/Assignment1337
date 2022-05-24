import React, { useState } from 'react';
import { IFilterValue } from '../interfaces';
import { SortType } from '../enums';

interface IToolbarProps {
  filterColleaguesData: (
    filterValues: IFilterValue,
    resetFlag?: boolean,
  ) => void;
  setShowlistView: (showlistFlag: boolean) => void;
  showListView: boolean;
}

export default function Toolbar(props: IToolbarProps) {
  const { filterColleaguesData, setShowlistView, showListView } = props;

  const [filtersValues, setFiltersValues] = useState<IFilterValue>({
    name: '',
    office: '',
    sortByName: null,
    sortByOffice: null,
  });

  const resetFiltersValues = () => {
    setFiltersValues({
      name: '',
      office: '',
      sortByName: null,
      sortByOffice: null,
    });
    filterColleaguesData(filtersValues, true);
    setShowlistView(false);
  };
  const submitFiltersValues = () => {
    filterColleaguesData(filtersValues);
  };
  const { name, office, sortByName, sortByOffice } = filtersValues;
  return (
    <div className="grid w-full gap-x-10 gap-y-10 xsm:grid-col-1 sm:grid-cols-2   md:grid-cols-5 lg:grid-cols-5 my-8 bg-slate-50 rounded px-5 py-7 shadow-lg">
      <div className="flex flex-col">
        <span className="font-semibold">Name :</span>
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFiltersValues({
              ...filtersValues,
              name: e.currentTarget.value.replace(/[^a-zA-Z0-9 ]/g, ''),
            })
          }
          value={name}
          className="outline-none border-2 py-2 px-2 mt-2 rounded-md border-slate-300 bg-white shadow-xl shadow-slate-200"
          placeholder="enter the name"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">Office :</span>
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setFiltersValues({
              ...filtersValues,
              office: e.currentTarget.value.replace(/[^a-zA-Z0-9 ]/g, ''),
            })
          }
          value={office}
          className="outline-none border-2 py-2 px-2 mt-2 rounded-md border-slate-300 bg-white shadow-xl shadow-slate-200"
          placeholder="enter the Office"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">Sort By Name</span>
        <span className="flex-row">
          <input
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFiltersValues({
                ...filtersValues,
                sortByName: SortType.ASCENDING,
              })
            }
            type="radio"
            className="outline-none border-2 py-2 px-2
            mt-2 rounded-md border-slate-300 bg-white
            shadow-xl shadow-slate-200 mr-2"
            value={SortType.ASCENDING}
            name="sortByName"
            checked={sortByName === SortType.ASCENDING}
          />
          <label htmlFor="vehicle1">Ascending</label>
        </span>
        <span className="flex-row">
          <input
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFiltersValues({
                ...filtersValues,
                sortByName: SortType.DESCENDING,
              })
            }
            type="radio"
            className="outline-none border-2 py-2 px-2
            mt-2 rounded-md border-slate-300 bg-white
            shadow-xl shadow-slate-200 mr-2"
            value={SortType.DESCENDING}
            name="sortByName"
            checked={sortByName === SortType.DESCENDING}
          />
          <label htmlFor="vehicle1">Descending</label>
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">Sort By Office</span>
        <span className="flex-row">
          <input
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFiltersValues({
                ...filtersValues,
                sortByOffice: SortType.ASCENDING,
              })
            }
            type="radio"
            className="outline-none border-2 py-2 px-2
            mt-2 rounded-md border-slate-300 bg-white
            shadow-xl shadow-slate-200 mr-2"
            value={SortType.ASCENDING}
            name="sortByOffice"
            checked={sortByOffice === SortType.ASCENDING}
          />
          <label htmlFor="vehicle1">Ascending</label>
        </span>
        <span className="flex-row">
          <input
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFiltersValues({
                ...filtersValues,
                sortByOffice: SortType.DESCENDING,
              })
            }
            type="radio"
            className="outline-none border-2 py-2 px-2
            mt-2 rounded-md border-slate-300 bg-white
            shadow-xl shadow-slate-200 mr-2"
            value={SortType.DESCENDING}
            name="sortByOffice"
            checked={sortByOffice === SortType.DESCENDING}
          />
          <label htmlFor="vehicle1">Descending</label>
        </span>
      </div>
      <div className="flex md:flex-col justify-between items-center sm:flex-row">
        <button
          onClick={submitFiltersValues}
          type="button"
          className="bg-gray-500 rounded-md px-3 py-2 text-white md:mb-3 font-semibold"
        >
          SUBMIT
        </button>
        <button
          onClick={resetFiltersValues}
          type="button"
          className="bg-gray-500 rounded-md px-3 py-2 text-white font-semibold md:mb-3"
        >
          RESET
        </button>
        <button
          onClick={() => setShowlistView(!showListView)}
          type="button"
          className="bg-blue-900 rounded-md px-3 py-2 text-white font-semibold md:mb-3"
        >
          {showListView ? 'CARD VIEW' : 'LIST VIEW'}
        </button>
      </div>
    </div>
  );
}
