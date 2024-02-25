import { ReactNode } from "react";

type Props = { children: ReactNode };

export const SideBars = ({ children }: Props) => {
  return <div className="h-full w-full">{children}</div>;
};
