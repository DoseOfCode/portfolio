import { CalculateAgeFromBirthday } from "./helpers";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#10111b] text-white text-center font-['Lexend_Deca']">
      <div>
        <h1 className="font-bold text-6xl">
          Hi, my name is{" "}
          <span className="bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent">
            Beaudene
          </span>
        </h1>

        <p className="mt-5">
          I'm a {CalculateAgeFromBirthday(30, 12, 2004)} year old developer from
          New Zealand
        </p>
      </div>
    </div>
  );
}
