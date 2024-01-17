import Chip from "./components/Chip";

function App() {
  const items = [
    {
      name: "Ken Alwarez",
      email: "kenalwarez@gmail.com",
      color: "text-blue-500",
      id: 1,
    },
    {
      name: "Tracy Bing",
      email: "tracybing@gmail.com",
      color: "text-red-500",
      id: 2,
    },
    {
      name: "Soham Newman",
      email: "sohamnewman@gmail.com",
      color: "text-green-500",
      id: 3,
    },
    {
      name: "Denise Hall",
      email: "denisehall@gmail.com",
      color: "text-orange-500",
      id: 4,
    },
    {
      name: "Letitia George",
      email: "letitiageorge@gmail.com",
      color: "text-yellow-500",
      id: 5,
    },
    {
      name: "Calvin Jones",
      email: "calvinjones@gmail.com",
      color: "text-pink-800",
      id: 6,
    },
  ];

  const handleSelect = (selectedItems) => {
    console.log(selectedItems);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-3xl font-bold text-blue-700 mb-10">Pick Users</p>
      <Chip items={items} onSelect={handleSelect} />
    </div>
  );
}

export default App;
