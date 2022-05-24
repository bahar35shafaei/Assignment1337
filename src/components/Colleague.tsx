import { SvgIcons } from '../assets/svg';
import { IColleague } from '../interfaces';
import ImageTemplate from '../assets/image-placeholder.svg';
import Icon from './Icon';

interface IColleagueProps {
  colleague: IColleague;
}

export default function Colleague(props: IColleagueProps) {
  const { Twitter, Linkdin, Github } = SvgIcons;

  const {
    colleague: {
      name, office, gitHub, linkedIn, twitter,
    },
  } = props;

  return (
    <div className="flex flex-col items-center justify-between rounded-l p-4 font-sans text-sm font-normal bg-white shadow-xl h-96">
      <div className="flex items-center justify-center h-64 bg-slate-100 w-full rounded-l">
        <img src={ImageTemplate} alt="ImageTemplate" className="h-28 w-32" />
      </div>
      <div className="flex flex-row justify-between items-center  w-full mt-4">
        <span className="font-semibold text-xl">{name}</span>
        <div className="flex flex-row justify-between items-center md:flex-row sm:flex-col">
          {linkedIn && <Icon imageSource={Linkdin} />}
          {gitHub && <Icon imageSource={Github} />}
          {twitter && <Icon imageSource={Twitter} />}
        </div>
      </div>
      <span className="flex w-full font-semibold text-xl">{office}</span>
    </div>
  );
}
