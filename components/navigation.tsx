"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

import useResourcesModal from "@/hooks/use-resources";
import useMenuModal from "@/hooks/use-menu-mobile";

// DATA
export const summerSale = {
  dropdown: false,
  label: "Summer Sale",
  href: "/collections/sale",
};

export const stories = {
  dropdown: true,
  label: "Stories",
  href: "/locations",
  children: [
    {
      title: "New York",
      subtitle: [
        {
          name: "Upper West Side",
          link: "/locations/upper-west-side",
        },
        {
          name: "Williamsburg",
          link: "/locations/williamsburg",
        },
        {
          name: "Cobble Hill",
          link: "/locations/cobble-hill",
        },
        {
          name: "Park Slope",
          link: "/locations/park-slope",
        },
      ],
    },
    {
      title: "California",
      subtitle: [
        {
          name: "San Francisco",
          link: "/locations/san-francisco",
        },
      ],
    },
    {
      title: "Illinois",
      subtitle: [
        {
          name: "Chicago",
          link: "/locations/chicago",
        },
      ],
    },
    {
      title: "Maryland",
      subtitle: [
        {
          name: "Bethesda",
          link: "/locations/bethesda",
        },
      ],
    },
  ],
  desc: [
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/b0e6ee2d7986b0c1cb0a1bc7e8eeb1d4eed9bc30-645x600.svg?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "In Store Exclusives",
    },
  ],
};

export const plants = {
  dropdown: true,
  label: "Plants",
  href: "/categories/plants",
  children: [
    {
      title: "Plants",
      subtitle: [
        {
          name: "Shop All",
          link: "/collections/plants",
        },
        {
          name: "New Arrivals",
          link: "/collections/new-array",
        },
      ],
    },
    {
      title: "Popular",
      subtitle: [
        {
          name: "Summer Sale",
          link: "/collections/sales",
        },
        {
          name: "Easy Care",
          link: "/collections/beginners",
        },
        {
          name: "Low Light Toterant",
          link: "/collections/low-light",
        },
        {
          name: "Pet Family",
          link: "/collections/pet-family",
        },
      ],
    },
    {
      title: "Sill Selects",
      subtitle: [
        {
          name: "Discovery",
          link: "/collections/discovery",
        },
        {
          name: "Expolorer",
          link: "/collections/expolorer",
        },
        {
          name: "Colector's Item",
          link: "/collections/colector",
        },
        {
          name: "Special Occasion",
          link: "/collections/special",
        },
      ],
    },
    {
      title: "Shop by Size",
      subtitle: [
        {
          name: "Small",
          link: "/collections/small-plants",
        },
        {
          name: "Medium",
          link: "/collections/medium-plants",
        },
        {
          name: "Large",
          link: "/collections/large-plants",
        },
        {
          name: "Bundles",
          link: "/collections/budles-plants",
        },
      ],
    },
  ],
  desc: [
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/b6d2b7b7878a93e649c72d16b9214407ffc047dc-1200x1200.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Large Plants",
    },
  ],
};

export const planter = {
  dropdown: true,
  label: "Platers",
  href: "/categories/planters",
  children: [
    {
      title: "Platers",
      subtitle: [
        {
          name: "Shop All",
          link: "/collections/planters",
        },
        {
          name: "Small & Medium",
          link: "/collections/small-and-medium-plants",
        },
        {
          name: "Large Planters",
          link: "/collections/large-plants",
        },
        {
          name: "Plant Stands",
          link: "/collections/stands-plants",
        },
      ],
    },
  ],
  desc: [
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/c500287996609be78b329872714132dab09296ab-1200x1553.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Small & Medium",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/0cf1260d2f1c1656353b43682a4c473a55d6c3ed-3600x4659.jpg?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Large Planters",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/2d724cbf491a8d8ea6f403afbebbf40db79f5fa3-1200x1553.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Large Stands",
    },
  ],
};

export const palntCare = {
  dropdown: true,
  label: "Plant Care",
  href: "/categories/plant-care",
  children: [
    {
      title: "Plant Care",
      subtitle: [
        {
          name: "Shop All",
          link: "/collections/plant-care",
        },
        {
          name: "Potting Supplies",
          link: "/collections/potting-supplies",
        },
        {
          name: "Grow Lights",
          link: "/collections/grow-light",
        },
        {
          name: "Virtual Plant Appointment",
          link: "/collections/vitrual-plant",
        },
      ],
    },
  ],
  desc: [
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/cd32202e24807165b4bfef1000a6eda1e619ec2c-1200x1553.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Potting Mix",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/82c28a4a313d855df5aabf70e7fd139a36e86bcd-1200x1552.jpg?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Moisture Meter",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/f8a75e5c91bc94119f16e40c169b5be2ab1acb93-1200x1553.jpg?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Coco Coir Pole",
    },
  ],
};

export const faux = {
  dropdown: true,
  label: "Faux",
  href: "/categories/Faux",
  children: [
    {
      title: "Faux",
      subtitle: [
        {
          name: "Shop All",
          link: "/collections/faux",
        },
        {
          name: "Large Faux Trees",
          link: "/collections/large-faux-tree",
        },
        {
          name: "Faux Stem Sets",
          link: "/collections/faux-stem-set",
        },
      ],
    },
  ],
  desc: [
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/f1a3c4074cdee6a506e0dbd25638657ec27aae7a-1200x1553.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Faux Tree",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/43224da825cba813ac80971534ca0598169fad29-1200x1553.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Stem Set",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/2bb8c3a12a90cff29c228c61b5c5812592310198-884x535.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Why Faux?",
    },
  ],
};

export const home = {
  dropdown: true,
  label: "Home & Decor",
  href: "/categories/home-decor",
  children: [
    {
      title: "Home",
      subtitle: [
        {
          name: "Shop All",
          link: "/collections/home-decor",
        },
        {
          name: "Browse My Room",
          link: "/browse-my-room",
        },
      ],
    },
    {
      title: "Decor",
      subtitle: [
        {
          name: "Faux & Preserved",
          link: "/collections/faux-preserved",
        },
        {
          name: "Plant Stands & Hangers",
          link: "/collections/plant-stands-hanger",
        },
        {
          name: "Shelves",
          link: "/collections/shelves",
        },
      ],
    },
  ],
  desc: [
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/c8257956aab51479bfc601717451f35d4dd74ae7-1200x1552.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Eucalyptus",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/348d0a54b0dace3757c54d7640edf3f0ccd2f999-300x300.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Langre Plants",
    },
  ],
};

export const flower = {
  dropdown: true,
  label: "Flower & Bouquet",
  href: "/categories/flower-bouquet",
  children: [
    {
      title: "Flowers",
      subtitle: [
        {
          name: "Shop All",
          link: "/collections/flower-bouquet",
        },
        {
          name: "Orchids",
          link: "/collections/orchids",
        },
      ],
    },
    {
      title: "Popular",
      subtitle: [
        {
          name: "Flowering Plants",
          link: "/collections/blooming-plants",
        },
        {
          name: "Dried Bouquets",
          link: "/collections/dried-bouquets",
        },
        {
          name: "Anthuriums",
          link: "/collections/anthuriums",
        },
        {
          name: "Bromeliads",
          link: "/collections/bromeliads",
        },
      ],
    },
  ],
  desc: [
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/6fe260294f479e43d737fc737d19472d36fc3eb1-1536x2006.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Orchids",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/824dba74c9ed71e358dbc70e8cb94d4202e95d5f-1200x1553.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Bouquets",
    },
  ],
};

export const gitfs = {
  label: "Gift Ideas",
  href: "/categories/gift",
  children: [
    {
      title: "Flowers",
      subtitle: [
        {
          name: "Shop All",
          link: "/collections/gift",
        },
        {
          name: "Gift Card",
          link: "/collections/gift-card",
        },
      ],
    },
    {
      title: "By Occasion",
      subtitle: [
        {
          name: "Happy Birthday",
          link: "/collections/birthday-gift",
        },
        {
          name: "Housewarming",
          link: "/collections/housewarming-gifts",
        },
        {
          name: "Congratulations",
          link: "/collections/congratulations-gifts",
        },
        {
          name: "Sympathy",
          link: "/categories/sympathy-condolence-gifts",
        },
      ],
    },

    {
      title: "Best Sallers",
      subtitle: [
        {
          name: "Subscriptions",
          link: "/subscriptions",
        },
        {
          name: "Message Pops",
          link: "/products/message-pops",
        },
        {
          name: "The Sill Merch",
          link: "/collections/the-sill-merch",
        },
      ],
    },
  ],
  desc: [
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/5d4c875b1785b6c4aa5a3787fcef1e36aac8262d-1536x1140.webp?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Gift Guide",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/7ac71c20728a42651c1802c50d7186c0e0f83939-600x600.jpg?w=300&h=300&w=1536&fm=webp&fit=crop",
      arrow: "Gift Cards",
    },
  ],
};

export const supcription = {
  dropdown: false,
  label: "Subscriptions",
  href: "/subscriptions",
};

export const workshop = {
  dropdown: false,
  label: "Workshops",
  href: "/workshops",
};

const Navigation = () => {

  const resourcesModal = useResourcesModal();
  const menuModal = useMenuModal();

  return (
    <div className="py-2  bg-[#f9f8f7] lg:bg-inherit">
      {/* Navigation PC */}
      <div className="hidden lg:block">Hello</div>

      {/* Navigation Mobile */}
      <div className="lg:hidden flex w-full">
        <>
          <div className="flex basis-1/2 items-center justify-center gap-x-2 font-semibold"
          onClick={menuModal.onOpen}
          >
            <Menu size={24} className="space-x-3 hidden md:block" />
            <Menu size={18} className="space-x-3 block md:hidden" />
            <span className="space-x-3 text-base">Shop</span>
          </div>
        </>

        <>
          <div className="flex basis-1/2 items-center justify-center space-x-2 border-l-[1px] border-neutral-500 font-semibold"
            onClick={resourcesModal.onOpen}
          >
            <Image
              className="space-x-2 hidden md:block"
              width={24}
              height={24}
              alt="Menu"
              src="/images/category/tree.svg"
            />
            <Image
              className="space-x-2 block md:hidden"
              width={18}
              height={18}
              alt="Menu"
              src="/images/category/tree.svg"
            />
            <span>Resources</span>
          </div>
        </>
      </div>
    </div>
  );
};

export default Navigation;
