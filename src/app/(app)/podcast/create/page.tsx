import { Form } from "@/components/Form";
import { Heading } from "@radix-ui/themes";

export default async function CreatePodcastPage() {

  return (
    <section>
      <Heading color="orange" size="8" weight="bold">Create Podcast</Heading>
      <Form />
    </section>
  )
}