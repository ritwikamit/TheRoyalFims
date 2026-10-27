/**
 * The Royal Films - Authentic Photographic & Cinematic Asset Registry
 * All assets sourced directly from the official atelier collection in /TRFImages
 */

export interface TrfImageItem {
  id: string;
  src: string;
  orientation: 'landscape' | 'portrait';
  title: string;
  category: 'wedding' | 'prewedding' | 'haldi' | 'reception' | 'editorial' | 'dubai';
  subtitle: string;
  location: string;
  aspectRatio: string;
}

export const TRF_LANDSCAPE: TrfImageItem[] = [
  {
    id: 'ls-sacred-pheras',
    src: '/TRFImages/Landscape/imgi_21_640426438_18570792793001135_5456093389828733330_n.jpg',
    orientation: 'landscape',
    title: 'The Sacred Pheras & Royal Mandap',
    category: 'wedding',
    subtitle: 'Vows around the holy fire in traditional royal splendor',
    location: 'Gaya Royal Palace, Bihar',
    aspectRatio: '16/9',
  },
  {
    id: 'ls-varmala-spectacle',
    src: '/TRFImages/Landscape/imgi_24_626668006_18323915833220040_8719699378467942941_n.jpg',
    orientation: 'landscape',
    title: 'The Grand Varmala Exchange',
    category: 'wedding',
    subtitle: 'Cold pyro sparks and rose petal shower over the couple',
    location: 'Patna Heritage Courtyard',
    aspectRatio: '16/9',
  },
  {
    id: 'ls-haldi-celebrations',
    src: '/TRFImages/Landscape/imgi_20_631521060_18440523286106903_1537436156633983894_n.jpg',
    orientation: 'landscape',
    title: 'Golden Petals Haldi Ceremony',
    category: 'haldi',
    subtitle: 'Vibrant marigold toss and joyful laughter with family',
    location: 'Chhotki Nawada, Gaya',
    aspectRatio: '16/9',
  },
  {
    id: 'ls-grand-reception',
    src: '/TRFImages/Landscape/imgi_32_620864007_17966849669861639_3748337059208503361_n.jpg',
    orientation: 'landscape',
    title: 'The Royal Reception Night',
    category: 'reception',
    subtitle: 'Warm crystal chandeliers and congratulations under royal arches',
    location: 'Bodh Gaya Luxury Pavilion',
    aspectRatio: '16/9',
  },
  {
    id: 'ls-sunset-vows',
    src: '/TRFImages/Landscape/imgi_13_624210763_18107160370805406_5261196569911533042_n.jpg',
    orientation: 'landscape',
    title: 'Twilight Heritage Symphony',
    category: 'wedding',
    subtitle: 'Golden hour silhouette as vows are exchanged',
    location: 'Gaya Heritage Pavilion',
    aspectRatio: '16/9',
  },
  {
    id: 'ls-prewedding-golden',
    src: '/TRFImages/Landscape/imgi_15_621639958_18152969221441736_4683275603988541147_n.jpg',
    orientation: 'landscape',
    title: 'Whispering Winds Pre-Wedding',
    category: 'prewedding',
    subtitle: 'Quiet editorial moments in open nature',
    location: 'Bihar Heritage Escapes',
    aspectRatio: '16/9',
  },
  {
    id: 'ls-dubai-skyline',
    src: '/TRFImages/Landscape/imgi_25_636516568_18330827845174499_281208456552251551_n.jpg',
    orientation: 'landscape',
    title: 'Arabian Dunes & Marina Horizon',
    category: 'dubai',
    subtitle: 'Destination editorial across golden sands and modern architecture',
    location: 'Dubai Marina & Desert Oasis',
    aspectRatio: '16/9',
  },
  {
    id: 'ls-candid-emotions',
    src: '/TRFImages/Landscape/imgi_34_626040271_18120758188503409_3952542148648060645_n.jpg',
    orientation: 'landscape',
    title: 'Unspoken Family Blessings',
    category: 'wedding',
    subtitle: 'Tears of pride, joy and eternal paternal love',
    location: 'Gaya, Bihar',
    aspectRatio: '16/9',
  },
  {
    id: 'ls-heritage-architecture',
    src: '/TRFImages/Landscape/imgi_35_621676890_18082783598517884_208520912623885485_n.jpg',
    orientation: 'landscape',
    title: 'Royal Procession & Baraat',
    category: 'wedding',
    subtitle: 'Dhol rhythms, traditional brass bands, and energetic entrance',
    location: 'Civil Lines, Gaya',
    aspectRatio: '16/9',
  },
];

export const TRF_PORTRAIT: TrfImageItem[] = [
  {
    id: 'pt-royal-bride-portrait',
    src: '/TRFImages/Portrait/imgi_28_655435081_18146026807467047_9067940825357840759_n.jpg',
    orientation: 'portrait',
    title: 'The Regal Heirloom Bride',
    category: 'editorial',
    subtitle: 'Crimson silk lehenga, kundan necklace, and graceful gaze',
    location: 'Royal Suite, Gaya',
    aspectRatio: '4/5',
  },
  {
    id: 'pt-couple-intimate',
    src: '/TRFImages/Portrait/imgi_18_652309555_18103077068497863_7634200969736434127_n.jpg',
    orientation: 'portrait',
    title: 'Eternal Embrace',
    category: 'wedding',
    subtitle: 'Stealing a quiet second between grand ceremonies',
    location: 'Gaya Heritage Pavilion',
    aspectRatio: '4/5',
  },
  {
    id: 'pt-radiant-smiles',
    src: '/TRFImages/Portrait/imgi_27_656423829_18109550149762401_8073828884967204119_n.jpg',
    orientation: 'portrait',
    title: 'Radiance of the Bride',
    category: 'editorial',
    subtitle: 'Natural light bridal preparation and heritage jewelry',
    location: 'Atelier Stills, Bihar',
    aspectRatio: '4/5',
  },
  {
    id: 'pt-haldi-glow',
    src: '/TRFImages/Portrait/imgi_21_655473194_18223040449311700_6507073203845010531_n.jpg',
    orientation: 'portrait',
    title: 'The Haldi Yellow Aura',
    category: 'haldi',
    subtitle: 'Drenched in turmeric turmeric glow and genuine smiles',
    location: 'Chhotki Nawada, Gaya',
    aspectRatio: '4/5',
  },
  {
    id: 'pt-royal-couple-vows',
    src: '/TRFImages/Portrait/imgi_29_655024485_18177059080390589_2698320352380932793_n.jpg',
    orientation: 'portrait',
    title: 'Two Souls, One Destiny',
    category: 'wedding',
    subtitle: 'Candid glances that speak louder than words',
    location: 'Patna Heritage Hall',
    aspectRatio: '4/5',
  },
  {
    id: 'pt-bridal-veil',
    src: '/TRFImages/Portrait/imgi_16_656019156_18075284768568867_1299563253967499816_n.jpg',
    orientation: 'portrait',
    title: 'Under the Golden Dupatta',
    category: 'editorial',
    subtitle: 'Intricate zardozi embroidery and emotional bridal poise',
    location: 'Gaya, Bihar',
    aspectRatio: '4/5',
  },
  {
    id: 'pt-reception-elegance',
    src: '/TRFImages/Portrait/imgi_30_640238896_18570954487013231_1308106914539872207_n.jpg',
    orientation: 'portrait',
    title: 'Evening Couture & Velvet Stills',
    category: 'reception',
    subtitle: 'Contemporary bridal wear meeting timeless royal portraits',
    location: 'Bodh Gaya Grand Hotel',
    aspectRatio: '4/5',
  },
  {
    id: 'pt-mehendi-hands',
    src: '/TRFImages/Portrait/imgi_31_657252924_18077296238637771_4795427437529894295_n.jpg',
    orientation: 'portrait',
    title: 'Sacred Henna Artistry',
    category: 'wedding',
    subtitle: 'Intricate bridal mehndi celebrating eternal love',
    location: 'Gaya, Bihar',
    aspectRatio: '4/5',
  },
  {
    id: 'pt-heritage-look',
    src: '/TRFImages/Portrait/imgi_33_624626787_18152771785431186_8208784225087110775_n.jpg',
    orientation: 'portrait',
    title: 'Classic Royalty',
    category: 'editorial',
    subtitle: 'A cinematic tribute to vintage Bihari and Indian wedding tradition',
    location: 'Bihar Heritage Estate',
    aspectRatio: '4/5',
  },
];

export interface InstagramFeedItem {
  id: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
  type: 'reel' | 'post';
  aspectRatio: string;
}

export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/the.royal.films/';
export const INSTAGRAM_HANDLE = '@the.royal.films';
export const INSTAGRAM_FOLLOWER_COUNT = '18.4K';

export const INSTAGRAM_POSTS: InstagramFeedItem[] = [
  {
    id: 'ig-1',
    image: '/TRFImages/Portrait/imgi_28_655435081_18146026807467047_9067940825357840759_n.jpg',
    caption: 'Pure royal aura. When traditions speak to the heart in Gaya. ✨💍 #TheRoyalFilms #BihariBride',
    likes: '1,420',
    comments: '88',
    type: 'post',
    aspectRatio: '4/5',
  },
  {
    id: 'ig-2',
    image: '/TRFImages/Landscape/imgi_21_640426438_18570792793001135_5456093389828733330_n.jpg',
    caption: 'The Sacred Pheras. 4K HDR master film teaser now streaming. 🎥🔥 #WeddingCinema #RoyalWeddings',
    likes: '2,890',
    comments: '142',
    type: 'reel',
    aspectRatio: '16/9',
  },
  {
    id: 'ig-3',
    image: '/TRFImages/Portrait/imgi_21_655473194_18223040449311700_6507073203845010531_n.jpg',
    caption: 'Yellow bliss! Haldi celebrations filled with unfiltered family joy in Chhotki Nawada. 🌼💛 #HaldiVibes',
    likes: '1,830',
    comments: '76',
    type: 'post',
    aspectRatio: '4/5',
  },
  {
    id: 'ig-4',
    image: '/TRFImages/Landscape/imgi_24_626668006_18323915833220040_8719699378467942941_n.jpg',
    caption: 'The grand Varmala entry of Abhishek & Priya. Cinematic fireworks and sheer perfection! 🎇👑 #RoyalEntry',
    likes: '3,210',
    comments: '195',
    type: 'reel',
    aspectRatio: '16/9',
  },
  {
    id: 'ig-5',
    image: '/TRFImages/Portrait/imgi_18_652309555_18103077068497863_7634200969736434127_n.jpg',
    caption: 'Quiet glances before eternity begins. Booking 2026-2027 wedding seasons now. 💫 #CoupleGoals',
    likes: '2,150',
    comments: '110',
    type: 'post',
    aspectRatio: '4/5',
  },
  {
    id: 'ig-6',
    image: '/TRFImages/Landscape/imgi_25_636516568_18330827845174499_281208456552251551_n.jpg',
    caption: 'Dubai Destination Diaries. Filming love stories across desert horizons and luxury yachts. 🇦🇪🎥 #DubaiWedding',
    likes: '2,940',
    comments: '164',
    type: 'reel',
    aspectRatio: '16/9',
  },
];
