import Container from "@components/container";
import ThemeSwitch from "@components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="
          mt-1 text-sm text-center text-gray-500 dark:text-gray-600
        ">
        Made by{" "}
        <a
          href="https://www.instagram.com/patrick_silvy/"
          rel="noopener"
          target="_blank">
          Patrick Silvy
        </a>
        {" with "}
        <a
          href="https://www.web3templates.com/?ref=stablo-template"
          rel="noopener"
          target="_blank">
          Web3Templates
        </a>
        {/* Do not remove above link */}
      </div>
      <div className="flex items-center justify-end mt-2">
        {/* <div className="mt-5">
          <a
            href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
            target="_blank"
            rel="noopener"
            className="relative block w-44">
            <Image
              src={VercelLogo}
              layout="fixed"
              loader={myLoader}
              alt="Powered by Vercel"
              unoptimized={true}
              width="150"
              height="25"
            />
          </a>
        </div> */}
        <ThemeSwitch />
      </div>
    </Container>
  );
}