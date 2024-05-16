import React from "react";

import { getGamesInLibrary } from "@/helpers/vapor-helpers";
import LibraryGameCard from "@/components/LibraryGameCard";
import { ArticlesWrapper } from "./ArticlesWrapper";

export const dynamic = "force-dynamic";

async function VaporExercise() {
  const games = await getGamesInLibrary();

  return (
    <ArticlesWrapper>
      {games.map((game) => (
        <LibraryGameCard key={game.slug} game={game} />
      ))}
    </ArticlesWrapper>
  );
}

export default VaporExercise;
