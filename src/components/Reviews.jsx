import { Container } from './AboutUs.styled';
import { Review } from './Review';
import { ReviewTitle } from './Reviews.styled';

export const Reviews = () => {
  const reviewsData = [
    {
      review: `Baaardzo super ścianka ,
dziękuję za współpracę 🫶`,
      author: 'Anetta Ostalczyk ',
    },
    {
      review: `Jeszcze raz wielkie dzięki! Ciężko nam było foty robić jak ustawili te stoły 🥰 ale sam klimat i dekoracja robiła meegaaa wrażenie!`,
      author: 'Aleksandra Murawska',
    },
    {
      review: `Ścianka była piękna , bardzo delikatna , Jeszcze raz bardzo dziękuję )`,
      author: 'Katia Maksymiw',
    },
  ];
  return (
    <section>
      <Container>
        <ReviewTitle>Recenzje</ReviewTitle>
        <ul>
          {reviewsData.map((review, index) => (
            <Review
              reviewText={review.review}
              author={review.author}
              key={index}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};
