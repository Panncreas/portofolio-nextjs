import WebIo from "./Web-io";
import Image from "next/image";


export default function AllIo(){
  return(
    <div className="w-full">
      <div className="flex justify-center">
        <WebIo/>
          {/* <div className="row-span-2">
              <Image width={600} height={900} src={mob01} alt="mobile"/>
          </div> */}
      </div>
    </div>
    
  );
}