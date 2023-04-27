import { db } from "./firebase";
import { doc, getDoc} from "firebase/firestore";

export async function getNotes(user: any) {
    const docReference = doc(db, "Grades", user);
    const document = await getDoc(docReference);
    if (document.exists()) {
        console.log(document.data());
        console.log(fetchNoteData(document.data()["TMATHSGR.3"][0]));
    } else {
        console.log("Could not get document")
    }
    return "document.data()";
}

function fetchNoteData(document: any) {
    const dateOfGrade = document["date"].toDate().toLocaleDateString();
    const fetchedNoteData = `Your note for ${document["gradeName"]} was: ${document["grade"]}/${document["scale"]}. This note was in ${document["subjectName"]} \
and has a coef of ${document["coef"]}. The date of that note is ${dateOfGrade}`;
    return fetchedNoteData;
}

getNotes("eleve1");