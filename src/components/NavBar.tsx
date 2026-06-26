import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
      {/* Main Nav Pill - Upgraded Frost */}
      <nav className="pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-2 lg:px-4 lg:py-0 lg:h-16 bg-neutral-950/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 rounded-full shadow-2xl">
        {/* 1. Left: Logo */}
        <Link
          href="/"
          aria-label="Homepage"
          className="inline-flex cursor-pointer items-center justify-center p-2 outline-none transition-transform hover:scale-105 active:scale-95"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 text-white"
          >
            <path
              d="M2.30047 8.77631L12.0474 23H16.3799L6.63183 8.77631H2.30047ZM6.6285 16.6762L2.29492 23H6.63072L8.79584 19.8387L6.6285 16.6762ZM17.3709 1L9.88007 11.9308L12.0474 15.0944L21.7067 1H17.3709ZM18.1555 7.76374V23H21.7067V2.5818L18.1555 7.76374Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>

        {/* 2. Center: Navigation Links */}
        <div className="relative hidden flex-grow lg:flex justify-center ml-2">
          <ul className="flex items-center gap-1">
            {/* Mega Menu Dropdown (Products) */}
            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-white/60 transition-all hover:bg-white/10 hover:text-white">
                Products
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3 transition-transform group-hover:rotate-180"
                >
                  <polyline points="4,6 8,10 12,6"></polyline>
                </svg>
              </button>

              {/* Mega Menu Panel - Upgraded Frost */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none translate-y-2 transition-all duration-150 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 z-50">
                <div className="w-[600px] p-6 bg-neutral-950/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 rounded-2xl shadow-2xl flex gap-6">
                  <div className="w-1/3 flex flex-col gap-4 border-r border-white/10 pr-4">
                    <div className="group/item cursor-pointer px-2 py-1 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="text-white text-sm font-medium">Chat</div>
                      <div className="text-neutral-400 text-xs mt-1">
                        Frontier reasoning with real-time knowledge.
                      </div>
                    </div>
                    <div className="group/item cursor-pointer px-2 py-1 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="text-white text-sm font-medium">
                        Build
                      </div>
                      <div className="text-neutral-400 text-xs mt-1">
                        Plan, edit, and ship code from terminal.
                      </div>
                    </div>
                    <div className="group/item cursor-pointer px-2 py-1 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="text-white text-sm font-medium">
                        Imagine
                      </div>
                      <div className="text-neutral-400 text-xs mt-1">
                        Generate and edit images/video from text.
                      </div>
                    </div>
                  </div>
                  <div className="w-2/3 flex flex-col gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="self-end bg-white/10 px-3 py-1.5 rounded-full text-xs text-white backdrop-blur-md">
                      Explain quantum entanglement simply
                    </div>
                    <div className="self-start bg-black/40 border border-white/10 px-3 py-1.5 rounded-2xl text-xs text-neutral-300 backdrop-blur-md">
                      Two particles become linked — measuring one instantly
                      determines the other.
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Simple List Dropdown (Solutions) */}
            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-white/60 transition-all hover:bg-white/10 hover:text-white">
                Solutions
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3 transition-transform group-hover:rotate-180"
                >
                  <polyline points="4,6 8,10 12,6"></polyline>
                </svg>
              </button>

              {/* Standard Dropdown Panel - Upgraded Frost */}
              <div className="absolute top-full pt-4 opacity-0 pointer-events-none translate-y-2 transition-all duration-150 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 z-50">
                <div className="w-48 py-2 bg-neutral-950/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 rounded-xl shadow-xl flex flex-col">
                  {[
                    "Business",
                    "Government",
                    "Customer Support",
                    "Legal",
                    "Security",
                  ].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                  <div className="h-px bg-white/10 my-1 mx-3" />
                  <Link
                    href="#"
                    className="px-4 py-2 text-xs text-neutral-400 hover:text-white transition-colors flex justify-between items-center group/link"
                  >
                    Explore all use cases
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-3 opacity-0 -translate-x-2 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0"
                    >
                      <path
                        d="M18 16.5H16V9.41406L6.99998 18.4141L5.58591 17L14.5859 8H7.49998V6H18V16.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="#developer"
                className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-white/60 transition-all hover:bg-white/10 hover:text-white"
              >
                Developer
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-white/60 transition-all hover:bg-white/10 hover:text-white"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Right: Action Buttons */}
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden lg:flex px-4 py-2 text-sm font-medium text-white transition-colors border rounded-full border-white/15 hover:bg-white/10"
          >
            Contact Sales
          </Link>

          <div className="relative hidden lg:block group">
            <div className="flex items-stretch bg-white rounded-full p-[2px]">
              <Link
                href="#try"
                className="flex items-center px-4 py-1.5 text-sm font-medium text-black transition-colors rounded-full hover:bg-neutral-200"
              >
                Try for free
              </Link>
              <div className="w-px bg-black/10 my-1.5 mx-1" />
              <button
                type="button"
                className="flex items-center px-2 text-black transition-colors rounded-full hover:bg-neutral-200"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <polyline points="4,6 8,10 12,6"></polyline>
                </svg>
              </button>
            </div>

            {/* Split Button Dropdown Panel - Upgraded Frost */}
            <div className="absolute right-0 top-full pt-4 opacity-0 pointer-events-none translate-y-[-4px] transition-all duration-150 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 z-50">
              <div className="bg-neutral-950/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 overflow-hidden rounded-xl shadow-2xl w-[200px] p-2">
                <div className="mb-1 px-2 pt-1 text-[10px] font-medium uppercase tracking-wider text-white/40">
                  Products
                </div>
                <Link
                  href="#"
                  className="group/item flex h-[36px] items-center justify-between rounded-md px-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span>Grok</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-3 text-neutral-400 opacity-0 transition-opacity group-hover/item:opacity-100"
                  >
                    <path
                      d="M18 16.5H16V9.41406L6.99998 18.4141L5.58591 17L14.5859 8H7.49998V6H18V16.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="flex h-[36px] items-center rounded-md px-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Business
                </Link>
                <Link
                  href="#"
                  className="flex h-[36px] items-center rounded-md px-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Government
                </Link>

                <div className="border-t border-white/10 mx-2 my-1.5" />

                <div className="mb-1 px-2 pt-1 text-[10px] font-medium uppercase tracking-wider text-white/40">
                  Download
                </div>
                <Link
                  href="#"
                  className="group/item flex h-[36px] items-center justify-between rounded-md px-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span>iOS</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-3 text-neutral-400 opacity-0 transition-opacity group-hover/item:opacity-100"
                  >
                    <path
                      d="M18 16.5H16V9.41406L6.99998 18.4141L5.58591 17L14.5859 8H7.49998V6H18V16.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="group/item flex h-[36px] items-center justify-between rounded-md px-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span>Android</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-3 text-neutral-400 opacity-0 transition-opacity group-hover/item:opacity-100"
                  >
                    <path
                      d="M18 16.5H16V9.41406L6.99998 18.4141L5.58591 17L14.5859 8H7.49998V6H18V16.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>

                <div className="border-t border-white/10 mx-2 my-1.5" />

                <div className="mb-1 px-2 pt-1 text-[10px] font-medium uppercase tracking-wider text-white/40">
                  Developers
                </div>
                <Link
                  href="#"
                  className="group/item flex h-[36px] items-center justify-between rounded-md px-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span>API Console</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-3 text-neutral-400 opacity-0 transition-opacity group-hover/item:opacity-100"
                  >
                    <path
                      d="M18 16.5H16V9.41406L6.99998 18.4141L5.58591 17L14.5859 8H7.49998V6H18V16.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Buttons */}
          <Link
            href="#try"
            className="lg:hidden px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:brightness-90 transition-all"
          >
            Try for free
          </Link>
          <button className="lg:hidden flex items-center justify-center p-2 text-white border border-white/15 rounded-full hover:bg-white/10 transition-colors">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-2"
            >
              <path
                d="M20 7H4V5H20V7ZM20 13H4V11H20V13ZM20 19H4V17H20V19Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
