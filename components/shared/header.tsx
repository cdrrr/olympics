import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavItem from "./nav-item";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/cgkLogo.png"
            width={128}
            height={38}
            alt="Olympics logo"
          />
        </Link>
        <div>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItem />
          </nav>
        </div>
        <div className="flex w-32 justify-end gap-3">
          <MobileNav />
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
