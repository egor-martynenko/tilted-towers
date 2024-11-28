import { Button } from '@/shared/ui/button/Button';
import Link from 'next/link';

interface AccountCardProps {
  account: TAccount;
}

export const AccountCard = ({ account }: AccountCardProps) => {
  return (
    <Link href="/account/1">
      <div className="border-2 border-white rounded-xl p-4 bg-slate-600 overflow-hidden">
        <div className="flex flex-wrap h-[300px] overflow-hidden">
          <img alt={account.title} className="h-auto" src={account.images[0]} />
        </div>

        <h4 className="mt-4 font-semibold text-xl leading-6">
          {account.title}
        </h4>

        <ul className="flex flex-wrap gap-1 py-4 border-t-2 border-b-2 mt-6">
          <li className="px-2 py-1.5 bg-slate-800 rounded-xl">{`Skins ${account.details.Skins}`}</li>
          <li className="px-2 py-1.5 bg-slate-800 rounded-xl">{`Vbucks ${account.details.Vbucks}`}</li>
          <li className="px-2 py-1.5 bg-slate-800 rounded-xl">{`Emotes ${account.details.Emotes}`}</li>
          <li className="px-2 py-1.5 bg-slate-800 rounded-xl">{`AccountLevel ${account.details.AccountLevel}`}</li>
          <li className="px-2 py-1.5 bg-slate-800 rounded-xl">{`Backblings ${account.details.Backblings}`}</li>
          <li className="px-2 py-1.5 bg-slate-800 rounded-xl">{`Pickaxes ${account.details.Pickaxes}`}</li>
          <li className="px-2 py-1.5 bg-slate-800 rounded-xl">{`Gliders ${account.details.Gliders}`}</li>
          <li className="px-2 py-1.5 bg-slate-800 rounded-xl">{`Loadings ${account.details.Loadings}`}</li>
        </ul>

        <div className="flex justify-between items-center pt-4">
          <div>
            <span>${account.price}</span>
            <span> usd</span>
          </div>
          <Button>Go to Chat</Button>
        </div>
      </div>
    </Link>
  );
};
