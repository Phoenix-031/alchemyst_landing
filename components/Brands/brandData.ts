import { Brand } from "@/types/brand";

import mandiri from '@/src/assets/partners/mandiri.svg'
import nike from '@/src/assets/partners/nike.svg'
import amazon from '@/src/assets/partners/amazon.svg'
import amd from '@/src/assets/partners/amd.svg'
import dropcam from '@/src/assets/partners/dropcam.svg'
import logitech from '@/src/assets/partners/logitech.svg'


const brandData: Brand[] = [
  {
    id: 0.25,
    name: "Client",
    href: "#",
    image: mandiri,
    imageLight: "/images/brand/brand-dark-01.svg",
  },
  {
    id: 0.3,
    name: "Client",
    href: "#",
    image: nike,
    imageLight: "/images/brand/brand-dark-02.svg",
  },
  {
    id: 0.4,
    name: "Client",
    href: "#",
    image: amazon,
    imageLight: "/images/brand/brand-dark-03.svg",
  },
  {
    id: 0.5,
    name: "Client",
    href: "#",
    image: amd,
    imageLight: "/images/brand/brand-dark-04.svg",
  },
  {
    id: 0.6,
    name: "Client",
    href: "#",
    image: dropcam,
    imageLight: "/images/brand/brand-dark-05.svg",
  },
  {
    id: 0.7,
    name: "Client",
    href: "#",
    image: logitech,
    imageLight: "/images/brand/brand-dark-06.svg",
  },
];

export default brandData;
