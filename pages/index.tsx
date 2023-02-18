import LastGradesCard from "components/LastGradesCard";
import HomeworksCard from "components/HomeworksCard";
import Header from "components/Header";
import Footer from "components/Footer";
import StudentHeader from "components/UserHeader";

export default function Home() {
  return (
    <div>
      <Header
        school="CHEIKH SCHOOL"
        userSpace="Student"
        userInfo="ALWAYS BEEN Toddler (T C)"
        userImage="toddler pfp.png"
      />
      <StudentHeader/>
      <div className="flex space-x-4">
        <LastGradesCard />
        <HomeworksCard />
        <a href="login">click me</a>
      </div>
      <Footer />
    </div>
  );
}
