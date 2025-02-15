import { Grid } from "./components/Grid";
import { Description, Header1 } from "@/components/Headers";
import { getPhotography } from "@/lib/getPhotography";

export const metadata = {
 title: "Photography",
 description: "Explore some of my finest photos, captured during my travels and adventures.",
};

export default async function Page() {
 const photos = await getPhotography();

 return (
  <div className="mb-16 mt-20 flex flex-col items-start justify-center">
   <Header1>My photography</Header1>
   <Description> I have a passion for photography, travel, and capturing life's most beautiful moments. Here, you can explore some of my finest photos.</Description>

   <div className="mt-12 w-full">{!photos ? <p className="mb-4 text-red-400">No images found!</p> : <Grid photos={photos} />}</div>
  </div>
 );
}
