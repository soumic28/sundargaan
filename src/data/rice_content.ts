export interface Story {
  id: string;
  type: "Interview" | "Song";
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
}

export interface Person {
  id: string;
  name: string;
  role?: string;
  bio: string;
  image: string;
}

export const riceContent = {
  about: {
    title: "ABOUT US",
    description: [
      "The journey of RICE starts with the farmers of Kalitala, the last village on the banks of Kalindi tidal river at the border with Bangladesh. Nestled between the tidal rivers Kalindi and Raimangal, Kalitala is one of the closest human habitations to the Sunderbans on the Indian side and is vulnerable to climate change risks. In the recent past cyclones Fani, Bulbul, Amphan and Yaas have all devastated this village. In 2009 cyclone Aila caused saline water intrusion in the farmlands which adversely affected farming for almost four years. Many farmers failed to grow their crops because high yielding varieties (HYV) of rice have low tolerance for soil salinity.",
      "A few farmers re-introduced traditional varieties of rice, some of them known to be more tolerant to salinity. These are less labour intensive, require no chemical fertilizers and are cheaper to grow. The farmers were successful in growing 28 traditional varieties but could find neither the market nor fair prices for their produce. These rice varieties are tasty, have high nutritional values and are grown chemical free.",
      "Rice consumers are unaware of these nutritious and healthy rice varieties. RICE is a way for the farmers to connect with you through their songs and stories, using social media as a bridge. These chemical free varieties of rice grown by them are accessible to you at affordable prices. You can support the farmers by buying their produce and contributing to making Sunderbans and its inhabitants more resilient to climate change risks. We hope that your contribution and involvement will keep the heritage alive and help in fostering a more harmonious relationship between the settled areas and the mangrove ecology of Sunderbans.",
      "RICE will seed innovation efforts and facilitate community ideas to mitigate climate change crisis and create other livelihood options in the settled areas.",
    ],
    images: [
      "/assets/assets/image_11.jpg",
      "/assets/assets/image_12.jpg",
      "/assets/assets/image_13.jpg",
      "/assets/assets/image_14.jpg",
    ],
  },
  stories: [
    {
      id: "story-1",
      type: "Interview",
      title: "Jyoti Mohan Roy",
      description:
        "Jyoti shares his childhood memories about desi rice varieties like Gerimuri and Khejurchuri.",
      image: "/assets/assets/image_19.jpg",
    },
    {
      id: "story-2",
      type: "Interview",
      title: "Tarapada Gayen",
      description:
        "Do you know how many parts a plough has? Tarapada Gayen tells us about the various parts and their local names.",
      image: "/assets/assets/image_20.jpg",
    },
    {
      id: "story-3",
      type: "Interview",
      title: "Jyoti Mohan Roy",
      description:
        "Farmers grow different varieties of desi rice according to the terrain. Undulation of any land determines what variety of desi rice will grow well there.",
      image: "/assets/assets/image_21.jpg",
    },
    {
      id: "story-4",
      type: "Song",
      title: "Bishnupada Sarkar",
      description:
        "Modern industrial farming forces farmers to migrate to cities as labourers. A song pointing out how modern industrial farming makes people jobless in their own villages.",
      image: "/assets/assets/image_22.jpg",
    },
    {
      id: "story-5",
      type: "Interview",
      title: "Jolil Barkandaj",
      description:
        "Arguments for choosing desi paddy varieties over high yielding varieties. Would you risk your entire crop, just to get a slightly higher yield?",
      image: "/assets/assets/image_23.jpg",
    },
    {
      id: "story-6",
      type: "Song",
      title: "Probir Mondal",
      description:
        "Despair felt by a farmer in Sundarbans; torn between the love & attachment for one's birthplace & uncertainties.",
      image: "/assets/assets/image_24.jpg",
    },
    {
      id: "story-7",
      type: "Interview",
      title: "Tarak Mandal",
      description:
        "Insights of a landless share-cropper on work related migration.",
      image: "/assets/assets/image_25.jpg",
    },
    {
      id: "story-8",
      type: "Interview",
      title: "Probir Mondal",
      description:
        "'8 bighas of desi paddy I grow can sustain upto 20 people for a year'. Probir calculates that the 8 bighas of desi paddy that he has cultivated can sustain for a year.",
      image: "/assets/assets/image_26.jpg",
    },
    {
      id: "story-9",
      type: "Song",
      title: "Santosh Tarafdar",
      description:
        "'In the era of science, the tractor dominates. Farmers do not own seeds anymore. The 'market' determines everything!'",
      image: "/assets/assets/image_27.jpg",
    },
    {
      id: "story-10",
      type: "Interview",
      title: "Proshanto Baidya",
      description:
        "Childhood memories of desi paddy sown on flooded fields using a boat.",
      image: "/assets/assets/image_28.jpg",
    },
    {
      id: "story-11",
      type: "Interview",
      title: "Sita Biswas",
      description:
        "Do we imagine agriculture as an equal opportunity sector? Sita shares how she works shoulder to shoulder with her husband.",
      image: "/assets/assets/image_29.jpg",
    },
    {
      id: "story-12",
      type: "Song",
      title: "Bishnupada Sarkar",
      description:
        "The song questions farmers in Sundarbans. 'A lot has changed in their lives. Or has it?'",
      image: "/assets/assets/image_30.jpg",
    },
    {
      id: "story-13",
      type: "Interview",
      title: "Rabindra Aulia",
      description:
        "Why does a farmer continue to farm even when it is clear that the costs will not get recovered? Hear some hard truths about farming in Sunderbans.",
      image: "/assets/assets/image_31.jpg",
    },
    {
      id: "story-14",
      type: "Interview",
      title: "Dheeman Boidya",
      description:
        "Dheeman explains why it makes more economic sense for him to cultivate desi paddy in his land.",
      image: "/assets/assets/image_33.jpg",
    },
    {
      id: "story-15",
      type: "Interview",
      title: "Palas Mondal",
      description:
        "Palas shares how farmers in Sundarbans invoke many gods and goddesses, hoping for a good crop. He speaks about some rituals like jal bhiksha.",
      image: "/assets/assets/image_34.jpg",
    },
  ],
  people: [
    {
      id: "person-1",
      name: "Ananda Mistry",
      bio: "Ananda’s love for the violin began 5-6 years ago. Farming and music are his two sources of livelihood and being able to continue his musical journey is his dream.",
      image: "/assets/assets/image_39.jpg",
    },
    {
      id: "person-2",
      name: "Bishnupada Sarkar",
      bio: "Bishnupada writes & sings songs about life in Sundarbans. He was an All India Radio artist. He loves the bhatiyali genre of Bengal’s folk music.",
      image: "/assets/assets/image_40.jpg",
    },
    {
      id: "person-3",
      name: "Biswajit Bain",
      bio: "Biswajit plays the drum. Pursuing music is the core purpose of his life. He hopes to continue his musical journey despite his family’s economic challenges.",
      image: "/assets/assets/image_41.jpg",
    },
    {
      id: "person-4",
      name: "Chapal Pramanik",
      bio: "Coming from a landless family, Chapal earns his living by playing the dotara and crab fishing. He is also considered to have green fingers.",
      image: "/assets/assets/image_42.jpg",
    },
    {
      id: "person-5",
      name: "Nibha Mondal",
      bio: "Nibha is a singer who is also responsible for coordinating with women's Self Help Groups in the village to reclaim women's traditional roles in rice processing.",
      image: "/assets/assets/image_43.jpg",
    },
    {
      id: "person-6",
      name: "Palas Mondal",
      bio: "A vocal artist who studied music at Rabindra Bharati University in Kolkata, Palas is a farmer and a grassroots activist.",
      image: "/assets/assets/image_44.jpg",
    },
    {
      id: "person-7",
      name: "Pinaki Roy",
      bio: "A social worker by training, Pinaki believes that humanity, to survive on the earth, must align with nature and transform systems that don’t.",
      image: "/assets/assets/image_45.jpg",
    },
    {
      id: "person-8",
      name: "Prabir Mondal",
      bio: "Farming, cultural activities like music & acting and being an active & constructive member of the village community are important aspects life for Probir.",
      image: "/assets/assets/image_46.jpg",
    },
    {
      id: "person-9",
      name: "Rabiul Islam",
      bio: "Growing up in rural Bengal, Robi pursues a formal career in graphic designing. His dream is to make design education accessible to all for free.",
      image: "/assets/assets/image_47.jpg",
    },
    {
      id: "person-10",
      name: "Shruti Kulkarni",
      bio: "Shruti is an artist, poet and filmmaker, who lives in Bengaluru. One of her greatest joys is taking long walks through quiet wildernesses.",
      image: "/assets/assets/image_48.jpg",
    },
    {
      id: "person-11",
      name: "Tarapada Gayen",
      bio: "A farmer, vermicomposter, cycle repair shop owner and traditional jatra form of theatre actor, Tarapada is a pioneer in trying to reintroduce traditional varieties of rice.",
      image: "/assets/assets/image_49.jpg",
    },
  ],
};
