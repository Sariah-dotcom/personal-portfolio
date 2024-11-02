import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Nav() {
  return (
    <div className="fixed inset-0 flex items-end mb-5 justify-center z-999">
        <Dock direction="middle" className="border-2 border-coral rounded-full">
          <DockIcon>
            <a href="#">
              <FaGithub className="text-coral size-6" />
            </a>
          </DockIcon>
          <DockIcon>
            <a href="#">
              <FaLinkedin className="text-coral size-6" />
            </a>
          </DockIcon>
          <DockIcon>
            <a href="mailto:sariahkjackson@gmail.com">
              <MdEmail className="text-coral size-6" />
            </a>
          </DockIcon>
        </Dock>
    </div>
  );
}

