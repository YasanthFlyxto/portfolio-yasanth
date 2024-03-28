import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="flex items-center justify-center h-screen">
        <div className="rounded-lg shadow-lg w-64">
          <div className="h-24 bg-blue-600 rounded-t-lg" />
          <Image
            alt="User avatar"
            className="rounded-full -mt-12 border-4 border-white mx-auto"
            height="100"
            src="/assets/pfp.jpg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold">Yasanth Dolamulla</h2>
            <p className="text-gray-500">Full Stack Developer</p>
          </div>
          <div className="flex justify-around my-4">
            <p>TODO : ADD DETAILS HERE</p>

          </div>

        </div>
      </div>
    </div>

  );
}
