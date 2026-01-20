import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo-container">
          <div className="logo-img">
            <Image
              src="/file.png"
              width={32}
              height={32}
              alt="Zuugnu logo"
              priority
            />
          </div>
          <span className="logo-text">Saubh.Tech</span>
        </div>
        <ul className="nav-menu">
            <li><Link href="#operating-system">Operating System</Link></li>
          <li>
            <Link href="#phygital-gig-work">Gig-Work</Link>
          </li>
          <li>
            <Link href="#branding">Branding</Link>
          </li>
          <li>
            <Link href="#academy">Skilling</Link>
          </li>
          <li>
            <Link href="#support">Support</Link>
          </li>
          <li>
            <Link href="/login" className="btn-login">
              Get Started
            </Link>
          </li>
        </ul>
        <button className="mobile-toggle">☰</button>
      </nav>
    </header>
  );
}
