
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "./components/theme-switcher";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#FDEEDC] dark:bg-[#28221B]">
      {/* navbar */}
      <div className="flex items-center h-14 w-screen bg-[#E36414]">
        <div className="mx-12 mt-2 left-0 font-kumar font-semibold 
        text-[24px] text-[#FFD8A9] dark:text-[#28221B]">Chanifan</div>
        {/* menu */}
        <div className="flex mx-12 space-x-8 absolute right-0">
          <div className="font-playfair text-lg text-[#FFD8A9] dark:text-[#28221B]">Home</div>
          <div className="font-playfair text-lg text-[#FFD8A9] dark:text-[#28221B]">Portofolio</div>
          <div className="font-playfair text-lg text-[#FFD8A9] dark:text-[#28221B]">Skills</div>
          <div className="font-playfair text-lg text-[#FFD8A9] dark:text-[#28221B]">Contact</div>
          <ThemeProvider attribute="class">
            <ThemeSwitcher/>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
