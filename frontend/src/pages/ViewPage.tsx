import { VideoBox } from "../components/ViewPage/VideoBox"
import {Box} from "../components/ViewPage/Box"
import { ListBox } from "../components/ViewPage/ListBox"

export const ViewPage=()=>{
    return (
      <div className="h-full w-full bg-gray-300 flex justify-center items-center">

        <div className="w-3/4 h-3/4 bg-red-300 rounded-2xl flex ">

        {/* left side */}
          <div className="flex flex-col w-3/4 min-h-0 h-full bg-yellow-300">

            <div className="h-3/4 w-full bg-red-400">
              <VideoBox
                url={"https://youtu.be/fb_S4aWI6Og?si=rofr9NL0dj7j_5jw"}
              ></VideoBox>
            </div>

            <div className="w-full h-1/4 flex">
              <div className="w-1/2 h-full min-h-0 border border-black">
                <ListBox title="Comments" />
              </div>

              <div className="w-1/2 h-full  border border-black">
                <ListBox title="Reviews" />
              </div>
            </div>

          </div>

          {/* right side */}
          <div className="w-1/4 h-full ">
          <div className="w-full h-full">
            <Box
              title="Description"
              descp="Big Negro Problems Require Modern Negro Solutions"
            ></Box>
            </div>
          </div>

        </div>
      </div>
    );
}