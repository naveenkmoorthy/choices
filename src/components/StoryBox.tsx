import type { StoryNode } from "@/types/story";

const sceneMap: Record<string, string> = {
  "City Sunrise": "/scenes/city-sunrise.svg",
  "Press Conference": "/scenes/press-conference.svg",
  "Private Penthouse": "/scenes/private-penthouse.svg",
  "Rainy Alley": "/scenes/rainy-alley.svg",
  "Rooftop Garden": "/scenes/rooftop-garden.svg",
  "Sol City Rooftops": "/scenes/sol-city-rooftops.svg",
};

type StoryBoxProps = {
  node: StoryNode;
};

export function StoryBox({ node }: StoryBoxProps) {
  const sceneImage = sceneMap[node.background];

  return (
    <section className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-900/70 p-5">
      <div className="absolute inset-0">
        {sceneImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 blur-[1px]"
              style={{ backgroundImage: `url(${sceneImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/95" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 text-xs uppercase tracking-widest text-slate-400">
            {node.background}
          </div>
        )}
      </div>

      <div className="relative z-10 space-y-2">
        <h2 className="text-lg font-semibold text-cyan-200">{node.speaker}</h2>
        <p className="leading-relaxed text-slate-100">{node.text}</p>
        {node.character ? <p className="text-sm text-slate-400">On screen: {node.character}</p> : null}
      </div>
    </section>
  );
}
