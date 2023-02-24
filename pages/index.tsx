import LastGradesCard from "components/student/LastGrades";
import Header from "components/Header";
import Footer from "components/Footer";
import StudentHeader from "components/UserHeader";
import Diary from "components/student/Diary";
import TimeTable from "components/TimeTable";
import StudentLifeCard from "components/student/StudentLife";
import InfosAndPolls from "components/InfosAndPolls";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header
        school="CHEIKH SCHOOL"
        userSpace="Student"
        userInfo="ALWAYS BEEN Toddler (T C)"
        userImage="toddler pfp.png"
      />
      <StudentHeader />
      <div className="flex w-screen justify-center space-x-4 p-4">
        <TimeTable />
        <Diary />
        <div>
          <StudentLifeCard />
          <LastGradesCard />
        </div>
        <InfosAndPolls/>
      </div>
      <Footer/>
    </div>
  );
}
