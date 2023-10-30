"use client"

import { Card, Text } from "@radix-ui/themes"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link";

export interface Podcast {
  id: string;
  title: string;
  description: string;
  image: string;
  publishedAt?: Date
  updatedAt?: Date
  createdAt?: Date
  category: string;
  language: string;
  link?: string;
  userId: string;
}

export default function PodcastList() {

  const { data, isLoading } = useQuery({
    queryKey: ['podcasts'],
    queryFn: async () => {
      const res = await fetch('/api/podcasts/getAll')
      return res.json()
    }
  })

  return (
    <div className="mt-8">
      {data?.map((podcast: Podcast) => (
        <Link key={podcast.id} href={`/podcast/${podcast.id}`}>
          <Card variant="surface" className="inline-flex">
            <Image
              className="rounded-xs"
              src={podcast.image}
              alt="A house in a forest"
              width={200}
              height={100}
            />
            <div className="flex flex-col mt-4">
              <Text className="text-xl font-bold">{podcast.title}</Text>
              <Text className="text-xs">Fredrik Johansson</Text>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}