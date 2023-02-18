import LastGradesCard from "components/LastGradesCard";
import HomeworksCard from "components/HomeworksCard";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Home() {
  return (
    <div>
      <Header
        school="CHEIKH SCHOOL"
        userSpace="Student"
        userInfo="ALWAYS BEEN Toddler (T C)"
        userImage="toddler pfp.png"
      />
      <div className="flex space-x-4">
        <LastGradesCard />
        <HomeworksCard />
        <a href="login">click me</a>
      </div>
      <Footer />
    </div>
  );
}
