import { Information } from "@/lib/microcms";

type Props = Pick<Information, "copyright">;

export const Footer = ({ copyright }: Props) => {
  return (
    <footer className="flex w-full justify-center px-4 py-2">
      <small>{copyright}</small>
    </footer>
  );
};
