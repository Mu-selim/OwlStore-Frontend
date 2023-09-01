import { WhatsAppIcon } from "./icons/whatsAppIcon";
import { FaceBookIcon } from "./icons/facebookIcon";
import { TwitterIcon  } from "./icons/twitterIcon";
import { InstagramIcon } from "./icons/instgramIcon";


export function Footer(){
    const year = new Date().getFullYear;
    return(
        <>
            <div className="footer  bg-secondary bottom-0  w-full p-2 ">
                <div className="follow-us">
                    <p className="text-primary font-bold my-1">Follow us on Social Media</p>
                    <div className="social-media flex gap-3">
                        <div className="w-8">
                            <FaceBookIcon color={"#edcf5d"}/>
                        </div>
                        <div className="w-8">
                            <TwitterIcon color={"#edcf5d"}/>
                        </div>
                        <div className="w-8">
                            <InstagramIcon color={"#edcf5d"}/>
                        </div>
                        <div className="w-8">
                            <WhatsAppIcon color={"#edcf5d"}/>
                        </div>
                    </div>
                </div>
                <div className="copy-rights text-sm text-primary flex flex-col justify-center items-center">
                    <p> &copy; CopyRights {year}</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </>
    );
}