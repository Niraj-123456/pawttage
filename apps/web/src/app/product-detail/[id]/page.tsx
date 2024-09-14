import Image from "next/image";
import { Product } from "../../../../types/product";
import { StarIcon } from "@heroicons/react/20/solid";

const images = [
  "https://image.hamropatro.com/HGMNdNdKI3J4HSCIb_TIaaV18SFnyfx_H6O9BSXgxa8/rs:fit:0:0/g:no/aHR0cHM6Ly9pMC53cC5jb20vcmFuZG9tdGhvdWdodHNvZmFwYXJ0dGltZWxvc3Rzb3VsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNC9vbGQtcGVyc29ucy1saXZpbmctcm9vbS12NS5qcGc_cmVzaXplPTg0MCUyQzU1OSZzc2w9MQ.webp",
  "https://image.hamropatro.com/HGMNdNdKI3J4HSCIb_TIaaV18SFnyfx_H6O9BSXgxa8/rs:fit:0:0/g:no/aHR0cHM6Ly9pMC53cC5jb20vcmFuZG9tdGhvdWdodHNvZmFwYXJ0dGltZWxvc3Rzb3VsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNC9vbGQtcGVyc29ucy1saXZpbmctcm9vbS12NS5qcGc_cmVzaXplPTg0MCUyQzU1OSZzc2w9MQ.webp",
  "https://image.hamropatro.com/HGMNdNdKI3J4HSCIb_TIaaV18SFnyfx_H6O9BSXgxa8/rs:fit:0:0/g:no/aHR0cHM6Ly9pMC53cC5jb20vcmFuZG9tdGhvdWdodHNvZmFwYXJ0dGltZWxvc3Rzb3VsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNC9vbGQtcGVyc29ucy1saXZpbmctcm9vbS12NS5qcGc_cmVzaXplPTg0MCUyQzU1OSZzc2w9MQ.webp",
];

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      title: "Adds the perfect variety to my wardrobe",
      rating: 4,
      content: `
        <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
      `,
      author: "Blake Reid",
      avatarSrc:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    },
    {
      id: 3,
      title: "All good things come in 6-Packs",
      rating: 5,
      content: `
        <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
      `,
      author: "Ben Russel",
      avatarSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};

async function getProductById(id: number) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  return res.json();
}

const ProductDetail = async ({ params }) => {
  const product: Product = await getProductById(params.id);
  return (
    <div className="px-4 py-12 grid place-items-center">
      <div className="max-w-6xl w-full grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="w-full h-60 relative rounded-t-md overflow-hidden">
            <Image
              src={product.imageSrc}
              alt="dog-house"
              fill
              sizes="any"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-3 w-full mt-2">
            <div className="h-24 md:h-52 relative rounded-bl-md overflow-hidden">
              <Image
                src={images[0]}
                alt="dog-house"
                fill
                sizes="any"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>{" "}
            <div className="h-24 md:h-52 relative rounded-br-md overflow-hidden">
              <Image
                src={images[0]}
                alt="dog-house"
                fill
                sizes="any"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
        <div className="border-gray-200 border-2 border-solid p-4 rounded-md w-full max-w-2xl flex flex-col gap-4 shadow-lg">
          <h4 className="text-2xl">{product.title}</h4>
          <p className="whitespace-nowrap">
            <span className="text-xl font-medium">{product.price}</span>{" "}
            <span className="text-gray-600">per night</span>
          </p>
          <div className="flex gap-2 py-2">
            <input type="date" className="text-xs" />
            <input type="date" />
          </div>
          <div className="">
            <input value={1} />
          </div>
          <button className="mt-2">Book Now</button>

          <div className="mt-4">
            <div className="flex justify-between py-1">
              <p>Total Price</p>
              <p>$100</p>
            </div>
            <div className="flex justify-between py-1">
              <p>Service fee</p>
              <p>$10</p>
            </div>

            <div className="flex justify-between py-2 font-semibold">
              <p>Grand Total</p>
              <p>$110</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 border-gray-200 mt-5">
          <h4 className="text-2xl pt-2 font-medium">About this place</h4>
          <p className="text-gray-500 mt-3 leading-6">{product.description}</p>
        </div>

        <div className="col-span-4 mt-6 divide-x-2">
          <h4 className="text-2xl pt-8 font-medium">Meet your host</h4>
          <div className="bg-gray-100 rounded-md p-8 mt-8">
            <div className="w-96 rounded-3xl shadow-md">
              <div className="p-8 flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                  <Image
                    src={"/images/host.jpeg"}
                    alt="host"
                    fill
                    sizes="any"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-semibold">Goergia Maxwell</p>
                  <p className="text-sm text-center text-gray-500 py-2">
                    (Host)
                  </p>
                </div>
                <div className="mt-4 flex gap-8">
                  <div className="text-xs text-center">
                    <p className="text-xs"> Reviews</p>
                    <p className="mt-2 font-medium">150</p>
                  </div>

                  <div className="text-xs text-center divide-x-2">
                    <p className="text-xs"> Ratings</p>
                    <p className="mt-2 font-medium">4.5</p>
                  </div>

                  <div className="text-center divide-x-2">
                    <p className="text-xs">Hosting Years</p>
                    <p className="mt-2 font-medium">8 Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 mt-6 space-x-1">
          <h4 className="text-2xl font-medium">Reviews</h4>
          <div className="flow-root ">
            <div className="divide-solid divide-x-0 divide-y divide-gray-200">
              {reviews.featured.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <img
                      src={review.avatarSrc}
                      alt={`${review.author}.`}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">
                        {review.author}
                      </h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={`${
                              review.rating > rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            },
                              'h-5 w-5 flex-shrink-0`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
