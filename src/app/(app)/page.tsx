import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button, Heading } from "@radix-ui/themes";
import PodcastList from "@/components/PodcastList";

export default async function Dashboard() {

  return (
    <section>
      <div className="flex items-center justify-between">
        <Heading color="orange" size="8" weight="bold">Discover</Heading>
        <Button size="2" variant="surface" asChild radius="small">
          <Link href="/podcast/create">
            <PlusIcon width={16} height={16} /> Add podcast
          </Link>
        </Button>
      </div>
      <div>
        <PodcastList />
      </div>
    </section>
  )
}
