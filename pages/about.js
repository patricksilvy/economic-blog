import Container from "@components/container";
import Layout from "@components/layout";
import { authorsquery, configQuery } from "@lib/groq";
import { getClient } from "@lib/sanity";
import Link from "next/link";

export default function About({ authors, siteconfig }) {
  return (
    <Layout {...siteconfig}>
      <Container>
        <h1 className="mt-2 mb-3 text-3xl tracking-tight text-center lg:leading-snug text-brand-primary lg:text-6xl dark:text-white">
          Sobre
        </h1>
        <div className="text-center">
          <p className="text-lg">Aprenda economia do jeito certo.</p>
        </div>

        <div className="flex justify-center w-full my-14">
          <img src="img/aboutImg.jpg"/>
        </div>

        <div className="mx-auto prose text-center dark:prose-invert mt-14">
          <p>
            Somos um blog que fala sobre economia.
          </p>
          <p>
            <Link href="/contact">Entre em Contato</Link>
          </p>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  //console.log(params);
  const authors = await getClient(preview).fetch(authorsquery);
  const config = await getClient(preview).fetch(configQuery);
  return {
    props: {
      authors: authors,
      siteconfig: { ...config },
      preview
    },
    revalidate: 100
  };
}
