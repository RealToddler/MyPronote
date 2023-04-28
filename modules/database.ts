import { db } from "./firebase";
import { doc, getDoc} from "firebase/firestore";

export async function getNotes(user: any) {
    const docReference = doc(db, "Grades", user);
    const document = await getDoc(docReference);
    if (document.exists()) {
        console.log(fetchNoteData(document.data()));
    } else {
        console.log("Could not get document")
    }
    return "document.data()";
}


function fetchNoteData(notesDocument: any) {
    let fetchedData: Array<object> = [];
    for (let k in notesDocument) {
        for (let i=0; i < notesDocument[k].length; i++) {
            let note = notesDocument[k][i];
            note["date"] = note["date"].toDate().toLocaleDateString();
            
            fetchedData.push(note);
        }
    }
    return fetchedData;
}
getNotes("eleve1");