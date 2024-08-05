import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, Paw } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", image: "https://images.unsplash.com/photo-1579213838058-7a3094967f0f?w=500&h=500&fit=crop" },
  { name: "German Shepherd", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500&h=500&fit=crop" },
  { name: "Golden Retriever", image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=500&fit=crop" },
  { name: "French Bulldog", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=500&fit=crop" },
  { name: "Bulldog", image: "https://images.unsplash.com/photo-1523567830207-96731740fa71?w=500&h=500&fit=crop" },
  { name: "Poodle", image: "https://images.unsplash.com/photo-1616149562385-1d84e79478bb?w=500&h=500&fit=crop" },
  { name: "Beagle", image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=500&fit=crop" },
  { name: "Rottweiler", image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=500&h=500&fit=crop" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 text-blue-800">Paw-some Pals</h1>
          <p className="text-xl text-gray-600">Discover the wonderful world of dogs!</p>
        </div>

        <div className="mb-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1200&h=400&fit=crop" 
            alt="Happy dogs" 
            className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center px-4">Man's Best Friend Since 15,000 BC</h2>
          </div>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl">What Makes Dogs Special?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">Dogs are more than just pets; they're loyal companions, protectors, and sources of unconditional love. Originally domesticated from wolves, dogs have evolved alongside humans for thousands of years, becoming an integral part of our lives and societies.</p>
            <ul className="grid grid-cols-2 gap-4 text-lg">
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Unwavering loyalty</li>
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Emotional intelligence</li>
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Diverse breeds and abilities</li>
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Therapeutic companionship</li>
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Excellent sense of smell</li>
              <li className="flex items-center"><Paw className="mr-2 text-blue-500" /> Adaptability to human lifestyles</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Dog Breeds</h2>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {dogBreeds.map((breed, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-center">
                          <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                          <h3 className="font-semibold">{breed.name}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => setLikes(likes + 1)}
            className="group"
          >
            <Heart className="mr-2 h-6 w-6 text-red-500 group-hover:animate-ping" />
            Show some love! ({likes})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
