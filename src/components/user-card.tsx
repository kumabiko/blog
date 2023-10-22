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
import { Github } from "lucide-react";

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
      <CardFooter>
        <Button className="w-full" asChild>
          <a
            href={"https://github.com/kumabiko"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Github className="mr-2 h-4 w-4" /> Github
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
