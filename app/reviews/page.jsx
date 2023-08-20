import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li key={review.slug} className="border w-80 bg-white shadow hover:shadow-xl">
            <Link className="rounded" href={`/reviews/${review.slug}`}>
              <img className="mb-2 rounded-t" src={review.image} alt="" width={320} height={180} />
              <h2 className="font-orbitron font-semibold py-1 text-center">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
