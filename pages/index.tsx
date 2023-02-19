import LastGradesCard from "components/LastGradesCard";
import Header from "components/Header";
import Footer from "components/Footer";
import StudentHeader from "components/UserHeader";
import NextHomeWorksCard from "components/NextHomeworksCard";
import TimeTable from "components/TimeTable";

export default function Home() {
  return (
    <div>
      <Header
        school="CHEIKH SCHOOL"
        userSpace="Student"
        userInfo="ALWAYS BEEN Toddler (T C)"
        userImage="toddler pfp.png"
      />
      <StudentHeader />
      <div className="flex">
        <TimeTable />
        <NextHomeWorksCard />
        <LastGradesCard />
        <a href="login">login page</a>
      </div>
      <Footer />
    </div>
  );
}
