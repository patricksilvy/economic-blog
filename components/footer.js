import Container from "@components/container";
import ThemeSwitch from "@components/themeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} Economic Lisboa. All
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
      </div>
      <div className="flex items-center justify-end mt-2">
        <ThemeSwitch />
      </div>
    </Container>
  );
}