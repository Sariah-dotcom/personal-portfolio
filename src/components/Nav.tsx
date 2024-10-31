import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Nav() {
  return (
    <div className="fixed inset-0 flex items-end mb-5 justify-center z-10">
        <Dock direction="middle" className="border-2 border-coral rounded-full">
          <DockIcon>
            <FaGithub className="text-coral size-6" />
          </DockIcon>
          <DockIcon>
            <FaLinkedin className="text-coral size-6" />
          </DockIcon>
          <DockIcon>
            <MdEmail className="text-coral size-6" />
          </DockIcon>
          {/* <DockIcon>
            <Icons.whatsapp className="size-6" />
          </DockIcon> */}
        </Dock>
    </div>
  );
}

