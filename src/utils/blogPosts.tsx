// src/utils/blogPosts.ts
import { JSX } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: JSX.Element;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "Rent-a-honda-accord-in-las-vegas",
    title: "Rent a Honda Accord in Las Vegas",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    date: "2025-08-01",
    image: "assets/turo-list/img_9943.jpg",
    content: (
      <>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </>
    ),
  },
  {
    slug: "yamaha-waverunners-getmyboat",
    title: "Yamaha Waverunners-Getmyboat",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .",
    date: "2025-08-05",
    image: "assets/custom-images/jetskisgetmyboat.jpeg",
    content: (
      <>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </>
    ),
  },
  {
    slug: "bmw-r-1250-gs-eagle-rider-rentals",
    title: "BMW R 1250 GS-Eagle Rider Rentals",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
    date: "2025-08-05",
    image: "assets/custom-images/bmweaglerider.jpeg",
    content: (
      <>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </>
    ),
  },
];
