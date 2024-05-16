import { range } from "@/utils";
import { ArticlesWrapper } from "./ArticlesWrapper";

const {
  default: LibraryGameCardSkeleton,
} = require("@/components/LibraryGameCardSkeleton");

const Loading = () => {
  return (
    <ArticlesWrapper>
      {range(12).map((index) => (
        <LibraryGameCardSkeleton key={index} />
      ))}
    </ArticlesWrapper>
  );
};

export { Loading as default };
