import userImage from "../assets/profile_img.jpg";

const data = [
  { id: 1, img: userImage, name: "Ritesh", stars: 5, emission: 290, rank: 1 },
  {
    id: 2,
    img: userImage,
    name: "Sonia Bajaj",
    stars: 4,
    emission: 340,
    rank: 2,
  },
  {
    id: 3,
    img: userImage,
    name: "Rahul Bandu",
    stars: 3,
    emission: 390,
    rank: 3,
  },
  {
    id: 4,
    img: userImage,
    name: "Mousin Khan",
    stars: 2,
    emission: 437,
    rank: 4,
  },
  {
    id: 5,
    img: userImage,
    name: "Kavita Saxena",
    stars: 1,
    emission: 610,
    rank: 5,
  },
];

const UserComponent = ({ imgSrc, name, stars, emission, rank }) => {
  return (
    <div className="grid grid-cols-4 items-center py-4 border-b border-gray-300">
      <div className="flex items-center space-x-4">
        <img className="rounded-full w-16 h-16" src={imgSrc} alt={name} />
        <div>{name}</div>
      </div>
      <div className="text-center">{stars}</div>{" "}
      {/* Loop or icons can be added here */}
      <div className="text-center">{emission}</div>
      <div className="text-center">{rank}</div>
    </div>
  );
};

const LeadersComponent = ({ date }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between mb-6">
        <div className="text-gray-600 text-4xl">LIFEstyle Leaders</div>
        <div>{date}</div>
      </div>
      <hr className="mb-6" />
      <div className="grid grid-cols-4 font-semibold text-gray-600 mb-4">
        <div>Users</div>
        <div className="text-center">Ace Level</div>
        <div className="text-center">Avg monthly CO2 emission (kg)</div>
        <div className="text-center">Rank</div>
      </div>
      <div>
        {data.map((user) => (
          <UserComponent
            key={user.id}
            imgSrc={user.img}
            name={user.name}
            stars={user.stars}
            emission={user.emission}
            rank={user.rank}
          />
        ))}
      </div>
    </div>
  );
};

export default LeadersComponent;
