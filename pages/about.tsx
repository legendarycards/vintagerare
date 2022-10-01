import type { NextPage, GetStaticProps } from 'next'

import Layout from '../components/Layout';
import Container from '../components/Container';

// props type
type Props = {
  siteConfig: any
}

// component render function
const About: NextPage<Props> = ({ siteConfig }: Props) => {
  return (
    <Layout {...siteConfig}>
      <Container>
        <h3 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          About Legendary Cards
        </h3>
        <div className="mx-auto prose text-center dark:prose-invert mt-14">
          <p className="text-lg">
            This project seeks to document all Pokemon cards published by Wizards of the Coast up until the year 2013, which have some rare or non-standard property.
            Here &apos;legendary&apos; means the cards exsistance is not widely known and may even be disputed by experts.
            Cards that have errors from the printing process, such as ink bubbles, overlays, or cutting and processing mistakes are not included.
            Cards that have errors from pre-printing, meaning typos and mistakes in layout are included if the error was corrected.
            In situations where the corrected version is more rare than the error-version then this will be specified.
          </p>
          <p className="text-lg">
            This is an open source and community-driven project.
            Please read the README documentation on GitHub for more information on how to contribute content.
            The email address <i>info at legendary dot cards</i> may be used to contact the project maintainers.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
  return { props: { } }
}