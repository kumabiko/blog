import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getInformation } from "@/lib/microcms";
import { cn } from "@/lib/utils";
import { TbBrandGithub, TbBrandX } from "react-icons/tb";

type CardProps = React.ComponentProps<typeof Card>;

export const ProfileCard = async ({ className, ...props }: CardProps) => {
  const information = await getInformation();

  const {
    profileName,
    profileDescription,
    profileImage,
    twitterLink,
    githubLink,
  } = information;

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <div className="flex flex-col items-center justify-center">
          {profileImage && (
            <Avatar>
              <AvatarImage src={profileImage.url} />
            </Avatar>
          )}
          <CardTitle className="text-lg">{profileName}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardDescription>{profileDescription}</CardDescription>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        {twitterLink && (
          <Button variant="outline" className="w-full" asChild>
            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <TbBrandX size={16} className="mr-2" /> X
            </a>
          </Button>
        )}
        {githubLink && (
          <Button className="w-full" asChild>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <TbBrandGithub size={16} className="mr-2" /> Github
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
