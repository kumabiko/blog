import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-4 py-10">
      <p className="text-xl">😢</p>
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <Button asChild>
        <a href="/">トップへ戻る</a>
      </Button>
    </main>
  );
};

export default NotFound;
