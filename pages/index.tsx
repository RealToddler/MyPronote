import LastGrades from "components/student/LastGrades";
import Header from "components/Header";
import Footer from "components/Footer";
import StudentHeader from "components/UserHeader";
import Diary from "components/student/Diary";
import TimeTable from "components/TimeTable";
import StudentLife from "components/student/StudentLife";
import InfosAndPolls from "components/InfosAndPolls";
import Resources from "components/student/Resources";

export default function Home() {
  return (
    <div className="h-screen w-auto bg-sky-50">
      <div className="fixed">
        <Header
          school="CHEIKH SCHOOL"
          userSpace="Student"
          userInfo="ALWAYS BEEN Toddler (T C)"
          userImage="toddler pfp.png"
        />
        <StudentHeader />
      </div>
      <div className="flex justify-center space-x-8 pt-[150px] pb-8">
        <TimeTable />
        <Diary />
        <div className="space-y-8">
          <StudentLife />
          <Resources />
        </div>
        <div className="space-y-8">
          <InfosAndPolls />
          <LastGrades />
        </div>
      </div>
      <Footer />
    </div>
  );
}
