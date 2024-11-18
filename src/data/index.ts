
function getRandomValue(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export const destinationsItems = [
    {
        id: "1",
        image:"https://img.freepik.com/free-photo/beautiful-water-villas-tropical-maldives-island_1232-4486.jpg?t=st=1730306369~exp=1730309969~hmac=b80232ba6ec41bb844d807d7ca6fc7c0692e3aa444023dd57c2fec00f1e0b066&w=900",
        title: "Switzerland",
        rating: getRandomValue(1, 5),
        period: "3 Days 4 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "2",
        image: "https://img.freepik.com/free-photo/view-breathtaking-beach-nature-landscape_23-2151682923.jpg?t=st=1730171624~exp=1730175224~hmac=ead08d331597563df9636d425441cb06236fc9a3ce194545903f576ef9f2cefc&w=1060",
        title: "Maldives",
        rating: getRandomValue(1, 5),
        period: "5 Days 6 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "3",
        image: "https://img.freepik.com/premium-photo/photo-is-must-everyday-work-ai-generated-best-wonderful-photo_865967-1090673.jpg?w=1060",
        title: "Turkey",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "4",
        image: "https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg?t=st=1730171690~exp=1730175290~hmac=11bb65529f4fb175638287152142aff9922b38418fc2088cf79f21415980e64c&w=900",
        title: "Thailand",
        rating: getRandomValue(1, 5),
        period: "6 Days 5 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "5",
        image: "https://img.freepik.com/free-photo/portrait-young-person-holding-camera-device-world-photography-day_23-2151609235.jpg?t=st=1730171711~exp=1730175311~hmac=c05d7a878391f653161bebd692695e51f1196678d6f011cbf0efe5ff6af46209&w=900",
        title: "Hawaii",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "6",
        image: "https://img.freepik.com/premium-photo/two-people-walking-by-lake-with-mountains-background_865967-64157.jpg?w=900",
        title: "Dubai",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "7",
        image: "https://img.freepik.com/premium-photo/beach-scene-with-palm-trees-bridge_1301236-75468.jpg?w=1060",
        title: "Amazon Rainforest",
        rating: getRandomValue(1, 5),
        period: "7 Days 6 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "8",
        image: "https://img.freepik.com/free-photo/tourist-sitting-phu-sub-lek-viewpoint-sunset-lopburi-thailand_335224-1390.jpg?t=st=1730171570~exp=1730175170~hmac=b056c363e449526d32d924b928b93cf8a6aba9a70e50ddc6241aabd4b1a59d81&w=900",
        title: "Alaska",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "9",
        image: "https://img.freepik.com/free-photo/house-landscape-pool-relaxation-garden_1203-4900.jpg?t=st=1730171837~exp=1730175437~hmac=48ab166ecc389af5316fbd03e1755634619907cce2c7c3b8b2fc19fdcf1ac71e&w=900",
        title: "Tuscany",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "10",
        image: "https://img.freepik.com/premium-photo/pool-waterfall-is-surrounded-by-green-landscape_865967-23473.jpg?w=900",
        title: "Rome",
        rating: getRandomValue(1, 5),
        period: "5 Days 4 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "11",
        image: "https://img.freepik.com/free-photo/rest-sunshine-atoll-bungalow-holiday_1232-3876.jpg?t=st=1730171888~exp=1730175488~hmac=7e93a7044d5f23f6e7335fe8db8c831ff5cc8885a513b680d68f7692368df977&w=900",
        title: "Phuket",
        rating: getRandomValue(1, 5),
        period: "4 Days 3 Nights",
        price: getRandomValue(500, 5000),
    },
    {
        id: "12",
        image: "https://img.freepik.com/free-photo/beautiful-girl-running-wooden-path-koh-nang-yuan-island-near-koh-tao-island-surat-thani-thailand_335224-1089.jpg?t=st=1730171903~exp=1730175503~hmac=25e4927317a26ee8ef971d00b74611f48ab8b1926906bee583245bbcad8d6a46&w=900",
        title: "Lake Tahoe",
        rating: getRandomValue(1, 5),
        period: "3 Days 2 Nights",
        price: getRandomValue(500, 5000),
    },
]


export const hotels =[
   {
     id: "1",
     image: "https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg?t=st=1730173215~exp=1730176815~hmac=767920a16df79e74c0d75ec2a8776b7ef9dbd172ce98a61ba00409d2e2944fe0&w=900",
     title: "Charming Sanctuary",
     bed: "Kings Bed",
     capacity: getRandomValue(1, 10),
     rating: getRandomValue(1, 5),
     price: getRandomValue(500, 5000)
   },
   {
    id: "2",
    image: "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1823.jpg?t=st=1730172914~exp=1730176514~hmac=1204a569747d626514f8cebd22d60ee935da41290f55ae62d365166399caa65d&w=900",
    title: "Majestic Hideaway",
    bed: "Kings Bed",
    capacity: getRandomValue(1, 10),
    rating: getRandomValue(1, 5),
    price: getRandomValue(500, 5000)
   },
  {
    id: "3",
    image: "https://img.freepik.com/premium-photo/hotel-room-with-bed-table-lamp_865967-1218430.jpg?w=900",
    title:"Enchanting Palace",
    bed: "Kings Bed",
    capacity: getRandomValue(1, 10),
    rating: getRandomValue(1, 5),
    price: getRandomValue(500, 5000)
  },
  {
    id: "4",
    image: "https://img.freepik.com/premium-photo/hotel-room-with-bed-yellow-pillows-lamp_1308175-6449.jpg?w=740",
    title: "Quaint Residence",
    bed: "Kings Bed",
    capacity: getRandomValue(1, 10),
    rating: getRandomValue(1, 5),
    price: getRandomValue(500, 5000)
  },
]

export const testmonials =[
    {
        name: "Mike Johnson",
        rating: 5,
        description: "Exceptional service! the team went beyond and above to meet by exceptions. I am impressed by the attention to detail and prompt communication. Highly Recommend",
        country: "United States",
        image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1730218429~exp=1730222029~hmac=94ac9c4058ccabdb95ebb00269ea2085a76807a4e526b9aa7074641d016edd6a&w=826",
    },
    {
        name: "John Anderson",
        rating: 4,
        description: "Great experience overall. The product quality is good and the delivery was on time. Will consider for future purchases.",
        country: "Cananda",
        image: "https://img.freepik.com/premium-photo/young-middle-eastern-young-attractive-male-model-posing_21730-5392.jpg?w=360",
    },
    {
        name: "Sophia Ramirez",
        rating: 5,
        description: "Outstanding Customer service! The team was incredibly helpful and responsive. They addressed all my concerns, making the entire process smooth. Very satisfied with the outcome.",
        country: "Australia",
        image: "https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg?t=st=1730218497~exp=1730222097~hmac=3aec35e02b3c1a0b43dd9f1829611550123fe69409d7f5380cf510e199a493c9&w=740",
    },
]