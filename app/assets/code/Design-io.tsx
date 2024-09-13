import Image from "next/image";

export default function DesignIo(){
  return(
    <div className="w-full mt-5">
      <div className="grid grid-rows-3 grid-flow-col gap-4 justify-center">
          <div className="row-span-2">
              {/* <Image width={400} height={500} src={mob01} alt="mobile"/> */}
          </div>
      </div>
    </div>
    
  );
}