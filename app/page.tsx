"use client";
export const dynamic = "force-dynamic";

import FeedEditor from "./components/FeedEditor";
import PostCard from "./components/PostCard";
import { useAppContext } from "./context/app";
import type { TPostCard } from "./types";

const FeedProvider = () => {
  const { posts } = useAppContext();

  return (
    <div className="MainContainer">
      {/* The main post publishing component */}
      <FeedEditor />
      <div className="mt-6">
        {/* Mapping all the post */}

        {posts &&
          posts.map((itm: TPostCard, idx: number) => (
            <div className="my-4" key={idx}>
              <PostCard
                description={itm.description}
                emoji={itm.emoji}
                image={itm.image}
                name={itm.name}
                time={itm.time}
              />
            </div>
          ))}

        {/* Dummy Posts */}
        <div className="my-4">
          <PostCard
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla neque culpa in placeat. Cumque nobis voluptatem ducimus alias beatae Natus nulla neque culpa in placeat. Cumque nobis voluptatem ducimus alias beatae? Natus nulla neque culpa in placeat. Cumque nobis voluptatem ducimus alias beatae?"
            }
            emoji="/images/emoji1.png"
            image="/images/man.avif"
            name="Kush"
            time="5 Mins Ago"
          />
        </div>
        <div className="my-4">
          <PostCard
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla neque culpa in placeat. Cumque nobis voluptatem ducimus alias beatae Natus nulla neque culpa in placeat. Cumque nobis voluptatem ducimus alias beatae? Natus nulla neque culpa in placeat. Cumque nobis voluptatem ducimus alias beatae?"
            }
            emoji="/images/emoji2.png"
            image="/images/man.avif"
            name="Kush"
            time="5 Mins Ago"
          />
        </div>
        <PostCard
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla neque culpa in placeat. Cumque nobis voluptatem ducimus alias beatae Natus nulla neque culpa in placeat. Cumque nobis voluptatem ducimus alias beatae? Natus nulla neque culpa in placeat. Cumque nobis voluptatem ducimus alias beatae?"
          }
          emoji="/images/emoji1.png"
          image="/images/man.avif"
          name="Kush"
          time="5 Mins Ago"
        />
      </div>
    </div>
  );
};

export default FeedProvider;
