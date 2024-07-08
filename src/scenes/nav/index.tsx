import { useState, } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";


type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (page: SelectedPage) => void,
}

const Navbar = ({
    isTopOfPage,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const flexBetween = 'flex items-center justify-between'
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
    const navBarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
        <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img src={Logo} alt="Logo" />

                    {/* RIGHT SIDE */}
                    { isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
                       <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                             />
                            <Link 
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                             />
                            <Link 
                            page="Our Classes" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link 
                            page="Contact Us" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        </div> 
                       <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                       </div>
                    </div>) : (
                        <button
                        className="rounded-full bg-secondary-500 p-2"
                        onClick={() => setMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                    ) }
                </div>
            </div>
        </div>

        {/* Mobile Menu */}

        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed top-0 z-50 h-full -w-[300px] bg-primary-100 p-6 right-0 drop-shadow-xl">
                <div className="flex justify-end">
                    <XMarkIcon className="h-6 w-6 text-white" onClick={() => setMenuToggled(false)} />
                </div>
                <div className="flex items-center justify-between gap-8 flex-col">
                    
                    <Link 
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                         />
                    <Link 
                        page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                         />
                    <Link 
                        page="Our Classes" 
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                         />
                    <Link 
                        page="Contact Us" 
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                         />
                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
            </div>
        ) }
    </nav>
  )
}

export default Navbar