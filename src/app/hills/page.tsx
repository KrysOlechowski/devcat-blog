import { HILLS_1 } from "@/components/marketing/HILLS_1";
import { HILLS_2 } from "@/components/marketing/HILLS_2";
import { HILLS_3 } from "@/components/marketing/HILLS_3";
import { HILLS_4 } from "@/components/marketing/HILLS_4";
import { HILLS_5 } from "@/components/marketing/HILLS_5";

export default function Hills() {
  return (
    <div className="h-screen relative">
      <div className="absolute bottom-0 w-full">
        <HILLS_5 />
      </div>
      <div className="absolute bottom-0 w-full">
        <HILLS_4 />
      </div>
      <div className="absolute bottom-0 w-full">
        <HILLS_3 />
      </div>

      <div className="absolute bottom-0 w-full">
        <HILLS_2 />
      </div>
      <div className="absolute bottom-0 w-full">
        <HILLS_1 />
      </div>
    </div>
  );
}
