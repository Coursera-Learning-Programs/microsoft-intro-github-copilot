import PomodoroTimer from "../components/PomodoroTimer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Pomodoro App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PomodoroTimer />
    </div>
  );
}
