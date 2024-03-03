import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Blog, Category } from "@/lib/microcms";
import { cn } from "@/lib/utils";
import { formatFromDateString } from "@/utils/date";

import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";

type CardProps = React.ComponentProps<typeof Card> &
  Pick<Blog, "title" | "eyecatch" | "createdAt" | "revisedAt"> &
  Partial<Pick<Category, "name">> & {
    to: string;
  };

export default function ContentCard({
  className,
  title,
  eyecatch,
  createdAt,
  revisedAt,
  name,
  to,
  ...props
}: CardProps) {
  return (
    <Link href={to} className="w-full">
      <Card
        className={cn("w-full border-none shadow-none", className)}
        {...props}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:min-w-[200px]">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={eyecatch?.url ?? "/images/no_image.svg"}
                alt="Image"
                className="rounded-md object-cover"
                fill
              />
            </AspectRatio>
          </div>

          <div className="flex flex-col justify-between px-2 pt-2">
            <CardTitle className="line-clamp-3 text-base">{title}</CardTitle>

            <div>
              <CardDescription>
                <time dateTime={revisedAt ?? createdAt}>
                  {formatFromDateString(revisedAt ?? createdAt)}
                </time>
              </CardDescription>
              {name && <Badge variant="secondary">{name}</Badge>}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
