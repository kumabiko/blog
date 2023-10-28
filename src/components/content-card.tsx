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
    <Link href={to}>
      <Card
        className={cn("h-[200px] w-[200px] border-none shadow-none", className)}
        {...props}
      >
        <Image
          src={eyecatch?.url ?? "/images/NoImage.svg"}
          alt={title}
          width={200}
          height={105}
          className="mb-2 rounded"
        />
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>
          <time dateTime={revisedAt ?? createdAt}>
            {formatFromDateString(revisedAt ?? createdAt)}
          </time>
        </CardDescription>
      </Card>
    </Link>
  );
}
