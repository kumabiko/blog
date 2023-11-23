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
import { cn } from "@/lib/utils";
import { TbBrandGithub, TbBrandX } from "react-icons/tb";

type CardProps = React.ComponentProps<typeof Card>;

export function UserCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <div className="flex flex-col items-center justify-center">
          <Avatar>
            <AvatarImage src="/images/kumabiko.png" />
          </Avatar>
          <CardTitle className="text-lg">kumabiko</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardDescription>
          🐣ソフトウェアエンジニア2年目 SIerのSE→HRTechのWebエンジニア
          プロダクト開発🚀とデザイン🖼が好き
        </CardDescription>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="outline" className="w-full" asChild>
          <a
            href={"https://twitter.com/kumabiko"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <TbBrandX size={16} className="mr-2" /> X
          </a>
        </Button>
        <Button className="w-full" asChild>
          <a
            href={"https://github.com/kumabiko"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <TbBrandGithub size={16} className="mr-2" /> Github
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
