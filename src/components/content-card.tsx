import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Blog, Category } from "@/lib/microcms";
import { cn } from "@/lib/utils";
import { formatFromDateString } from "@/utils/date";

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
        <div className="flex">
          <Image
            src={eyecatch?.url ?? "/images/no_image.svg"}
            alt={title}
            width={200}
            height={105}
            className="rounded-lg"
          />

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
