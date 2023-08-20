import Heading from '@/components/Heading';
import { getReview } from '@/lib/reviews';

export const metadata = {
  title: 'Reviews',
};

export async function generateStaticRarams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.data}</p>
      <img className="mb-2 rounded" src={review.image} alt="" width={640} height={360} />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
}
