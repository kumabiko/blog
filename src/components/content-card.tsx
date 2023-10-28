import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Blog } from "@/lib/microcms";
import { cn } from "@/lib/utils";
import { formatFromDateString } from "@/utils/date";

type CardProps = React.ComponentProps<typeof Card> &
  Pick<Blog, "title" | "eyecatch" | "createdAt" | "revisedAt"> & {
    to: string;
  };

export default function ContentCard({
  className,
  title,
  eyecatch,
  createdAt,
  revisedAt,
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
            src={eyecatch?.url ?? "/images/NoImage.svg"}
            alt={title}
            width={200}
            height={105}
            className="rounded-lg"
          />
          <div className="flex flex-col justify-between px-2 pt-2">
            <CardTitle className="line-clamp-3 text-base">{title}</CardTitle>
            <CardDescription>
              <time dateTime={revisedAt ?? createdAt}>
                {formatFromDateString(revisedAt ?? createdAt)}
              </time>
            </CardDescription>
          </div>
        </div>
      </Card>
    </Link>
  );
}
