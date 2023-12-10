import { Information } from "@/lib/microcms";

import { Avatar, AvatarImage } from "./ui/avatar";

type Props = Pick<Information, "profileName" | "profileImage">;

export const AccountItem = ({ profileName, profileImage }: Props) => (
  <div className="flex items-center gap-x-2 px-4 py-8">
    {profileImage && (
      <Avatar>
        <AvatarImage src={profileImage.url} />
      </Avatar>
    )}
    <div className="flex flex-col">
      <p className="text-base font-semibold">{profileName}</p>
      <p className="text-sm font-medium text-muted-foreground">
        @{profileName}
      </p>
    </div>
  </div>
);
