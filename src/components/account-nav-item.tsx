import { Avatar, AvatarImage } from "./ui/avatar";

const AccountNavItem = () => (
  <div className="flex items-center gap-x-2 px-4 py-8">
    <Avatar>
      <AvatarImage src="/images/kumabiko.png" />
    </Avatar>
    <div className="flex flex-col">
      <p className="text-base font-semibold">kumabiko</p>
      <p className="text-sm font-medium text-muted-foreground">@kumabiko</p>
    </div>
  </div>
);

export default AccountNavItem;
